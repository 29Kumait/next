import React, { useEffect, useState } from "react";

interface YoutubeVideoDetails {
  kind: string;
  etag: string;
  items: {
    kind: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        [key: string]: { url: string; width: number; height: number };
      };
    };
  }[];
}

const fetchVideoDetails = async (
  videoId: string,
): Promise<YoutubeVideoDetails> => {
  const res = await fetch(`/api/youtube?videoId=${videoId}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch video details, status: ${res.status}`);
  }
  return await res.json();
};

const YouTubeVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState<YoutubeVideoDetails | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideoDetails = async () => {
      try {
        const details = await fetchVideoDetails(videoId);
        setVideoDetails(details);
      } catch (error) {
        console.error("Failed to load video details:", error);
        setError("Failed to load video details");
      }
    };

    loadVideoDetails();
  }, [videoId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!videoDetails || videoDetails.items.length === 0) {
    return <div>Video not found</div>;
  }

  const video = videoDetails.items[0].snippet;

  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <img
        src={video.thumbnails.high.url}
        alt={video.title}
        width={video.thumbnails.high.width}
        height={video.thumbnails.high.height}
      />
      <p>Published on: {new Date(video.publishedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default YouTubeVideo;
