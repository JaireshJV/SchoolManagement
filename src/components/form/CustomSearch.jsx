import React from "react";
import { Input as AntdInput, Form } from "antd";
import styled from "styled-components";
import { Label } from "@components/form/Label";
import { Styles } from "@components/form/CommonProperties";
import { THEME } from "@theme/index";
import { CiSearch } from "react-icons/ci";

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
      position: absolute;
      top: 0px;
      right: 0;
      font-size: 20px;
      line-height: 22px;
      color: ${THEME.red};
    }
  }

 
`;

const AntdInputStyle = styled(AntdInput)`
  height: ${(props) => (props.height ? props.height : Styles.Height)};
  border-radius: 5px;
  box-shadow: none;
  /* border-color: ${(props) => (props.error ? "red" : "#212529 ")}; */
  border: none;
  background: #eaebf3 !important;


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
    background:#eaebf3 !important;

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

  :where(.css-dev-only-do-not-override-2i2tap).ant-input-affix-wrapper >input.ant-input {
    padding: 0px 10px;
    font-size: 20px;
    border: none;
    border-radius: 0;
    outline: none;
    background: #eaebf3 !important;
}
`;

const LabelHolder = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0px;
  left: 20px;
  padding: 0 10px;
  line-height: 20px;
`;
const CustomSearch = ({
  label,
  type,
  name,
  rules,
  step,
  onSearch,
  onChange,
  placeholder,
  display,
  required,
  autoFocus,
  disabled,
  readOnly,
  width,
  height,
  marginRight,
  labelStyle,
  defaultValue,
  minWidth,
  value,
  optional,
  initialValue,
  style,
  noStyle = undefined,
  ...rest
}) => {
  const isRequired =
    Array.isArray(rules) && rules.some((rule) => rule.required);
  return (
    <StyledItem
      style={{
        width: width,
        marginRight: marginRight,
        minWidth: minWidth,
        display: display,
      }}
      rules={rules}
      noStyle={noStyle}
      name={name}
      colon={false}
      required={false}
      initialValue={initialValue}
      label={
        <>
          {isRequired && <span className="required">*</span>}
          <LabelHolder>
            <Label>{label}</Label>
          </LabelHolder>
        </>
      }
    >
      <AntdInputStyle 
      prefix={<CiSearch size={30} style={{color:'#a1a1a1'}} />}
        {...rest}
        defaultValue={defaultValue}
        type={type}
        autoFocus={autoFocus}
        readOnly={readOnly}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        height={height}
        step={step}
      />
    </StyledItem>
  );
};

export default CustomSearch;
