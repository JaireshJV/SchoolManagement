import React, { Fragment } from "react";
import { TimePicker as AntdTimePicker, Form } from "antd";
import styled from "styled-components";
import { THEME } from "@theme/index";
import { Label } from "@components/form/Label";
import { Styles } from "@components/form/CommonProperties";

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
const AntdTimePickerStyle = styled(AntdTimePicker)`
  border-color: ${(props) => (props.error ? "red" : "#212529 ")};
  width: 100%;
  height: ${Styles.Height};

  &.ant-picker .ant-picker-input,
  &.ant-picker .ant-picker-input > input {
    font-size: ${Styles.InputSize};
    font-weight: ${Styles.InputWeight};
    color: ${Styles.InputColor};
  }
  :focus {
    border-color: 3px solid ${THEME.primary};
    box-shadow: none;
  }
  :hover {
    border-color: 3px solid ${THEME.primary};
  }
  :not(.ant-input-affix-wrapper-disabled):hover {
    border-color: 3px solid ${THEME.primary} !important;
  }
  & .ant-picker:hover {
    border-color: #d9d9d9 !important;
  }
  :where(.css-dev-only-do-not-override-2i2tap).ant-picker-focused.ant-picker {
    border-color: #d9d9d9 !important;
  }

  & .ant-picker-input > input::placeholder {
    font-size: ${Styles.InputPlaceholderSize};
    font-weight: ${Styles.InputPlaceholderWeight};
    color: ${Styles.InputPlaceholderColor};
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

const CustomTimePicker = ({
  width,
  marginRight,
  minWidth,
  display,
  rules,
  noStyle = undefined,
  name,
  label,
  required,
  labelStyle,
  optional,
  disabled,
  placeholder,

  use12Hours,

  type,
  step,
  onChange,
  autoFocus,
  readOnly,
  height,
  defaultValue,
  value,
  ...rest
}) => {
  const isRequired =
    Array.isArray(rules) && rules.some((rule) => rule.required);

  const TimeFormat = "h:mm: a";

  const handleTimeChange = (time, timeString) => {
    onChange(timeString);
  };

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
      label={
        <>
          {isRequired && <span className="required">*</span>}
          <LabelHolder>
            <Label>{label}</Label>
          </LabelHolder>
        </>
      }
    >
      <AntdTimePickerStyle
        {...rest}
        type={type}
        use12Hours={use12Hours}
        autoFocus={autoFocus}
        readOnly={readOnly}
        onChange={handleTimeChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        format={TimeFormat}
      />
    </StyledItem>
  );
};

export default CustomTimePicker;

// --------------  Time Usage --------------

// =======  Get Selected Time =======
//  const [inTime, setInTime] = useState(null)

// const inTimeChange = (time) => {
//     setInTime(time);
// }

{
  /* <CustomTimePicker label={'Upload'} name={'Time'} onChange={inTimeChange} rules={[
            {
              required: true,
              message: 'Please Select Time'
            }
          ]}/> */
}
