import React from "react";
import { Input, Form } from "antd";
import styled from "styled-components";
import { Styles } from "@components/form/CommonProperties";
import { Label } from "./Label";
import { THEME } from "@theme/index";

const { TextArea } = Input;
const { Item } = Form;

const StyledItem = styled(Item)`
  width: 100%;
  border-radius: 0.4rem;
  margin-bottom: 0px !important;
  font-size: ${Styles.InputSize};
  font-weight: ${Styles.InputWeight};
  position: relative;
  > div {
    width: 100%;
    text-align: left;
  }
  & .ant-form-item-label {
    display: block;
    width: 100%;
    text-align: start;
    position: absolute;
    z-index: 10;
    top: -22px;
    left: 0;
  }
  & .ant-form-item-label > label.ant-form-item-no-colon::after {
    display: none;
  }
  & label {
      width: 100%;
      & .required {
        position: static;
        color: ${THEME.red};
        margin-left: 0.2rem;
        font-size: 1em;
        line-height: normal;
      }
    }
`;

const AntdTextArea = styled(TextArea)`
    height: ${(props) => (props.height ? props.height : Styles.Height)};
  border-radius: 0.4rem;
  box-shadow: none;
  border: 0.1rem solid${(props) => (props.error ? "red" : "#212529 ")};

  ::placeholder {
    font-size: ${Styles.InputPlaceholderSize};
    font-weight: ${Styles.InputPlaceholderWeight};
    color: ${Styles.InputPlaceholderColor};
  }

  :focus {
    border-color: #57a8e9;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(87, 168, 233, 0.2);
    box-shadow: 0 0 0 2px rgba(87, 168, 233, 0.2);
  }

  :hover {
    border: 1px solid #b3d8ff;
  }

  :not(.ant-input-affix-wrapper-disabled):hover {
    border: 1px solid #b3d8ff !important;
  }

  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-right-width: 0px !important;
  }

  &.ant-input {
    font-size: ${Styles.InputSize};
    font-weight: ${Styles.InputWeight};
    color: ${Styles.InputColor};
    padding: 8px 11px !important;
    background: #00000000 !important;
  }

  &.ant-input[disabled] {
    /* color: #0000 !important; */
    font-size: ${Styles.InputSize};
    font-weight: ${Styles.InputWeight};
    color: ${Styles.InputColor};
    text-align: left;
    border: 1px solid #d9d9d9;
  }
  &.ant-input-affix-wrapper-disabled .ant-input[disabled] {
    color: ${Styles.InputColor} !important;
  }



`
const LabelHolder = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0px;
  left: 20px;
  padding: 0 10px;
  line-height: 20px;
`;

const CustomTextArea = ({
  name,
  cols,
  type = "text",
  placeholder,
  label,
  rules,
  display,
  required,
  disabled,
  rows = 4,
  ...rest
}) => {
  const isRequired =
    Array.isArray(rules) && rules.some((rule) => rule.required);

  return (
    <StyledItem
      colon={false}
      required={false}
      label={
        <LabelHolder>
          <Label >
            {label} {isRequired && <span className="required">*</span>}
          </Label>
        </LabelHolder>
      }
      style={{
        display: display,
      }}
      rules={rules}
      name={name}
      {...rest}
    >
      <AntdTextArea
        cols={cols}
        {...rest}
        type={type}
        disabled={disabled}
        rows={rows}
        placeholder={placeholder}
        style={{ resize: "none", borderColor: "#212529 " }}
      />
    </StyledItem>
  );
};

export default CustomTextArea;
