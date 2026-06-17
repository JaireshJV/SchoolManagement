import { Modal } from "antd";
import "./CommonModal.css";

export const CommonModal = ({
  open,
  onClose,
  record,
  fields = [],
  title = "Profile Details",
  imageKey = "profileImage",
}) => {

console.log(record, "Recived Records");

const getValueByKeys = (record, keys = []) => {
  return keys.map((key) => record?.[key]).find(Boolean);
};

const profileImage = getValueByKeys(record, [
  imageKey,
  "profilePhoto",
  "profile_image",
]);

const profileTitle = getValueByKeys(record, [
  "studentName",
  "teacherName",
  "courseName",
  "batchName",
  "name",
]) || "N/A";

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      className="common-modal"
      width={800}
    >
      {/* HEADER */}
      <div className={`profile-header ${profileImage ? "with-profile" : "no-profile"}`}>
        {/* RIGHT FLOATING CARD */}

        <div className="status-innercard"></div>
        <div className="profile-status-card">
          <div className="status-title">{`${title} Details` || "Details"}</div>
        </div>

        {profileImage ? (
          <div className="profile-user-section">
            <img
              src={profileImage}
              alt="profile"
              className="profile-logo"
            />
            
            <div className="profile-title">
              {profileTitle}
              <span>{title}</span>
            </div>
          </div>
          ) : null
        }
      </div>

      {/* PROFILE CONTENT*/}
      <div className={`profile-content ${profileImage ? "with-profile" : "no-profile"}`}>
        {/* NORMAL FIELDS */}
        {fields
          .filter((field) => field.type !== "file")
          .map((field, index) => (
            <div className="profile-card" key={index}>
              {/* ICON */}
              <div className="profile-card-icon">{field.icon || "✨"}</div>

              {/* DETAILS */}
              <div className="profile-card-details">
                {/* LABEL */}
                <div className="profile-card-label">{field.label}</div>

                {/* VALUE */}
                <div className="profile-card-value">
                  {record?.[field.name] || "N/A"}
                </div>
              </div>
            </div>
          ))}

        {/* DOCUMENT SECTION */}
        {fields.some((field) => field.type === "file") && (
          <div className="document-container">
            {/* HEADER */}
            <div className="document-header">📂 Documents</div>

            {/* DOCUMENT IMAGES */}
            <div className="document-grid">
              {fields
                .filter((field) => field.type === "file")
                .map((field, index) => (
                  <div className="document-card" key={index}>
                    {/* IMAGE */}
                    <img
                      src={record?.[field.name]}
                      alt={field.label}
                      className="document-image"
                    />

                    {/* LABEL */}
                    <div className="document-label">{field.label}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
