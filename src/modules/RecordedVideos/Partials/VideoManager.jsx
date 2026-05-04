import React, { useState } from "react";
import "../VideoManager.css";
import { CustomTag } from "@components/form";
import { THEME } from "@theme/index";

const VideoManager = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Newton's Laws of Motion",
      subject: "Physics · Chapter 5",
      duration: "48:30",
      tag: "NEET & JEE",
      batch: "Batch A",
    },
    {
      id: 2,
      title: "Organic Chemistry — Alkanes",
      subject: "Chemistry · Chapter 9",
      duration: "55:10",
      tag: "NEET & JEE",
    },
        {
      id: 3,
      title: "Cell Division — Mitosis",
      subject: "Biology · Chapter 11",
      duration: "42:05",
      tag: "NEET & JEE",
    },
  ]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🎯 Format seconds → mm:ss
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // 🎯 Upload + duration calculation
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoEl = document.createElement("video");
    const url = URL.createObjectURL(file);

    videoEl.src = url;

    videoEl.onloadedmetadata = () => {
      const duration = formatDuration(videoEl.duration);

      const newVideo = {
        id: Date.now(),
        title: file.name,
        subject: "Uploaded Video",
        duration,
        url,
      };

      setVideos((prev) => [newVideo, ...prev]);
    };
  };

  // 🎯 Delete
  const handleDelete = (id) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h4>Recorded Videos</h4>

        <label className="upload-btn">
          + Upload
          <input type="file" accept="video/*" hidden onChange={handleUpload} />
        </label>
      </div>

 <div className="filters">
        <select>
          <option>All Courses</option>
        </select>

        <select>
          <option>All Subjects</option>
        </select>

        <input type="text" placeholder="Search..." />
      </div>

      {/* 🎥 Video Player */}
      {selectedVideo && (
        <div className="player">
          <video src={selectedVideo.url} controls autoPlay />
        </div>
      )}

      {/* 📃 Video List */}
      <div className="video-list">
        {videos.map((video) => (
          <div
            className="video-card"
            key={video.id}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="thumbnail">
              ▶<span className="duration">{video.duration}</span>
            </div>

            <div className="video-info">
              <h5>{video.title}</h5>
              <p>{video.subject}</p>
              <CustomTag title={video.tag}  style={{color:`${THEME.GREEN_NOW}`}}/>
              {
                video.batch ? (
                      <CustomTag title={video.batch}  style={{color:`${THEME.BLUE_S_37}`}}/>
                ) : null
              }
            </div>

            <div className="actions" onClick={(e) => e.stopPropagation()}>
              <button className="edit">✏️</button>
              <button className="delete" onClick={() => handleDelete(video.id)}>
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoManager;
