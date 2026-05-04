import { CloseOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
} from "antd";
import { useEffect } from "react";
import "./CommonForm.css";
import { CustomRow } from "@components/others";

const renderFields = (field) => {
  switch (field.type) {
    case "select":
      return <Select placeholder={field.placeholder} options={field.options} />;

    case "radio":
      return (
        <Radio.Group>
          {field.options?.map((opt) => {
            <Radio key={opt.value} value={opt.value}>
              {opt.label}
            </Radio>;
          })}
        </Radio.Group>
      );

    case "date":
      return (
        <DatePicker
          style={{ width: "100%" }}
          placeholder={field.placeholder || "Select date"}
        />
      );
    case "number":
      return (
        <InputNumber
          style={{ width: "100%" }}
          placeholder={field.placeholder}
        />
      );

    case "file":
      return (
        <Upload
        beforeUpload={()=> false}
        maxCount={1}
        >
          <Button icon={<UploadOutlined/>}>
            {field.placeholder || "Upload file"}
          </Button>
        </Upload>
      )

    case "password":
      return <Input.Password placeholder={field.placeholder} />;

    default:
      return <Input placeholder={field.placeholder} />;
  }
};

export const CommonForm = ({ name, fields = [], onSubmit, onClose, mode = "", initialValues = {} }) => {
  const [form] = Form.useForm();

  const handleReset = ()=>{
    form.resetFields();
  }

  const handleFinish = (values)=>{
    if(mode === "edit"){
        console.log(values, "Edited Values");
        onSubmit({ ...initialValues, ...values});
    }else{
        onSubmit(values);
    }
  };

const formatFile = (file) => {
  if (!file) return [];

  // already formatted (edit again case)
  if (Array.isArray(file)) return file;

  // string (URL from backend)
  if (typeof file === "string") {
    return [
      {
        uid: `${Date.now()}`,
        name: file.split("/").pop() || "file",
        status: "done",
        url: file,
      },
    ];
  }

  return [];
};


useEffect(() => {
  if (mode === "edit" && initialValues) {
    const formattedValues = { ...initialValues };

    fields.forEach((field) => {
      // ✅ handle select object → id
      if (field.type === "select" && typeof initialValues[field.name] === "object") {
        formattedValues[field.name] = initialValues[field.name]?.id;
      }

      // ✅ handle file fields dynamically
      if (field.type === "file") {
        formattedValues[field.name] = formatFile(initialValues[field.name]);
      }
    });

    form.setFieldsValue(formattedValues);
  } else {
    form.resetFields();
  }
}, [mode, initialValues, fields, form]);


  return (
    <Card className="form-card">
      <>
        <div className="formHead">
        <h3>
          <PlusOutlined /> {mode === "edit" ? "Edit" : "Add New"} {name}
        </h3>
        <CloseOutlined className="close-btn" onClick={onClose}/>
        </div>

          <Form form={form} className="form" layout="vertical" onFinish={handleFinish}>
            <CustomRow space={[12, 12]}>
              {fields.map((field, index) => (
                <Col span={24} md={8} key={index}>
                  <Form.Item name={field.name} label={field.label} {...(field.type === "file" && {
                    valuePropName:"fileList", getValueFromEvent:(e) => Array.isArray(e) ? e : e?.fileList || []
                  })}>
                    {renderFields(field)}
                  </Form.Item>
                </Col>
              ))}
            </CustomRow>

            <div className="formFoot">
              <Button style={{backgroundColor: "#00b050" }} htmlType="submit">{mode === "edit" ? "Update" : "Save"} {name}</Button>
              <Button style={{backgroundColor: "#ed1c24" }} onClick={handleReset}>Reset</Button>
            </div>
          </Form>
      </>
    </Card>
  );
};
