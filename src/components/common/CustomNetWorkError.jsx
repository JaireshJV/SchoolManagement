import React from 'react'
import { PlaceHolder } from './Styled'
import { Svgicons } from '@assets/icons'
import { THEME } from '@theme/index'
import { Radio } from 'react-loader-spinner'

const CustomNetWorkError = () => {
  return (
    <PlaceHolder>
      <Radio
        visible={true}
        height="150"
        width="150"
        colors={["#fa0606", "#b23737", "#ac0303b1"]}
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      {/* <img src={Svgicons.NETWORKERROR} alt="noData" style={{width:'150px'}}/> */}
      <h1 style={{ color: THEME.gray }}>No Network Where Found !</h1>
    </PlaceHolder>
  )
}

export default CustomNetWorkError
