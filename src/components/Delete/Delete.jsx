import { Button, Modal } from "antd";
import { WarningFilled } from "@ant-design/icons";

export const Delete = ({ open, setOpen, deleteId, deleteService, onSuccess }) => {

  const handleOk = async () => {
    try {
    const res = await deleteService(deleteId);
    console.log(res, "Responses");
    if(onSuccess){
        onSuccess();
    }
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setOpen(false);
    }
  };
  return (
<Modal
  centered
  title={
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, padding: 8, borderRadius: 10 }}>
      <WarningFilled style={{ color: "#ff4d4f", fontSize: 32 }} />
      <span style={{ fontSize: 22, fontWeight: 600 }}>Warning Delete Confirmation?</span>
    </div>
  }
  closeIcon={false}
  open={open}
  onCancel={() => setOpen(false)}
  footer={
    <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
      <Button onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button danger type="primary" onClick={handleOk}>
        Delete
      </Button>
    </div>
  }
>
  <div style={{ textAlign: "center", paddingTop: 8 }}>
    <p style={{ color: "#464646", fontSize: 16, marginBottom: 6 }}>
      This action is permanent and cannot be undone.
    </p>
    <p style={{ fontSize: 15 }}>
      Do you want to proceed with deleting this record?
    </p>
  </div>
</Modal>
  );
};