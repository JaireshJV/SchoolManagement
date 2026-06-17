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
  TimePicker,
} from "antd";
import { useEffect } from "react";
import "./CommonForm.css";
import { CustomRow } from "@components/others";

const renderFields = (field) => {
  switch (field.type) {
    case "select":
      return (
        <Select
          placeholder={field.placeholder}
          options={field.options || []}
          allowClear
        />
      );

    case "radio":
      return (
        <Radio.Group>
          {field.options?.map((opt) => (
            <Radio key={opt.value} value={opt.value}>
              {opt.label}
            </Radio>
          ))}
        </Radio.Group>
      );

    case "date":
      return (
        <DatePicker
          style={{ width: "100%" }}
          placeholder={field.placeholder || "Select Date"}
        />
      );

    case "time":
      return (
        <TimePicker
          style={{ width: "100%" }}
          format="HH:mm"
          placeholder={field.placeholder || "Select Time"}
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
          beforeUpload={() => false}
          maxCount={1}
          accept={field.accept}
        >
          <Button icon={<UploadOutlined />}>
            {field.placeholder || "Upload File"}
          </Button>
        </Upload>
      );

    case "password":
      return <Input.Password placeholder={field.placeholder} />;

    case "textarea":
      return (
        <Input.TextArea
          rows={4}
          placeholder={field.placeholder}
        />
      );

    default:
      return <Input placeholder={field.placeholder} />;
  }
};

export const CommonForm = ({
  name,
  fields = [],
  onSubmit,
  onClose,
  mode = "",
  mediumdisplay,
  initialValues = {},
}) => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const handleFinish = (values) => {
    if (mode === "edit") {
      console.log(values, "Edited Values");
      onSubmit({ ...initialValues, ...values });
    } else {
      onSubmit(values);
    }
  };

  const formatFile = (file) => {
    if (!file) return [];

    if (Array.isArray(file)) return file;

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
        if (
          field.type === "select" &&
          typeof initialValues[field.name] === "object"
        ) {
          formattedValues[field.name] = initialValues[field.name]?.id;
        }

        if (field.type === "file") {
          formattedValues[field.name] = formatFile(
            initialValues[field.name]
          );
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
        <CustomRow
          space={[12, 12]}
          style={{ marginBottom: "30px" }}
        >
          <Col span={24} md={18}>
            <h3>
              <PlusOutlined />{" "}
              {mode === "edit" ? "Edit" : "Add New"} {name}
            </h3>
          </Col>

          <Col
            span={24}
            md={6}
            style={{ textAlign: "end" }}
          >
            <CloseOutlined
              className="close-btn"
              onClick={onClose}
            />
          </Col>
        </CustomRow>

        <Form
          form={form}
          layout="vertical"
          className="form"
          onFinish={handleFinish}
        >
          <CustomRow space={[12, 12]}>
            {fields.map((field, index) => (
              <Col
                span={24}
                md={mediumdisplay || 8}
                key={index}
              >
                <Form.Item
                  name={field.name}
                  label={field.label}
                  rules={field.rules}
                  {...(field.type === "file" && {
                    valuePropName: "fileList",
                    getValueFromEvent: (e) =>
                      Array.isArray(e)
                        ? e
                        : e?.fileList || [],
                  })}
                >
                  {renderFields(field)}
                </Form.Item>
              </Col>
            ))}
          </CustomRow>

          <div className="formFoot">
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#00b050" }}
            >
              {mode === "edit" ? "Update" : "Save"} {name}
            </Button>

            <Button
              danger
              onClick={handleReset}
              style={{ backgroundColor: "#ed1c24", color: "#fff" }}
            >
              Reset
            </Button>
          </div>
        </Form>
      </>
    </Card>
  );
};