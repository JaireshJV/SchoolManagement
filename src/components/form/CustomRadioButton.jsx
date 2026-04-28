/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Radio as AntdRadio, Form } from "antd";
import styled from "styled-components";
import { Styles } from "@components/form/CommonProperties";
import { Fragment } from "react";
import { Label } from "./Label";

const StyledRadioss = styled.div`
  .ant-form-item .ant-form-item-label > label {
    font-size: 20px !important;
  }
`;

const StyledRadioGrop = styled(AntdRadio.Group)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`;

const StyledRadio = styled(AntdRadio)`
  font-weight: normal;
  
  & span {
    font-size: 16px;
    font-weight: 400;
  }
  
  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: none !important;
  }
  &.ant-radio-wrapper .ant-radio-inner {
    border-radius: ${Styles.radioBtnRadius};
    background: ${Styles.radioBtnBGColor};
    border-color: ${Styles.radioBtnBorderColor};
    width: ${Styles.radioBtnWidth};
    height: ${Styles.radioBtnHeight};
  }
  &.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    border-color: ${Styles.radioBtnActiveBGColor};
    background-color: ${Styles.radioBtnActiveBGColor};
  }
  
  &.ant-radio-wrapper .ant-radio-inner::after {
    content: "";
    /* top: 50%;
    // --> If Check is Tick UNCOMMENT THIS
        inset-inline-start:25%;
        display: table;
        width: 5.7142857142857135px;
        height: 9.142857142857142px;
        border: 2px solid ${Styles.radioBtnBGColor};
        border-top: 0;
        border-inline-start: 0;
        transform: rotate(45deg) scale(0) translate(-50%,-50%);
        opacity: 0;
        margin-block-start: 0;
        margin-inline-start: 0;
        background-color: transparent;
        border-radius:0; */
  }
  
  &.ant-radio-wrapper .ant-radio-checked .ant-radio-inner::after {
    opacity: 1;
    /* transform: rotate(45deg) scale(1) translate(-50%,-50%); */ // --> If Check is Tick UNCOMMENT THIS
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  }
`;

const CustomRadioButton = ({
  onChange,
  data,
  required,
  labelStyle,
  optional,
  isRequired,
  rules,
  name,
  disabled,
  label,
  value,
  ...rest
}) => {
  // Remove local state management since Form.Item handles the value
  const handleOnChange = (e) => {
    onChange && onChange(e);
  };

  console.log(value, 'valuevalue');

  return (
    <StyledRadioss>
      <Form.Item
        name={name}
        rules={rules}
        label={
          label && (
            <Fragment>
              <Label labelStyle={labelStyle}>
                {label} {optional}
              </Label>
            </Fragment>
          )
        }
      >
        <StyledRadioGrop
          disabled={disabled}
          onChange={handleOnChange}
          // Remove defaultValue since Form.Item manages the value
        >
          {data.map((radio) => (
            <StyledRadio key={radio.value} value={radio.value}>
              <span>{radio.label}</span>
            </StyledRadio>
          ))}
        </StyledRadioGrop>
      </Form.Item>
    </StyledRadioss>
  );
};

export default CustomRadioButton;