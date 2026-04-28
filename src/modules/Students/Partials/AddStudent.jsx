import { CustomCardView, CustomRow, Flex } from "@components/others";
import React, { useState, useEffect } from "react";
import { Col, Form } from "antd";
import {
  Button,
  CustomInput,
  CustomInputNumber,
  CustomTextArea,
  CustomUpload,
  CustomSelect,
} from "@components/form";
import { CustomPageFormTitle } from "@components/others/CustomPageTitle";
import { useSelector } from "react-redux";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { baseRequest, IMG_BASE_URL } from "@request/request";
import errorHandler from "@request/errorHandler";
import successHandler from "@request/successHandler";
import { removeSelectedCompanyId } from "@utils/cryptoUtils";
import { useFetchImageAsBase64 } from "@utils/fetchImageAsBase64";
import { useNavigate } from "react-router-dom";

const AddNewStudent = ({
  updateRecord,
  FormExternalClose,
  fetchStudentDetails,
}) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [profileInitialValue, setProfileInitialValue] = useState([]);
  const [qrInitialValue, setQrInitialValue] = useState([]);
  const [signatureInitialValue, setSignatureInitialValue] = useState([]);
  const [showIdCard, setShowIdcard] = useState(true);

  const UserId = useSelector(selectCurrentId);
  const { fetchImageAsBase64 } = useFetchImageAsBase64();

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [form]);

  const AddNewStudentApi = async (formData) => {
    setIsLoading(true);
    try {
      const response = await baseRequest.post("/api/neet/register1", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
        msg: response.data.message,
        type: "success",
      });

      form.resetFields();
      fetchStudentDetails();
      if (FormExternalClose) FormExternalClose();
      return response.data;
    } catch (error) {
      return errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  const schoolTypeOptions = [
    { label: "Private School", value: "Private School" },
    { label: "Government School", value: "Government School" },
    { label: "Repeated", value: "Repeated" },
  ];

  const onFinish = (values) => {
    const formData = new FormData();

    formData.append("name", values.name || "");
    formData.append("parentName", values.parentName || "");
    formData.append("parentProfession", values.parentProfession || "");
    formData.append("phone", values.phone || "");
    formData.append("dob", values.dob || "");
    formData.append("gender", values.gender || "");
    formData.append("email", values.email || "");
    formData.append("schoolType", values.schoolType || "");

    if (values?.profilePhoto && values.profilePhoto.length > 0) {
      values.profilePhoto.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("profilePhoto", file.originFileObj);
        }
      });
    }

    if (values?.aadhaarPhoto && values.aadhaarPhoto.length > 0) {
      values.aadhaarPhoto.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("aadhaarPhoto", file.originFileObj);
        }
      });
    }

    if (values?.idcard && values.idcard.length > 0) {
      values.idcard.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("idcard", file.originFileObj);
        }
      });
    }

    if (values?.signature && values.signature.length > 0) {
      values.signature.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("signature", file.originFileObj);
        }
      });
    }

    // console.log(
    //   [...formData.entries()],
    //   updateRecord ? "updateCompany" : "AddNewStudent",
    // );

    if (updateRecord) {
      EditCompanyApi(formData, updateRecord.mycompanyid);
    } else {
      AddNewStudentApi(formData);
    }
  };

  const handleProfile = (value) => {
    if (value?.file?.name) {
      // Extension tracking if needed
    }
  };

  const handleQr = (value) => {
    if (value?.file?.name) {
      // Extension tracking if needed
    }
  };

  const handleSignature = (value) => {
    if (value?.file?.name) {
      // Extension tracking if needed
    }
  };

  const handleSchoolType = (val) => {
    if (val == "Repeated") {
      setShowIdcard(false);
    }
    else{
        setShowIdcard(true);
    }
  };

  return (
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
        autoComplete="off"
      >
        <CustomRow space={[24, 24]}>
          {/* <Col span={24} md={24}>
            <CustomPageFormTitle
              Heading={updateRecord ? "Edit Company" : "Student Details :"}
            />
          </Col> */}

          <Col span={24} md={12}>
            <CustomInput
              label={"Student Name"}
              name={"name"}
              placeholder={"Enter Student name"}
              rules={[{ required: true, message: "Student name is required" }]}
            />
          </Col>

          <Col span={24} md={12}>
            <CustomInput
              label={"Email ID"}
              name={"email"}
              placeholder={"Enter email address"}
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            />
          </Col>

          <Col span={24} md={12}>
            <CustomInput
              label={"Date of Birth"}
              name={"dob"}
              type={"date"}
              placeholder={"Select date of birth"}
              rules={[{ required: true, message: "Date of birth is required" }]}
            />
          </Col>

          <Col span={24} md={12}>
            <CustomSelect
              label={"Gender"}
              name={"gender"}
              placeholder={"Select gender"}
              options={genderOptions}
              rules={[{ required: true, message: "Gender is required" }]}
            />
          </Col>

          <Col span={24} md={12}>
            <CustomInput
              label={"Parent Name"}
              name={"parentName"}
              placeholder={"Enter Parent Name"}
              rules={[{ required: true, message: "Parent Name is required" }]}
            />
          </Col>

          <Col span={24} md={12}>
            <CustomInput
              label={"Parent's Profession"}
              name={"parentProfession"}
              placeholder={"Enter Parent's Profession"}
              rules={[
                { required: true, message: "Parent's Profession  is required" },
              ]}
            />
          </Col>

          <Col span={24} md={12}>
            <CustomInputNumber
              label={"Phone Number"}
              name={"phone"}
              placeholder={"Enter Phone number"}
              rules={[{ required: true, message: "Phone number is required" }]}
              precision={0}
              maxLength={10}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={24} md={12}>
            <CustomSelect
              label={"School Type "}
              name={"schoolType"}
              options={schoolTypeOptions}
              placeholder={"Enter School Type"}
              onChange={handleSchoolType}
              rules={[{ required: true, message: "Please enter School Type" }]}
            />
          </Col>

          {/* <Col span={24} md={24}>
            <CustomTextArea
              label={"Address"}
              name={"address"}
              placeholder={"Enter complete address"}
              rows={4}
            />
          </Col> */}

          <Col span={24} md={6}>
            <CustomUpload
              label={"Profile"}
              name={"profilePhoto"}
              listType={"picture-card"}
              maxCount={1}
              accept={".png,.jpeg,.jpg"}
              form={form}
              onChange={handleProfile}
              initialValue={profileInitialValue}
              rules={[
                { required: true, message: "Please upload Profile Photo" },
              ]}
            />
          </Col>

          <Col span={24} md={6}>
            <CustomUpload
              label={"Aadhaar Photo"}
              name={"aadhaarPhoto"}
              listType={"picture-card"}
              maxCount={1}
              accept={".png,.jpeg,.jpg"}
              form={form}
              onChange={handleQr}
              initialValue={qrInitialValue}
              rules={[
                { required: true, message: "Please upload Aadhaar Photo" },
              ]}
            />
          </Col>

          {showIdCard ? (
            <Col span={24} md={6}>
              <CustomUpload
                label={"ID Card"}
                name={"idcard"}
                listType={"picture-card"}
                maxCount={1}
                accept={".png,.jpeg,.jpg"}
                form={form}
                onChange={handleSignature}
                initialValue={signatureInitialValue}
                rules={[{ required: true, message: "Please upload ID Card" }]}
              />
            </Col>
          ) : null}

          <Col span={24} md={6}>
            <CustomUpload
              label={"Signature"}
              name={"signature"}
              listType={"picture-card"}
              maxCount={1}
              accept={".png,.jpeg,.jpg"}
              form={form}
              onChange={handleSignature}
              initialValue={signatureInitialValue}
              rules={[{ required: true, message: "Please upload Signature" }]}
            />
          </Col>
        </CustomRow>

        <Flex gap={"20px"} end={"true"} margin={"20px 0"}>
          <Button
            htmlType={"submit"}
            loading={isLoading}
            style={{ background: "#40bc3e", color: "#f5e607" }}
          >
            Add Student
          </Button>
        </Flex>
      </Form>
    </CustomCardView>
  );
};

export default AddNewStudent;
