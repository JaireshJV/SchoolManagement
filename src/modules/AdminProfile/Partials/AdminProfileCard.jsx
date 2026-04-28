import React, { useState, useEffect } from 'react';
import { Form, Upload, Avatar, Switch, message, Row, Col, Card } from 'antd';
import { UserOutlined, UploadOutlined, EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { CustomCardView, CustomRow, Flex } from '@components/others';
import { Button, CustomInput, CustomInputNumber, CustomInputPassword, CustomSelect, CustomUpload } from '@components/form';
import { CustomPageFormTitle } from '@components/others/CustomPageTitle';
import { useSelector } from 'react-redux';
import { selectCurrentId } from '@modules/Auth/authSlice';
import { baseRequest, IMG_BASE_URL } from '@request/request';
import errorHandler from '@request/errorHandler';
import successHandler from '@request/successHandler';
import {
    StyledProfileContainer,
    ProfileImageSection,
} from '../style';
import { APIURLS } from '@request/apiUrls/urls';
import { useFetchImageAsBase64 } from '@utils/fetchImageAsBase64';



const AdminProfileEdit = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    // const [uploading, setUploading] = useState(false);
    const [/* imageInitialValue */, setImageInitialValue] = useState([]);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [profileName, setProfileName] = useState("");

    const UserId = useSelector(selectCurrentId);
  const { fetchImageAsBase64 } = useFetchImageAsBase64();

    const roleOptions = [
        { label: 'Admin', value: 'ADMIN' },
        { label: 'Super Admin', value: 'SUPERADMIN' },
        { label: 'User', value: 'USER' },
        { label: 'Manager', value: 'MANAGER' }
    ];

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                setLoading(true);
                const response = await baseRequest.get(APIURLS.USER_ADMIN_DETAILSGET, { params: { user: "adminDetail" } });
                const userData = response.data.find(user => user.id === parseInt(UserId));

                if (userData) {
                    const fullUrl = `${IMG_BASE_URL}${userData.profile}`;
                    const base64 = await fetchImageAsBase64(fullUrl);

                    setUserDetails(userData);
                    setImageUrl(base64);

                    if (userData.profile) {
                        const fileName = userData.profile.split('/').pop();
                        const fileExtension = fileName.split('.').pop();
                        setProfileName(fileExtension);
                    }

                    form.setFieldsValue({
                        userNmae: userData.userNmae,
                        email: userData.email,
                        phoneNumber: userData.phoneNumber,
                        roles: userData.roles,
                        status: userData.status,
                        password: userData.password
                    });

                    if (userData?.profile?.length > 0) {
                        const initialFile = {
                            uid: `${userData.id}`,
                            name: userData.userNmae || "profile.jpg",
                            status: "done",
                            url: base64,
                        };
                        setImageInitialValue([initialFile]);
                        setFileList([initialFile]);
                    } else {
                        setImageInitialValue([]);
                        setFileList([]);
                    }
                } else {
                    message.error('User not found');
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
                message.error('Failed to fetch user details');
            } finally {
                setLoading(false);
            }
        };

        if (UserId) {
            fetchUserDetails();
        }
    }, [UserId, form, navigate]);

    const UpdateUserProfileApi = async (formData) => {
        setLoading(true);
        await baseRequest
            .put(`user/user/edit/${UserId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            .then(function (response) {
                successHandler(response, {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                    msg: response.data.message,
                    type: "success",
                });
                setLoading(false);
                window.location.href = '/';
                return response.data;
            })
            .catch(function (error) {
                setLoading(false);
                return errorHandler(error);
            });
    };

    const onFinish = (values) => {
        const formData = new FormData();
        formData.append('userName', values.userNmae ? values.userNmae : '');
        formData.append('email', values.email ? values.email : '');
        formData.append('roleName', values.roles ? values.roles : '');
        formData.append('phoneNumber', values.phoneNumber ? values.phoneNumber : '');
        formData.append('status', values.status ? values.status : false);
        formData.append('userid', parseInt(UserId));
        formData.append('userId', UserId);

        if (uploadedFile) {
            formData.append('userProfile', uploadedFile);
            formData.append('imageStatus', true);
            formData.append('fileName', profileName);
        } else {
            formData.append('fileName', profileName);
            formData.append('imageStatus', false);
        }

        console.log([...formData.entries()], 'updateAdminProfile');
        UpdateUserProfileApi(formData);
    };

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo);
        message.error('Please fill in all required fields correctly.');
    };

    const handleFileChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);

        if (newFileList.length > 0) {
            const file = newFileList[0];
            if (file.originFileObj) {
                // Extract and set filename extension
                const fileName = file.name;
                const fileExtension = fileName.split('.').pop();
                setProfileName(fileExtension);

                setUploadedFile(file.originFileObj);
                const reader = new FileReader();
                reader.onload = (e) => {
                    setImageUrl(e.target.result);
                };
                reader.readAsDataURL(file.originFileObj);
            }
        } else {
            setUploadedFile(null);
            if (userDetails?.profile) {
                const fullUrl = `${IMG_BASE_URL}${userDetails.profile}`;
                fetchImageAsBase64(fullUrl).then(base64 => {
                    setImageUrl(base64);
                });
            } else {
                setImageUrl('');
            }
        }
    };

    const uploadProps = {
        fileList: fileList,
        onChange: handleFileChange,
        beforeUpload: (file) => {
            const isImage = file.type.startsWith('image/');
            if (!isImage) {
                message.error('You can only upload image files!');
                return false;
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Image must be smaller than 2MB!');
                return false;
            }
            return false;
        },
        onRemove: () => {
            setUploadedFile(null);
            setFileList([]);
            setProfileName("");
            if (userDetails?.profile) {
                const fullUrl = `${IMG_BASE_URL}${userDetails.profile}`;
                fetchImageAsBase64(fullUrl).then(base64 => {
                    setImageUrl(base64);
                });
            } else {
                setImageUrl('');
            }
        },
        maxCount: 1,
    };

    if (loading && !userDetails) {
        return (
            <StyledProfileContainer>
                <Card loading={loading} />
            </StyledProfileContainer>
        );
    }

    const ProfileImageSectionComponent = ({
        imageUrl,
        uploadProps,
        fileList,
        userDetails,
        onRemoveFile
    }) => {
        return (
            <ProfileImageSection>
                <div className="profile-avatar-container">
                    <Avatar
                        size={150}
                        src={imageUrl}
                        icon={<UserOutlined />}
                        className="profile-avatar"
                    />
                </div>

                <Upload {...uploadProps} showUploadList={false}>
                    <Button
                        icon={<UploadOutlined />}
                        className="upload-btn"
                    >
                        Change Photo
                    </Button>
                </Upload>

                {fileList.length > 0 && (
                    <div className="file-info">
                        <p>Selected: {fileList[0].name}</p>
                        <Button
                            size="small"
                            className="remove-btn"
                            icon={<DeleteOutlined />}
                            onClick={onRemoveFile}
                        >
                            Remove
                        </Button>
                    </div>
                )}

                <div className="user-info">
                    <h3>{userDetails?.userNmae}</h3>
                    <p className="role-badge">{userDetails?.roles}</p>
                </div>
            </ProfileImageSection>
        );
    };

    return (
        <StyledProfileContainer>
            {/* <ProfileHeader>
                <h2><EditOutlined /> Edit Admin Profile</h2>
            </ProfileHeader> */}

            <CustomCardView>
                <Form
                    form={form}
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <CustomRow space={[24, 24]}>
                        <Col span={24} md={24}>
                            <CustomPageFormTitle
                                Heading="Edit Admin Profile"
                            />
                        </Col>

                        <Col xs={24} md={8}>
                            <ProfileImageSectionComponent
                                imageUrl={imageUrl}
                                uploadProps={uploadProps}
                                fileList={fileList}
                                userDetails={userDetails}
                                onRemoveFile={() => {
                                    setUploadedFile(null);
                                    setFileList([]);
                                    setProfileName("");
                                    if (userDetails?.profile) {
                                        const fullUrl = `${IMG_BASE_URL}${userDetails.profile}`;
                                        fetchImageAsBase64(fullUrl).then(base64 => {
                                            setImageUrl(base64);
                                        });
                                    } else {
                                        setImageUrl('');
                                    }
                                }}
                            />
                        </Col>

                        <Col xs={24} md={16}>
                            <CustomRow space={[16, 16]}>
                                <Col xs={24} md={12}>
                                    <CustomInput
                                        label="Full Name"
                                        name="userNmae"
                                        placeholder="Enter full name"
                                        rules={[
                                            { required: true, message: 'Please enter full name' },
                                            { min: 2, message: 'Name must be at least 2 characters' },
                                            {
                                                pattern: /^[A-Za-z\s]+$/,
                                                message: 'Only alphabetic characters are allowed',
                                            }
                                        ]}
                                    />
                                </Col>

                                <Col xs={24} md={12}>
                                    <CustomInput
                                        label="Email Address"
                                        name="email"
                                        placeholder="Enter email address"
                                        rules={[
                                            { required: true, message: 'Please enter email' },
                                            { type: 'email', message: 'Please enter a valid email' }
                                        ]}
                                    />
                                </Col>

                                <Col xs={24} md={12}>
                                    <CustomInputNumber
                                        label="Phone Number"
                                        name="phoneNumber"
                                        placeholder="Enter phone number"
                                        rules={[
                                            { required: true, message: 'Please enter phone number' },
                                            { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number' }
                                        ]}
                                        maxLength={10}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                        style={{ width: '100%' }}
                                    />
                                </Col>

                                <Col xs={24} md={12}>
                                    <CustomSelect
                                        label="Role"
                                        name="roles"
                                        placeholder="Select role"
                                        showSearch={true}
                                        options={roleOptions}
                                        rules={[{ required: true, message: 'Please select a role' }]}
                                        disabled={true}
                                    />
                                </Col>
                                <Col span={24} md={12}>
                                    <CustomInputPassword
                                        label={'Password'}
                                        name="password"
                                        placeholder={'Enter your Password'}
                                        rules={[
                                            { required: true, message: 'Please enter a password' },
                                        ]} />
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        label="Status"
                                        name="status"
                                        valuePropName="checked"
                                    >
                                        <Switch
                                            checkedChildren="Active"
                                            unCheckedChildren="Inactive"
                                        />
                                    </Form.Item>
                                </Col>
                            </CustomRow>
                        </Col>
                    </CustomRow>

                    <Flex gap="20px" end="true" margin="-20px 0">
                        <Button.Danger
                            text="Cancel"
                            onClick={() => navigate('/')}
                        />
                        <Button.Primary
                            text="Update Profile"
                            htmlType="submit"
                            loading={loading}
                            icon={<SaveOutlined />}
                        />
                    </Flex>
                </Form>
            </CustomCardView>
        </StyledProfileContainer>
    );
};

export default AdminProfileEdit;