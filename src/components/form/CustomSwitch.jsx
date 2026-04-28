import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Switch, Form } from 'antd';
import { THEME } from '@theme/index';
import { Styles } from '@components/form/CommonProperties';

const CustomSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  .ant-switch.ant-switch-checked{
    background: ${Styles.switchActiveColor};
  }
  .ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    background: ${Styles.switchActiveColor};
  }
`;

const CustomSwitchLabel = styled.span`
  margin: 0 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &.active {
    color: ${Styles.switchActiveColor}
  }
`;

const CustomSwitch = ({ disabled,leftLabel, rightLabel, checked, name, onChange, state, valuePropName, ...rest }) => {

  const [isChecked, setIsChecked] = useState(false);
  
  useEffect(() => {
    if (checked) {
      setIsChecked(checked)
    } else{
      setIsChecked(false)
    }
  }, [checked])


  const handleChange = (checked, extraProps) => {
    if (!disabled) {
      setIsChecked(checked);
      onChange(checked, extraProps);
    }
  };

  return (
    <Form.Item name={name} valuePropName={valuePropName} {...rest} style={{ margin: 'auto 0' }}>
      <CustomSwitchWrapper>
        <CustomSwitchLabel className={!isChecked ? 'active' : ''}>{leftLabel}</CustomSwitchLabel>
        <Switch onChange={(checked, extraProps) => handleChange(checked, extraProps)} checked={isChecked} disabled={disabled}/>
        <CustomSwitchLabel className={isChecked ? 'active' : ''}>{rightLabel}</CustomSwitchLabel>
      </CustomSwitchWrapper>
    </Form.Item>

  );
};

export default CustomSwitch

// const Switch = ({ label2, label, name, onChange, state, valuePropName, ...rest }) => {

//     return (
//         <Form.Item name={name} valuePropName={valuePropName} {...rest} style={{ margin: 'auto 0' }}>
//             <FlexWrapper spaceBetween>
//                 <LabelWrapper state={state}>{label}</LabelWrapper>
//                 <StyledSwitch onChange={onChange} {...rest} />
//                 <LabelWrapper state={state}>{label2}</LabelWrapper>
//             </FlexWrapper>
//         </Form.Item>
//     )
// }

{/* <CustomSwitch leftLabel="Yes" rightLabel="No" name='yesorNo' />          >>> FUTURE USE */ }

