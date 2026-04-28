import React, { Fragment } from "react";
import { Select as AntdSelect, Form } from "antd";
import styled from "styled-components";
import { Label } from "@components/form/Label";
import { Styles } from "@components/form/CommonProperties";
import { THEME } from "@theme/index";

const { Item } = Form;
const { Option } = AntdSelect;

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

  .ant-select-show-search:where(
      .css-dev-only-do-not-override-2i2tap
    ).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    cursor: text;
    border: 2px solid #212529 ;
    background: transparent;
  }
`;
const AntdSelectStyle = styled(AntdSelect)`
  height: ${(props) => (props.height ? props.height : Styles.Height)};
  border-radius: 0.4rem;
  box-shadow: none;

  
  :where(.css-dev-only-do-not-override-mzwlov).ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
    border: 2px solid #212529 ;
    background: #f5f5f5;
}
 
  :focus {
    border-color: 1px solid #b3d8ff;
    box-shadow: none;
  }

  :hover {
    border-color: 1px solid #b3d8ff;
  }

  & .ant-select-selector {
    height: 100% !important;

    & input {
      height: 100% !important;
    }
  }

  &.ant-input[disabled] {
    color: #545454;
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    border: 1px solid #d9d9d9;
  }

  & .ant-select-selection-item {
    margin: auto;
    font-size: ${Styles.InputSize};
    font-weight: ${Styles.InputWeight};
    color: ${Styles.InputColor};
  }

  & .ant-select-selection-placeholder {
    margin: auto;
  }

  &.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    font-size: ${Styles.InputPlaceholderSize};
    font-weight: ${Styles.InputPlaceholderWeight};
    color: ${THEME.primary_color};
  }

  :where(.css-dev-only-do-not-override-2i2tap).ant-select .ant-select-arrow {
    display: flex;
    align-items: center;
    font-style: normal;
    line-height: 1;
    color: #212529  !important;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 50%;
    inset-inline-start: auto;
    inset-inline-end: 11px;
    height: 12px;
    margin-top: -6px;
    font-size: 12px;
    pointer-events: none;
    font-size: 14px;
  }
`;

const LabelHolder = styled.div`
  background: #f5f5f5 !important;
  position: absolute;
  bottom: 0px;
  left: 20px;
  padding: 0 10px;
  line-height: 20px;
`;

const CustomSelectNew = ({
  initialValue,
  label,
  type,
  name,
  rules,
  onChange,
  placeholder,
  required,
  disabled,
  display,
  options,
  width,
  minWidth,
  height,
  notFoundContent,
  value,
  showSearch,
  marginRight,
  labelStyle,
  defaultValue,
  optional,
  report,
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
      }}
      rules={rules}
      noStyle={noStyle}
      name={name}
      display={display}
      disabled={disabled}
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
      <AntdSelectStyle
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
        report={report}
        // suffixIcon={<img src={SvgIcons.DownArrow} style={{ pointerEvents: 'none' }} />}
        showSearch={true}
        notFoundContent={notFoundContent}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.children ?? "")
            .toLowerCase()
            .localeCompare((optionB?.children ?? "").toLowerCase())
        }
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </AntdSelectStyle>
    </StyledItem>
  );
};

export default CustomSelectNew;
