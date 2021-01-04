import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    video.snippet.title = video.snippet.title.replaceAll("&#39;", "'")

    return (
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img className="ui small image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem