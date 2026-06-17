export const formStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  rowThree: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "16px",
  },

  rowTwo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  select: {
    padding: "10px",
    borderRadius: "10px",
  },

  label: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#344054",
  },

  // ACTIVE FIELD
  activeSelect: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #16a34a",
    background: "#f0fdf4",
    color: "#111827",
    fontSize: "14px",
    outline: "none",
    cursor: "pointer",
    transition: "0.2s ease",
  },

  // DISABLED FIELD
  disabledSelect: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #fca5a5",
    background: "#fef2f2",
    color: "#9ca3af",
    fontSize: "14px",
    outline: "none",
    cursor: "not-allowed",
  },

  textarea: {
    minHeight: "120px",
    resize: "vertical",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #d0d5dd",
    fontSize: "14px",
    outline: "none",
    background: "#fff",
  },

  optionCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px",
    border: "1px solid #e4e7ec",
    borderRadius: "12px",
    background: "#fafafa",
  },

  optionLabel: {
    fontWeight: 700,
    minWidth: "24px",
    color: "#111827",
  },

  optionInput: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d0d5dd",
    fontSize: "14px",
    outline: "none",
  },

  submitButton: {
    background: "#111827",
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "15px",
    marginTop: "10px",
  },
};