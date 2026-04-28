import React from 'react'
import { Table as AntdTable, Pagination as AntdPagination } from 'antd';
import styled from 'styled-components';
import { THEME } from '@theme/index';

const CustomStandardTable = ({ columns, data, footer, components, pagination, rowKey, onRow }) => {

  const getRowClassName = (record, index) => {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  };

  return (
    <div style={{ maxWidth: '100%' }}>

      <div style={{ maxWidth: '100%', overflowX: 'auto', padding: '10px 0px' }}>
        <StyledTable
          footer={footer}
          columns={columns}
          dataSource={data}
          rowKey={rowKey}
          components={components}
          bordered={true}
          onRow={onRow}
          pagination={pagination}
          rowClassName={getRowClassName}
        />
      </div>
    </div>
  )
}

export default CustomStandardTable;

export const DeleteButtonWrapper = styled.div`
  opacity: 0;
  transition:0.5s;
`;
const StyledTable = styled(AntdTable)`
//  table{
//  border-radius : 20px
//  }
  tr{
    transition:0.5s;
    border-style: double;
    }
    tr:hover ${DeleteButtonWrapper} {
        opacity: 1;
    };
     .ant-table-thead {
        background: ${THEME.white} !important;
        border: 1px solid red;
    };

   

     & .ant-table-thead > tr >th {
        /* color: ${THEME.table_head} !important; */
        font-weight: 500;
        letter-spacing: 1px;
        color: #fff;

        font-family: "DM Sans", sans-serif;
        background: #40bc3e;
        text-align:left !important;
        cursor: pointer;
        font-size:  14px;
    }
    .ant-table-tbody >tr >td {
        /* border-style: double; */
        /* color: ${THEME.primary_color}; */

        font-family: "DM Sans", sans-serif;
        text-align:left !important;
        font-weight: 600;
        font-size:  15px;
    }
    .ant-table-tbody >tr  {
        color: ${THEME.table_content};
        background: #fff;
        border: 1px solid red  !important;
    }
    .ant-table-tbody > tr.even-row {
    background:${THEME.white}; /* Background color for even rows */
  }
  .ant-table-tbody > tr.odd-row {
    background: ${THEME.table_nthchild}; /* Background color for odd rows */
  }
    .ant-table-tbody>tr>td, :where(.css-dev-only-do-not-override-190m0jy).ant-table-wrapper tfoot>tr>th, :where(.css-dev-only-do-not-override-190m0jy).ant-table-wrapper tfoot>tr>td {
    position: relative;
    padding: 12px 12px !important;
    overflow-wrap: break-word;
}
    .ant-table-content >table {
        /* border-top:1px solid #E8E8E8; */
        border: 1px solid #c5c5c5  !important;
        /* border-style: double; */
        /* border-color: ${THEME.primary_color} !important; */
    }
.ant-pagination .ant-pagination-item a {
        display: contents !important;
}
`;