import React, { useEffect, useState } from "react";
import { DatePicker as AntdDatePicker, Form } from "antd";
import styled from "styled-components";
import { THEME } from "@theme/index";
import { Styles } from "@components/form/CommonProperties";
import { Label } from "@components/form/Label";
import dayjs from "dayjs";

const dateFormat = "YYYY-MM-DD";

const { Item } = Form;
const { RangePicker } = AntdDatePicker;

const StyledItem = styled(Item)`
  width: 100%;
  border-radius: 0.4rem;
  margin-bottom: 0px !important;
  font-size: ${Styles.InputSize};
  font-weight: ${Styles.InputWeight};
  position:relative;
  > div {
    width: 100%;
    text-align: left;
  }
  & .ant-form-item-label {
    display: block;
    width: 100%;
    text-align: start;
    position:absolute;
    z-index:10;
    top:-22px;
    left:0;
  }
  & .ant-form-item-label >label.ant-form-item-no-colon::after {
    display:none;
  }
  & label{
    width: 100%;
    & .required{
      position: absolute;
      top: 0px;
      right:0;
      font-size:20px;
      line-height: 22px;
      color:${THEME.red};
    }
  }
`;


const AntdDateRangePickerStyle = styled(RangePicker)`
  width: 100%;
  height: ${Styles.Height};
  border-color: ${props => (props.error ? 'red' : '#212529 ')};
  background: #f5f5f5;


  &.ant-picker .ant-picker-input > input {
    font-size: ${Styles.InputSize};
    font-weight: ${Styles.InputWeight};
    color: ${Styles.InputColor};

  }

  :where(.css-dev-only-do-not-override-mzwlov).ant-picker-outlined {
    background: #f5f5f5;
    border-width: 2px;
    border-style: solid;
    border-color: #212529 ;
}

  &.ant-picker .ant-picker-input > input::placeholder {
    font-size: ${Styles.InputPlaceholderSize};
    font-weight: ${Styles.InputPlaceholderWeight};
    color: ${Styles.InputPlaceholderColor} !important;
    
  }
`;

const LabelHolder = styled.div`
  background: #f5f5f5;
  position: absolute;
  bottom: 0px;
  left: 20px;
  padding: 0 10px;
  line-height: 20px;
`

const CustomDateRangePicker = ({
  initialValue,
  label,
  type,
  name,
  rules,
  onChange,
  placeholder,
  required,
  disabled,
  width,
  minWidth,
  height,
  value,
  showSearch,
  marginRight,
  labelStyle,
  defaultValue,
  optional,
  format,
  noStyle = undefined,
  ...rest
}) => {
  const isRequired =
    Array.isArray(rules) && rules.some((rule) => rule.required);

  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    if (value) {
      setDateRange(value);
    }
  }, [value]);

  const handleChange = (dates, dateStrings) => {
    const startDate = dayjs(dateStrings[0]);
    const endDate = dayjs(dateStrings[1]);
    const selectrange = {
      startDate: startDate.format(dateFormat),
      endDate: endDate.format(dateFormat),
    };
    const range =
      startDate.format(dateFormat) + " - " + endDate.format(dateFormat);

    setDateRange(dates);
    onChange(selectrange);
  };

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
      <AntdDateRangePickerStyle value={dateRange} onChange={handleChange} />
    </StyledItem>
  );
};

export default CustomDateRangePicker;


//  ==================  Working with Date Range Picker

// import { CustomDateRangePicker } from '../../../Components/Form/CustomDateRangePicker'
// import dayjs from 'dayjs';

// const [dateRange, setDateRange] = useState([]);

// ==========  Date Range Change =======

//   const handleDateRangeChange = (dates) => {
//     setDateRange(dates);
//   };
//   console.log(dateRange, 'range   ==')

// ======  Setting initial Value  =========

// const rangeValue = [dayjs('2022-01-01'), dayjs('2022-01-07')];

// initialValues={
//     {
//       range:rangeValue,
//     }
//   }

{
  /* <CustomDateRangePicker
    onChange={handleDateRangeChange}
    value={dateRange}
    label={'Range'}
    name={'range'}
    rules={[{ required: true, message: 'Please enter a number' }]} /> */
}
