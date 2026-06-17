import { Delete } from "@components/Delete/Delete";
import { franchiseColumns } from "@components/FieldColumns/Columns";
import { franchiseFields } from "@components/FieldColumns/InputFields";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CustomRow } from "@components/others";
import { Col } from "antd";
import dayjs from "dayjs";
import React, { useState, useEffect, useMemo } from "react";
import { DeleteFranchise } from "src/api/deleteReq";
import { getFranchise } from "src/api/getReq";
import { PostFranchise } from "src/api/postReq";
import { UpdateFranchise } from "src/api/updateReq";

function Franchise() {
  const [openForm, setForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [mode, setMode] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteService, setDeleteService] = useState(null);

  // ===== OTHER FUNCTIONS =====

  useEffect(() => {
    getData();
  }, []);

  // Get Franchise

  const getData = async () => {
    const data = await getFranchise();
    setDataSource(data);
  };

  console.log(dataSource, "dataSourcedataSource");

  const handleAdd = () => {
    setMode("add");
    setSelectedRow(null);
    setForm(true);
  };

  // ===== Search =====
  const handleSearchs = (value) => {
    setPageSize(totalRecords);
    setSearchTexts(value);
  };

  const handleEdit = (record) => {
    setMode("edit");
    setSelectedRow(record);
    setForm(true);
  };

  const handleDelete = (record) => {
    console.log("HanldeDelete Clicked");
    setDeleteId(record?.franchiseId);
    setDeleteService(() => DeleteFranchise);
    setOpenDelete(true);
  };

  const columns = useMemo(
    () => franchiseColumns(handleEdit, handleDelete),
    [handleEdit],
  );

  const handleStudyMaterialSubmit = async (data) => {
console.log(data,'datadatadatass');

    if (mode === "edit") {
      await UpdateFranchise(data?.franchiseId, data);
    } else {
      await PostFranchise(data);
    }

    await getData();
    // ✅ close form after submit
    setForm(false);
    setMode("add");
    setSelectedRow(null);
  };

  return (
    <div style={{ padding: 20, background: "#f5f5f5", minHeight: "100vh" }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: 16 }}>
        <CustomRow>
          <Col span={24} md={24}>
            <div
              className={`top-form ${openForm ? "open" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <CommonForm
                key={mode === "edit" ? selectedRow?.key : "add"}
                name="Franchise"
                mode={mode}
                fields={franchiseFields}
                initialValues={selectedRow}
                onSubmit={handleStudyMaterialSubmit}
                onClose={() => setForm(false)}
                mediumdisplay={12}
              />
            </div>
          </Col>
        </CustomRow>

        <CommonTable
          columns={columns}
          data={dataSource}
          name={"Franchise"}
          onAddClick={handleAdd}
          onClose={() => {
            setForm(false);
          }}
        />
      </div>
      <Delete
        open={openDelete}
        setOpen={setOpenDelete}
        deleteId={deleteId}
        deleteService={deleteService}
        onSuccess={getData}
      />
    </div>
  );
}

export default Franchise;
