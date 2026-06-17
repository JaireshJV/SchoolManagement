import React, { useEffect, useState } from "react";
import {
  getChapters,
  getQuestionBank,
  getSubjects,
  getTopics,
} from "src/api/getReq";
import { PostQuestionBank } from "src/api/postReq";

const QuestionForm = ({ FormExternalClose }) => {
  const [subjectData, setSubjectData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    getSubject();
    getChapter();
    getTopic();
    // getData();
  }, []);

  // Get Subject Data
  const getSubject = async () => {
    const data = await getSubjects();
    setSubjectData(data);
  };

  const subjectOptions = subjectData.map((subject) => ({
    label: subject?.subjectName,
    value: subject?.subjectId,
  }));

  // Get Chapter Data
  const getChapter = async () => {
    const data = await getChapters();
    setChapterData(data);
  };

  const chapterOptions = chapterData.map((chapter) => ({
    label: chapter?.chapterName,
    value: chapter?.chapterId,
  }));

  // Get Topic Data
  const getTopic = async () => {
    const data = await getTopics();
    setTopicData(data);
  };

  const topicOptions = topicData.map((topic) => ({
    label: topic?.topicName,
    value: topic?.topicId,
  }));

  const getData = async () => {
    const data = await getQuestionBank(1, 5);
  };

  const [formData, setFormData] = useState({
    subjectId: "",
    chapterId: "",
    topicId: "",
    questionText: "",
    difficulty: "EASY",
    language: "EN",
    explanation: "",
    questionImageUrl: null,

    options: [
      {
        optionLabel: "A",
        optionText: "",
        optionImageUrl: null,
        correct: false,
      },
      {
        optionLabel: "B",
        optionText: "",
        optionImageUrl: null,
        correct: false,
      },
      {
        optionLabel: "C",
        optionText: "",
        optionImageUrl: null,
        correct: false,
      },
      {
        optionLabel: "D",
        optionText: "",
        optionImageUrl: null,
        correct: false,
      },
    ],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuestionImage = (e) => {
    console.log(e.target.files[0], "image");

    setFormData({
      ...formData,
      optionImageUrl: e.target.files[0],
    });
  };

  const handleOptionChange = (index, value) => {
    const updated = [...formData.options];
    updated[index].optionText = value;

    setFormData({
      ...formData,
      options: updated,
    });
  };

  const handleOptionImage = (index, file) => {
    console.log(index, file, "index,file");

    const updated = [...formData.options];
    updated[index].optionImageUrl = file;

    setFormData({
      ...formData,
      options: updated,
    });
  };

  const handleCorrectAnswer = (index) => {
    const updated = formData.options.map((item, i) => ({
      ...item,
      correct: i === index,
    }));

    setFormData({
      ...formData,
      options: updated,
    });
  };

  const validateForm = () => {
    if (
      !formData.subjectId ||
      !formData.chapterId ||
      !formData.topicId ||
      !formData.questionText ||
      !formData.explanation
    ) {
      alert("Please fill all required fields");
      return false;
    }

    const emptyOption = formData.options.some(
      (option) => !option.optionText.trim(),
    );

    if (emptyOption) {
      alert("All options are required");
      return false;
    }

    const correctSelected = formData.options.some((option) => option.correct);

    if (!correctSelected) {
      alert("Select correct answer");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const formDataObj = new FormData();

      // Main Question Fields
      formDataObj.append("subjectId", Number(formData.subjectId));
      formDataObj.append("chapterId", Number(formData.chapterId));
      formDataObj.append("topicId", Number(formData.topicId));
      formDataObj.append("questionText", formData.questionText);
      formDataObj.append("difficulty", formData.difficulty);
      formDataObj.append("language", formData.language);
      formDataObj.append("explanation", formData.explanation);

      // Question Image
      if (formData.questionImageUrl) {
        formDataObj.append("questionImageUrl", formData.questionImageUrl);
      }

      // Options
      formData.options.forEach((option, index) => {
        formDataObj.append(`options[${index}].optionLabel`, option.optionLabel);

        formDataObj.append(`options[${index}].optionText`, option.optionText);

        formDataObj.append(`options[${index}].correct`, option.correct);

        if (option.optionImageUrl) {
          formDataObj.append(
            `options[${index}].optionImageUrl`,
            option.optionImageUrl,
          );
        }
      });

      // Debug
      for (let pair of formDataObj.entries()) {
        console.log(pair[0], pair[1]);
      }

      await PostQuestionBank(formDataObj);
      getData();
      // Reset Form
      setFormData({
        subjectId: "",
        chapterId: "",
        topicId: "",
        questionText: "",
        difficulty: "EASY",
        language: "EN",
        explanation: "",
        questionImageUrl: null,
        options: [
          {
            optionLabel: "A",
            optionText: "",
            optionImageUrl: null,
            correct: false,
          },
          {
            optionLabel: "B",
            optionText: "",
            optionImageUrl: null,
            correct: false,
          },
          {
            optionLabel: "C",
            optionText: "",
            optionImageUrl: null,
            correct: false,
          },
          {
            optionLabel: "D",
            optionText: "",
            optionImageUrl: null,
            correct: false,
          },
        ],
      });

      FormExternalClose();
    } catch (error) {
      console.error("Submission Error:", error);

      alert(error?.response?.data?.message || "Failed to submit question");
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      {/* <h2>Create Question</h2> */}

      <form onSubmit={handleSubmit}>
        {/* Subject Chapter Topic */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "15px",
          }}
        >
          <select
            name="subjectId"
            value={formData.subjectId}
            onChange={handleChange}
          >
            <option value="">Select Subject</option>

            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            name="chapterId"
            value={formData.chapterId}
            onChange={handleChange}
          >
            <option value="">Select Chapter</option>

            {chapterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            name="topicId"
            value={formData.topicId}
            onChange={handleChange}
          >
            <option value="">Select Topic</option>

            {topicOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <br />

        {/* Difficulty Language */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "15px",
          }}
        >
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="EASY">EASY</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HARD">HARD</option>
          </select>

          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="EN">English</option>
            <option value="TA">Tamil</option>
            <option value="HI">Hindi</option>
          </select>
        </div>

        <br />

        {/* Question */}

        <textarea
          rows={5}
          name="questionText"
          placeholder="Enter Question"
          value={formData.questionText}
          onChange={handleChange}
          style={{ width: "100%" }}
        />

        <br />
        <br />

        {/* Question Image */}

        <label>Question Image (Optional)</label>

        <input type="file" accept="image/*" onChange={handleQuestionImage} />

        <br />
        <br />

        {/* Explanation */}

        <textarea
          rows={4}
          name="explanation"
          placeholder="Enter Explanation"
          value={formData.explanation}
          onChange={handleChange}
          style={{ width: "100%" }}
        />

        <br />
        <br />

        <h3>Answer Options</h3>

        {formData.options.map((option, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <input
                type="radio"
                checked={option.correct}
                onChange={() => handleCorrectAnswer(index)}
              />

              <strong>{option.optionLabel}</strong>

              <input
                type="text"
                placeholder={`Enter option ${option.optionLabel}`}
                value={option.optionText}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                style={{
                  flex: 1,
                  padding: "10px",
                }}
              />
            </div>

            <br />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleOptionImage(index, e.target.files[0])}
            />
          </div>
        ))}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            background: "#091224",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
