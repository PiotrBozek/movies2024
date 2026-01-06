import React from 'react';
import './YouTubeModal.css';

const YouTubeModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  const getVideoId = (url) => {
    const match = url.match(/[?&]v=([^#\&\?]*).*/);
    return match && match[1];
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeModal;