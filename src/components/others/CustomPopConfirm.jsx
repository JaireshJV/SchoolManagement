import { Popconfirm } from 'antd';





const CustomPopconfirm = ({ children, record, confirm, cancel, title, description, okText, cancelText,placement,loading,style }) => (
    <Popconfirm
        // title={title}
        description={description}
        onConfirm={() => confirm(record)}
        onCancel={cancel}
        style={style}
        // icon={
        //     <QuestionCircleOutlined
        //         style={{
        //             color: 'red',
        //         }}
        //     />
        // }
        icon={null}
        placement="left"
        okText={okText}
        cancelText={cancelText}
        loading={loading}
    >
        <span style={{ color: 'white' }}>{children}</span>
        {/* {children}   */}
    </Popconfirm>
);

export default CustomPopconfirm 