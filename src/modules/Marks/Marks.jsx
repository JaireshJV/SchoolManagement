import { CustomRow } from "@components/others";
import { StyledMark, TopCard } from "./style";
import { Col, Form, Input, InputNumber, Select } from "antd";
import { CustomSelect } from "@components/form";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";

export const Marks = () => {
  return (
    <StyledMark>
        <TopCard>
        
      <h4>📝 Enter Exam Marks</h4>
      <hr className="hrtag" />
      <CustomRow space={[12, 12]} style={{ marginTop: "20px" }}>
        <Col span={24} md={6}>
          <Form.Item label={"EXAM NAME"}>
            <Select
              options={[
                {
                  label: "MOCK TEST 7",
                  value: "Mocktest7",
                },
              ]}
              defaultValue={"Mocktest7"}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={6}>
          <Form.Item label={"SUBJECT"}>
            <Select
              options={[
                {
                  label: "Physics",
                  value: "physics",
                },
              ]}
              defaultValue={"Physics"}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={6}>
          <Form.Item label={"MAX MARKS"}>
            <InputNumber value={"60"} />
          </Form.Item>
        </Col>
        <Col span={24} md={6}>
          <Form.Item label={"BATCH"}>
            <Select
              options={[
                {
                  label: "BATCH A",
                  value: "batchA",
                },
              ]}
              defaultValue={"BATCH A"}
            />
          </Form.Item>
        </Col>
      </CustomRow>
          
        </TopCard>
      <CustomRow>
        <Col span={24} md={12}>
        <CommonTable name={'Mark'}/>

        </Col>

        <Col span={24} md={12}>

        </Col>
      </CustomRow>
    </StyledMark>
  );
};
