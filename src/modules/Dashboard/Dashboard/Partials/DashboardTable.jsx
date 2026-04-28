import React, { useState, useEffect, Fragment } from 'react';
import { Table, Tag, Space, Button, Spin, Alert } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { AllTableData } from '../DashboardMainSlice';
import { baseRequest } from '@request/request';
import { Flex } from '@components/others';
import { CustomTag } from '@components/form';

export const DashboardTable = ({ type }) => {
    const tableData = useSelector(AllTableData);
    const [loading, setLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTableData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await baseRequest.get('/api/card/table');
                setApiData(response.data || []);
            } catch (err) {
                setError(err.message || 'Failed to fetch data');
                console.error('Error fetching table data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTableData();
    }, []);

    const orderColumns = [
        {
              title: "SI No",
              render: (value, item, index) => {
                return (
                  <Flex center={true} centervertically={true} gap={"10px"}>
                    <p>{index + 1}</p>
                  </Flex>
                );
              },
            },
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
            render: (text) => <span style={{ fontWeight: 'bold', color: '#1890ff' }}>{text}</span>,
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Current Location',
            dataIndex: 'currentLocation',
            key: 'currentLocation',
        },
         {
      title: "Tracking Status",
      render: (record) => {
        return (
          <Fragment>
            <CustomTag
              bordered={true}
              color={
                record.trackingStatus === 'Delivered' ? 'green' :
                  record.trackingStatus === 'Shipped' ? 'blue' :
                    record.trackingStatus === 'Out for Delivery' ? 'purple' :
                      record.trackingStatus === 'Order Placed' ? 'gold' :
                        'orange'
              }
              title={record.trackingStatus}
            />
          </Fragment>
        );
      },
    },
        {
            title: 'Expected Date',
            dataIndex: 'expectedDeliveryDate',
            key: 'expectedDeliveryDate',
            render: (date) => new Date(date).toLocaleDateString(),
        },
    ];

    const customerColumns = [
        {
            title: 'Customer ID',
            dataIndex: 'customerId',
            key: 'customerId',
            render: (text) => <span style={{ fontWeight: 'bold', color: '#1890ff' }}>{text}</span>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Total Orders',
            dataIndex: 'totalOrders',
            key: 'totalOrders',
            render: (count) => <Tag color="blue">{count}</Tag>,
        },
        {
            title: 'Total Spent',
            dataIndex: 'totalSpent',
            key: 'totalSpent',
            render: (amount) => <span style={{ fontWeight: 'bold' }}>₹{amount}</span>,
        },
        {
            title: 'Join Date',
            dataIndex: 'joinDate',
            key: 'joinDate',
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={status === 'Active' ? 'green' : 'red'}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Button 
                        type="link" 
                        icon={<EyeOutlined />} 
                        size="small"
                        onClick={() => handleView(record)}
                    />
                    <Button 
                        type="link" 
                        icon={<EditOutlined />} 
                        size="small"
                        onClick={() => handleEdit(record)}
                    />
                    <Button 
                        type="link" 
                        icon={<DeleteOutlined />} 
                        size="small" 
                        danger
                        onClick={() => handleDelete(record)}
                    />
                </Space>
            ),
        },
    ];



    // Action handlers
    const handleView = (record) => {
        console.log('View:', record);
    };

    const handleEdit = (record) => {
        console.log('Edit:', record);
    };

    const handleDelete = (record) => {
        console.log('Delete:', record);
    };

    const columns = type === 'orders' ? orderColumns : customerColumns;
    
    const data = apiData.map((item, index) => ({
        ...item,
        key: item.key || item.id || index.toString()
    }));

    if (loading) {
        return (
            <div style={{ 
                padding: '20px', 
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px'
            }}>
                <Spin size="large" />
                <span style={{ marginLeft: '12px' }}>Loading table data...</span>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            {error && (
                <Alert
                    message="Failed to Load Data"
                    description={`Error: ${error}`}
                    type="error"
                    showIcon
                    style={{ marginBottom: '16px' }}
                />
            )}
            
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 5,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total, range) =>
                        `${range[0]}-${range[1]} of ${total} items`,
                }}
                scroll={{ x: 800 }}
                size="middle"
                bordered
                style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
            />
        </div>
    );
};