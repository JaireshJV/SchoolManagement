import React, { useState, useRef } from "react";

const initialFiles = [
  {
    id: 1,
    name: "Wave Optics — Full Notes.pdf",
    size: "2.4 MB",
    subject: "Physics",
    date: "Apr 11",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    type: "Notes",
  },
  {
    id: 2,
    name: "DPP Sheet — Mechanics.pdf",
    size: "850 KB",
    subject: "Physics",
    date: "Apr 10",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    type: "DPP",
  },
  {
    id: 3,
    name: "Organic Chemistry Notes.pdf",
    size: "3.1 MB",
    subject: "Chemistry",
    date: "Apr 9",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    type: "Notes",
  },
];

function StudyMaterials() {
  const [files, setFiles] = useState(initialFiles);
  const inputRef = useRef(null);

  function handleFiles(fileList) {
    const newFiles = Array.from(fileList).map(function (file, i) {
      return {
        id: Date.now() + i,
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        subject: "General",
        date: new Date().toLocaleDateString(),
        url: URL.createObjectURL(file),
        type: "Notes",
      };
    });

    setFiles(function (prev) {
      return newFiles.concat(prev);
    });
  }

  function handleDrop(e) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  function openFilePicker() {
    inputRef.current.click();
  }

  return (
    <div style={{ padding: 20, background: "#f5f5f5", minHeight: "100vh" }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: 16 }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <h3>Study Materials</h3>
          <button onClick={openFilePicker} style={{ background: "green", color: "#fff", padding: "6px 12px", borderRadius: 6 }}>
            + Upload
          </button>
        </div>

        {/* Upload Box */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={openFilePicker}
          style={{
            border: "2px dashed #ccc",
            borderRadius: 10,
            padding: 40,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
            <p style={{fontSize:"22px",paddingBottom:"10px"}}>📄</p>
          <p>Drag & drop PDF or click to browse</p>
          <small>PDF, DOC up to 50MB</small>
        </div>

        <input
          type="file"
          multiple
          ref={inputRef}
          style={{ display: "none" }}
          onChange={(e) => handleFiles(e.target.files)}
        />

        {/* File List */}
        <div style={{ marginTop: 20 }}>
          {files.map(function (file) {
            return (
              <div
                key={file.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  padding: "10px 0",
                }}
              >
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ width: 40, height: 40, background: "#eee", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    📄
                  </div>
                  <div>
                    <div>{file.name}</div>
                    <small>
                      {file.subject} • {file.size} • {file.date}
                    </small>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ background: "#eee", padding: "4px 8px", borderRadius: 20 }}>
                    {file.type}
                  </span>
                  <a href={file.url} download={file.name}>
                    ⬇
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudyMaterials;
