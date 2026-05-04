import { Button, Card, Table } from "antd";
import "./CommonTable.css";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

export const CommonTable = ({ columns, data, name, onAddClick, ...rest }) => {
  const [openForm, setForm] = useState(false);

  return (
    <Card className="table">
      <div className={`table-head ${name ? name : "table-head" }`}>
        <div className="title">{name ? `${name} Management `: "Table Management"}</div>
          <Button
            className={`add-btn ${name ? name : ""}`}
            onClick={onAddClick}
          >
          <PlusOutlined />{name? `Add ${name}`: "Add"} 
        </Button>
      </div>

      <Table
        className="table"
        size="large"
        columns={columns}
        dataSource={data}
        {...rest}
      />
    </Card>
  );
};

CommonTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
