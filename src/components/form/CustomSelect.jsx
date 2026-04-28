// import React, { Fragment } from "react";
// import { Select as AntdSelect, Form } from "antd";
// import styled from "styled-components";
// import { Label } from "@components/form/Label";
// import { Styles } from "@components/form/CommonProperties";
// import { THEME } from "@theme/index";

// const { Item } = Form;
// const { Option } = AntdSelect;

// const StyledItem = styled(Item)`
//   width: 100%;
//   border-radius: 0.4rem;
//   margin-bottom: 0px !important;
//   font-size: ${Styles.InputSize};
//   font-weight: ${Styles.InputWeight};
//   position: relative;
//  border: 0.1rem solid${(props) => (props.error ? "red" : "#212529 ")};
//   > div {
//     width: 100%;
//     text-align: left;
//   }
//   & .ant-form-item-label {
//     display: block;
//     width: 100%;
//     text-align: start;
//     position: absolute;
//     z-index: 10;
//     top: -22px;
//     left: 0;
//   }
//   & .ant-form-item-label > label.ant-form-item-no-colon::after {
//     display: none;
//   }
//   & label {
//     width: 100%;
//     & .required {
//       position: static;
//       color: ${THEME.red};
//       margin-left: 0.2rem;
//       font-size: 1em;
//       line-height: normal;
//     }
//   }

//   .ant-select-show-search:where(
//       .css-dev-only-do-not-override-2i2tap
//     ).ant-select:not(.ant-select-customize-input)
//     .ant-select-selector {
//     cursor: text;
//     border-color: #212529 ;
//   }
// `;
// const AntdSelectStyle = styled(AntdSelect)`
//   height: ${(props) => (props.height ? props.height : Styles.Height)};
//   border-radius: 0.4rem;
//   box-shadow: none;
//   border-color: ${(props) => (props.error ? "red" : "#212529 ")};

//   :focus {
//     border-color: 1px solid #b3d8ff;
//     box-shadow: none;
//   }

//   :hover {
//     border-color: 1px solid #b3d8ff;
//   }

//   & .ant-select-selector {
//     height: 100% !important;
//     & input {
//       height: 100% !important;
//     }
//   }

//   &.ant-input[disabled] {
//     color: #545454;
//     font-size: 1rem;
//     font-weight: 500;
//     text-align: left;
//     border: 1px solid #d9d9d9;
//   }

//   & .ant-select-selection-item {
//     margin: auto;
//     font-size: ${Styles.InputSize};
//     font-weight: ${Styles.InputWeight};
//     color: ${Styles.InputColor};
//   }

//   & .ant-select-selection-placeholder {
//     margin: auto;
//   }

  

//   &.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
//     font-size: ${Styles.InputPlaceholderSize};
//     font-weight: ${Styles.InputPlaceholderWeight};
//     color: ${Styles.InputPlaceholderColor};
//   }
// `;

// const LabelHolder = styled.div`
//   background: #fff;
//   position: absolute;
//   bottom: 0px;
//   left: 20px;
//   padding: 0 10px;
//   line-height: 20px;
// `;

// const CustomSelect = ({
//   initialValue,
//   label,
//   type,
//   name,
//   rules,
//   onChange,
//   placeholder,
//   required,
//   disabled,
//   display,
//   options,
//   width,
//   minWidth,
//   height,
//   notFoundContent,
//   value,
//   showSearch,
//   marginRight,
//   labelStyle,
//   defaultValue,
//   optional,
//   noStyle = undefined,
//   ...rest
// }) => {
//   const isRequired =
//     Array.isArray(rules) && rules.some((rule) => rule.required);
//   return (
//     <StyledItem
//       style={{
//         width: width,
//         marginRight: marginRight,
//         minWidth: minWidth,
//       }}
//       rules={rules}
//       noStyle={noStyle}
//       name={name}
//       display={display}
//       disabled={disabled}
//       colon={false}
//       required={false}
//       initialValue={initialValue}
//       label={
//              <LabelHolder>
//                <Label style={labelStyle}>
//                  {label} {isRequired && <span className="required">*</span>}
//                </Label>
//              </LabelHolder>
//            }
//     >
//       <AntdSelectStyle
//         value={value}
//         onChange={onChange}
//         defaultValue={defaultValue}
//         disabled={disabled}
//         // suffixIcon={<img src={SvgIcons.DownArrow} style={{ pointerEvents: 'none' }} />}
//         showSearch={true}
//         notFoundContent={notFoundContent}
//         placeholder={placeholder}
//         optionFilterProp="children"
//         filterOption={(input, option) =>
//           (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
//         }
//         // filterSort={(optionA, optionB) =>
//         //   (optionA?.children ?? "")
//         //     .toLowerCase()
//         //     .localeCompare((optionB?.children ?? "").toLowerCase())
//         // }
//       >
//         {options.map((option) => (
//           <Option key={option.value} value={option.value}>
//             {option.label}
//           </Option>
//         ))}
//       </AntdSelectStyle>
//     </StyledItem>
//   );
// };

// export default CustomSelect;

// {
//   /* <Col lg={8} md={12} span={24}>                >>>  FUTURE USE
//             <Select
//               options={option}
//               placeholder={'Party Group'}
//               label={'Party Group'}
//               name={'party_group'}
//               showSearch={true}
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please enter Phone Party Group!',
//                 }
//               ]} />
//           </Col> */
// }
import React, { Fragment } from "react";
import { Select as AntdSelect, Form, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
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
  border: 0.1rem solid${(props) => (props.error ? "red" : "#212529 ")};
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

  .ant-select-show-search:where(
      .css-dev-only-do-not-override-2i2tap
    ).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    cursor: text;
    border-color: #212529;
  }
`;

const AntdSelectStyle = styled(AntdSelect)`
  height: ${(props) => (props.height ? props.height : Styles.Height)};
  border-radius: 0.4rem;
  box-shadow: none;
  border-color: ${(props) => (props.error ? "red" : "#212529 ")};

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

const CustomSelect = ({
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
  options = [], // Default to empty array
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
  noStyle = undefined,
  loading = false, // Explicit loading prop
  autoLoadingOnEmpty = true, // Auto-detect loading based on empty options
  ...rest
}) => {
  const isRequired =
    Array.isArray(rules) && rules.some((rule) => rule.required);

  // Determine loading state: explicit prop OR (auto-detect AND options is empty)
  const isLoading = loading || (autoLoadingOnEmpty && options.length === 0);

  // Custom loading icon
  const loadingIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

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
        <LabelHolder>
          <Label style={labelStyle}>
            {label} {isRequired && <span className="required">*</span>}
          </Label>
        </LabelHolder>
      }
    >
      <AntdSelectStyle
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        // disabled={disabled || isLoading} // Disable when loading
        // loading={isLoading} // Built-in Ant Design loading prop
        // suffixIcon={isLoading ? loadingIcon : undefined} // Show spinner as suffix icon
        showSearch={true}
        // notFoundContent={
        //   isLoading ? (
        //     <div style={{ textAlign: 'center', padding: '10px' }}>
        //       <Spin indicator={loadingIcon} />
        //     </div>
        //   ) : (
        //     notFoundContent || "No data found"
        //   )
        // }
        placeholder={isLoading ? "Loading..." : placeholder}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.children ?? "").toLowerCase().includes(input.toLowerCase())
        }
        {...rest}
      >
        {!isLoading && options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </AntdSelectStyle>
    </StyledItem>
  );
};

export default CustomSelect;

/* USAGE EXAMPLES:

// Example 1: Auto-loading based on empty options (default behavior)
const [partyGroupOptions, setPartyGroupOptions] = useState([]);

useEffect(() => {
  fetchPartyGroups().then(data => setPartyGroupOptions(data));
}, []);

<Select
  options={partyGroupOptions} // Shows loading spinner when empty
  placeholder={'Party Group'}
  label={'Party Group'}
  name={'party_group'}
  showSearch={true}
  rules={[
    {
      required: true,
      message: 'Please enter Phone Party Group!',
    }
  ]} 
/>

// Example 2: Manual loading control
<Select
  options={partyGroupOptions}
  loading={isLoadingPartyGroups} // Explicit loading state
  placeholder={'Party Group'}
  label={'Party Group'}
  name={'party_group'}
/>

// Example 3: Disable auto-loading for intentionally empty selects
<Select
  options={[]} // Empty but not loading
  autoLoadingOnEmpty={false} // Disable auto-loading
  placeholder={'No options available'}
  label={'Party Group'}
  name={'party_group'}
/>
*/
