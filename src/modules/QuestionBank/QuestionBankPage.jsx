import { useEffect, useState } from "react";
import { CustomModal } from "@components/others";
import QuestionForm from "./QuestionForm";
import { getQuestionBank } from "src/api/getReq";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button, Grid, Pagination, Select } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { Delete } from "@components/Delete/Delete";
import { DeleteQuestionBank } from "src/api/deleteReq";

export function QuestionBankPage() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  // ====== Modal States ========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [width, setWidth] = useState(0);

  // Pagination states
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [dataSource, setDataSource] = useState([]);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [chapterFilter, setChapterFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteService, setDeleteService] = useState(null);

  const { useBreakpoint } = Grid;

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  useEffect(() => {
    getData();
  }, [currentPage, pageSize]);

  const getData = async () => {
    console.log(currentPage, pageSize, "cuurr,pageee");

    const data = await getQuestionBank(currentPage, pageSize);
    setDataSource(data?.content);
    setTotalRecords(data?.totalElements);
    setTotalPages(data?.totalPages);
  };

  console.log(dataSource, "dataSource");

  // useEffect(() => {
  //   if (dataSource?.length && !selectedQuestion) {
  //     setSelectedQuestion(dataSource[0]);
  //   }
  // }, [dataSource]);

  // ===== Modal Functions =====
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  const FormExternalClose = () => {
    handleOk();
  };

  const AddQuestions = () => {
    setModalTitle("ADD QUESTIONS");
    setWidth(800);
    setModalContent(<QuestionForm FormExternalClose={FormExternalClose} />);
    showModal();
  };

  // ADD QUESTION
  const handleAddQuestion = () => {
    setMode("add");
    setSelectedRow(null);
    setOpen(true);
  };

  // VIEW QUESTION
  const handleView = (record) => {
    setSelectedRow(record);
    console.log("View Question", record);
  };

  // EDIT QUESTION
  const handleEdit = (record) => {
    setMode("edit");
    setSelectedRow(record);
    setOpen(true);

    console.log("Edit Question Called");
  };

  // DELETE QUESTION
  const handleDelete = (record) => {
    console.log("HanldeDelete Clicked");
    setDeleteId(record?.questionId);
    setDeleteService(() => DeleteQuestionBank);
    setOpenDelete(true);
    setSelectedQuestion(null);
  };

  // const columns = questionColumns(
  //   handleView,
  //   handleEdit,
  //   handleDelete
  // );

  const handleSubjectFilter = (e) => {
    setSubjectFilter(e.target.value);
    setSelectedQuestion(null);
  };

  const handleChapterFilter = (e) => {
    setChapterFilter(e.target.value);
    setSelectedQuestion(null);
  };

  const handleTopicFilter = (e) => {
    setTopicFilter(e.target.value);
    setSelectedQuestion(null);
  };

  const filteredData = dataSource.filter((item) => {
    const searchMatch = item?.questionText
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const subjectMatch =
      !subjectFilter || item?.subjectId?.toString() === subjectFilter;

    const chapterMatch =
      !chapterFilter || item?.chapterId?.toString() === chapterFilter;

    const topicMatch =
      !topicFilter || item?.topicId?.toString() === topicFilter;

    return searchMatch && subjectMatch && chapterMatch && topicMatch;
  });

  return (
    <>
      <div
        style={{
          padding: 20,
          background: "#fff",
          borderRadius: 10,
        }}
      >
        {/* Header */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h2>Question Bank</h2>

          <button
            onClick={AddQuestions}
            style={{
              background: "#091224",
              color: "#fff",
              border: "none",
              padding: "10px 16px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            + Add Question
          </button>
        </div>

        {/* Filters */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <input
            placeholder="Search Question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 6,
            }}
          />

          <select
            value={subjectFilter}
            onChange={(e) => handleSubjectFilter(e)}
          >
            <option value="">All Subjects</option>

            {[
              ...new Map(
                dataSource.map((item) => [item.subjectId, item]),
              ).values(),
            ].map((item) => (
              <option key={item.subjectId} value={item.subjectId}>
                {item.subjectName}
              </option>
            ))}
          </select>

          <select
            value={chapterFilter}
            onChange={(e) => handleChapterFilter(e)}
          >
            <option value="">All Chapters</option>

            {[
              ...new Map(
                dataSource.map((item) => [item.chapterId, item]),
              ).values(),
            ].map((item) => (
              <option key={item.chapterId} value={item.chapterId}>
                {item.chapterName}
              </option>
            ))}
          </select>

          <select value={topicFilter} onChange={(e) => handleTopicFilter(e)}>
            <option value="">All Topics</option>

            {[
              ...new Map(
                dataSource.map((item) => [item.topicId, item]),
              ).values(),
            ].map((item) => (
              <option key={item.topicId} value={item.topicId}>
                {item.topicName}
              </option>
            ))}
          </select>

          <div>
            <span>Display per page : </span>
            <Select
              value={pageSize}
              style={{ width: 75 }}
              onChange={(value) => {
                console.log(value, "valuevalue");
                setSelectedQuestion(null);
                setPageSize(value);
                setcurrentPage(1);
              }}
              options={[
                { value: 5, label: "5" },
                { value: 10, label: "10" },
                { value: 20, label: "20" },
                { value: 50, label: "50" },
                { value: 100, label: "100" },
              ]}
            />
          </div>
        </div>

        {/* Table */}

        <div
          style={{
            height: "calc(100vh - 120px)",
            display: "flex",
            gap: 20,
          }}
        >
          {/* LEFT SIDEBAR */}

          <div
            style={{
              width: "35%",
              background: "#fff",
              borderRadius: 12,
              overflow: "auto",
              border: "1px solid #eee",
            }}
          >
            {filteredData?.map((question) => (
              <div
                key={question.questionId}
                onClick={() => setSelectedQuestion(question)}
                style={{
                  padding: 16,
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                  background:
                    selectedQuestion?.questionId === question.questionId
                      ? "#f5f8ff"
                      : "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <strong>{question.difficulty}</strong>

                  <span>#{question.questionId}</span>
                </div>

                <p
                  style={{
                    marginTop: 10,
                    fontWeight: 500,
                  }}
                >
                  {question.questionText?.length > 80
                    ? `${question.questionText.slice(0, 80)}...`
                    : question.questionText}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      background: "#eef5ff",
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: 12,
                    }}
                  >
                    {question.subjectName}
                  </span>

                  <span
                    style={{
                      background: "#f4f4f4",
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: 12,
                    }}
                  >
                    {question.topicName}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT DETAILS */}

          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              padding: 24,
              overflowY: "auto",
              border: "1px solid #eee",
            }}
          >
            {selectedQuestion ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2>Question Details</h2>

                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <button onClick={() => handleEdit(selectedQuestion)}>
                      ✏️
                    </button>

                    <button
                      onClick={() => handleDelete(selectedQuestion)}
                      style={{
                        border: "none",
                        padding: "5px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MdOutlineDeleteOutline color="red" fontSize={18} />
                    </button>
                    {/* <MdOutlineDeleteOutline color="red" /> */}
                  </div>
                </div>

                <hr />

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  <span>📚 {selectedQuestion.subjectName}</span>

                  <span>📖 {selectedQuestion.chapterName}</span>

                  <span>🏷 {selectedQuestion.topicName}</span>

                  <span>⭐ {selectedQuestion.difficulty}</span>
                </div>

                <h3>{selectedQuestion.questionText}</h3>

                {selectedQuestion.questionImageUrl && (
                  <img
                    src={selectedQuestion.questionImageUrl}
                    alt=""
                    style={{
                      maxWidth: "400px",
                      borderRadius: 10,
                      marginTop: 20,
                    }}
                  />
                )}

                <div
                  style={{
                    marginTop: 30,
                  }}
                >
                  <h3>Options</h3>

                  {selectedQuestion.options?.map((option) => (
                    <div
                      key={option.optionLabel}
                      style={{
                        padding: 14,
                        marginBottom: 10,
                        borderRadius: 8,
                        border: option.correct
                          ? "2px solid #28a745"
                          : "1px solid #ddd",
                        background: option.correct ? "#f1fff5" : "#fff",
                      }}
                    >
                      <strong>{option.optionLabel}.</strong> {option.optionText}
                      {option.correct && (
                        <span
                          style={{
                            color: "#28a745",
                            marginLeft: 10,
                          }}
                        >
                          ✓ Correct Answer
                        </span>
                      )}
                      {option.optionImageUrl && (
                        <img
                          src={option.optionImageUrl}
                          alt=""
                          style={{
                            display: "block",
                            maxWidth: "150px",
                            marginTop: 10,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 30,
                  }}
                >
                  <h3>Explanation</h3>

                  <div
                    style={{
                      background: "#f8f9fa",
                      padding: 16,
                      borderRadius: 10,
                    }}
                  >
                    {selectedQuestion.explanation}
                  </div>
                </div>
              </>
            ) : (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#999",
                }}
              >
                Select a question
              </div>
            )}
          </div>
        </div>
      </div>

      {/* View Modal */}

      <CustomModal
        isVisible={!!selectedRow}
        width={800}
        handleOk={() => setSelectedRow(null)}
        handleCancel={() => setSelectedRow(null)}
        modalTitle="Question Details"
        modalContent={
          selectedRow && (
            <div>
              <h3>{selectedRow.questionText}</h3>

              <hr />

              <p>
                <strong>Difficulty:</strong> {selectedRow.difficulty}
              </p>

              <p>
                <strong>Language:</strong> {selectedRow.language}
              </p>

              {selectedRow.questionImageUrl && (
                <img
                  src={selectedRow.questionImageUrl}
                  alt=""
                  style={{
                    maxWidth: "300px",
                  }}
                />
              )}

              <h4>Options</h4>

              {selectedRow.options?.map((option) => (
                <div
                  key={option.optionLabel}
                  style={{
                    padding: 10,
                    marginBottom: 8,
                    border: option.correct
                      ? "2px solid green"
                      : "1px solid #ddd",
                    borderRadius: 6,
                  }}
                >
                  <strong>{option.optionLabel}.</strong> {option.optionText}
                  {option.correct && (
                    <span
                      style={{
                        color: "green",
                        marginLeft: 10,
                      }}
                    >
                      ✓ Correct
                    </span>
                  )}
                  {option.optionImageUrl && (
                    <img
                      src={option.optionImageUrl}
                      alt=""
                      style={{
                        display: "block",
                        maxWidth: "150px",
                        marginTop: 10,
                      }}
                    />
                  )}
                </div>
              ))}

              <h4>Explanation</h4>

              <p>{selectedRow.explanation}</p>
            </div>
          )
        }
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          boxShadow: "0px 0px 6px 1px grey",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Pagination
          responsive
          size={isMobile ? "small" : "default"}
          showLessItems
          current={currentPage}
          pageSize={pageSize}
          total={totalRecords}
          onChange={(page) => {
            // setPageSize(5)
            setSelectedQuestion(null);
            setcurrentPage(page);
          }}
          showQuickJumper={!isMobile}
          showTotal={
            !isMobile
              ? (total, range) => `${range[0]}-${range[1]} of ${total} items`
              : undefined
          }
          itemRender={(page, type, originalElement) => {
            if (type === "prev") {
              return (
                <Button
                  icon={<CaretLeftFilled />}
                  size="small"
                  disabled={currentPage === 1}
                >
                  {!isMobile && "Prev"}
                </Button>
              );
            }
            if (type === "next") {
              return (
                <Button
                  icon={<CaretRightFilled />}
                  size="small"
                  disabled={currentPage === totalPages}
                >
                  {!isMobile && "Next"}
                </Button>
              );
            }
            return originalElement;
          }}
        />
      </div>
      <CustomModal
        isVisible={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        width={width}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />
      <Delete
        open={openDelete}
        setOpen={setOpenDelete}
        deleteId={deleteId}
        deleteService={deleteService}
        onSuccess={getData}
      />
    </>
  );
}
