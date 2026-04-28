import React, { Fragment, useEffect, useState } from 'react'
import { Upload as AntdUpload, Button, Col, Form, Modal } from 'antd'
import styled from 'styled-components'
import { TbUpload } from "react-icons/tb";
import { CustomRow } from '@components/others';
import { THEME } from '@theme/index';
import { Styles } from '@components/form/CommonProperties'
import { SvgIcons } from '@assets/images';
import { Label } from './Label';
const { Item } = Form
const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
  }
  border-radius: 10px;
  margin-bottom: 5px !important;
 
  .label{
   display : flex;
   align-items: center;
  }

`
const AntdUploadStyle = styled(AntdUpload)`
 .ant-btn-default {
    border: 1px solid;
    width: 100%;
    border-radius:5px;
 }
 .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: ${THEME.black};
    border-color: #4096ff00;
 }
 &.ant-upload-wrapper .ant-upload-select{
    display:block;
 }
`
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const CustomSmallUpload = ({
    width,
    marginRight,
    minWidth,
    display,
    rules,
    name,
    label,
    required,
    labelStyle,
    optional,
    listType,
    maxCount,
    accept,
    action,
    onChange,
    form,
    multiple,
    initialValue,
    ...rest
}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewTitle, setPreviewTitle] = useState(null);
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const beforeUpload = (file) => {
        console.log({ file });
        return false;
    };
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    useEffect(() => {
        if (initialValue) {
            form.setFieldsValue({ [name]: initialValue }); // Set the initial value of the field
        }
    }, [form, initialValue, name]);
    return (
        <Fragment>
            <StyledItem
                style={{
                    width: width,
                    marginRight: marginRight,
                    minWidth: minWidth,
                    display: display,
                }}
                rules={rules}
                name={name}
                colon={false}
                required={false}
                valuePropName="fileList"
                getValueFromEvent={normFile}
                label={
                    label && (
                        <Fragment>
                            <Label required={required} labelStyle={labelStyle}>
                                {label} <span>{optional}</span>
                            </Label>
                        </Fragment>
                    )
                }
            >
                <AntdUploadStyle
                    {...rest}
                    // listType={listType}
                    maxCount={maxCount}
                    accept={accept}
                    action={action}
                    multiple={multiple}
                    onChange={onChange}
                    onPreview={handlePreview}
                    beforeUpload={beforeUpload}>
                    <Button style={{
                        height: Styles.Height,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px'
                    }} icon={<img src={SvgIcons.Upload} alt='upload' />}>
                        <span style={{
                            fontSize: Styles.InputSize,
                            fontWeight: Styles.InputWeight,
                            color: Styles.InputColor,
                        }}>
                            Upload
                        </span>
                    </Button>
                </AntdUploadStyle>
            </StyledItem>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </Fragment>
    )
}
export default CustomSmallUpload;