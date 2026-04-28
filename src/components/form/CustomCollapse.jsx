import React, { useEffect, useState } from "react";
import { Collapse, Row, Col } from "antd";
import styled from "styled-components";

const CollapseMainDiv = styled.div``;

const CustomCollapse = ({ itemse }) => {
  const [activeKey, setActiveKey] = useState(null);
  const [show, setShow] = useState(false);
  const [getValue, setGetValue] = useState(itemse)

  const keyChange = (newActiveKey) => {
    const value = getValue.find((item) => item.key === newActiveKey);
    setActiveKey([value]);

    const newValue = itemse.filter((item) => item.key != newActiveKey)
    setGetValue(newValue)
  };

  const onChange = (newActiveKey) => {
    const value = getValue.find((item) => item.key === newActiveKey);
    setActiveKey([value]);
    setShow(true);

    const newValue = itemse.filter((item) => item.key != newActiveKey)
    setGetValue(newValue)
  };

  return (
    <CollapseMainDiv>
      {show ? (
        <Row gutter={[24, 24]}>
          <Col span={24} md={12}>
            {getValue ? (
              <Collapse
                items={
                  activeKey
                    ? activeKey
                    : getValue.filter((item) => item.key === "1")
                }
                activeKey={activeKey.map((item) => item.key)}
              />
            ) : null}
          </Col>
          <Col span={24} md={12}>
            <Row gutter={[12, 12]}>
              {getValue.map((item) => (
                <Col span={24} md={24} key={item.key}>
                  <Collapse
                    items={[item]}
                    onChange={() => keyChange(item.key)}
                    activeKey={[]}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      ) : (
        <Row gutter={[12, 12]}>
          {getValue.map((item) => (
            <Col span={24} md={12} key={item.key}>
              <Collapse
                items={[item]}
                onChange={() => onChange(item.key)}
                activeKey={[]}
              />
            </Col>
          ))}
        </Row>
      )}
    </CollapseMainDiv>
  );
};

export default CustomCollapse;
