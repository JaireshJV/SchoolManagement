import { THEME } from '@theme/index';
import { Pagination } from 'antd'
import React from 'react'
import styled from 'styled-components'

const CustomPagenation = ({pageSize,onChange,total}) => {

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <PageFilter
    defaultCurrent={2}
    pageSize={pageSize}
    onChange={onChange}
    total={total}
    itemRender={itemRender}
  />
  )
}

export default CustomPagenation


export const PageFilter = styled(Pagination)`
    margin:40px 0 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    position:relative;

    li:first-child{
      position:absolute;
      left:0;
    }
    li:last-child{
      position:absolute;
      right:0;
    }

    .ant-pagination-prev,
    .ant-pagination-next {
        background:${THEME.white};
        height: 40px;
        width: 130px;
        border-radius:20px;
        display:flex;
        align-items:center;
        justify-content:center;
        a{
          color:${THEME.black};
        }
    }
    .ant-pagination-prev.ant-pagination-disabled,
    .ant-pagination-next.ant-pagination-disabled {
      box-shadow:none;
    }

    .ant-pagination-prev.ant-pagination-disabled a,
    .ant-pagination-next.ant-pagination-disabled a{
      color:rgba(0, 0, 0, 0.25);
    }

    .ant-pagination-item{
      height: 40px;
      width: 40px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow: 0px 3px 6px #00000008;
      background:${THEME.white};

      a{
        color:${THEME.gray};
      }

      &.ant-pagination-item-active{
        background:${THEME.primary};
        a{
          color:${THEME.white};
        }
      }
    }
`
