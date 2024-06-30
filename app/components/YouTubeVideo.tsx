import React, { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { descriptionStyles } from "./Description";

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
): Promise<YoutubeVideoDetails | null> => {
  const res = await fetch(`/api/youtube?videoId=${videoId}`);
  if (!res.ok) {
    return null;
  }
  return await res.json();
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
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
        if (details === null) {
          setError(`Failed to fetch video details`);
        } else {
          setVideoDetails(details);
        }
      } catch (error) {
        setError("An error occurred while loading video details:" + error);
      }
    };

    loadVideoDetails().catch((error) => {
      setError("An error occurred while loading video details:" + error);
    });
  }, [videoId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!videoDetails || videoDetails.items.length === 0) {
    return <div>Video not found</div>;
  }

  const video = videoDetails.items[0].snippet;
  const truncatedDescription = truncateText(video.description, 200);

  return (
    <div {...stylex.props(videoStyles.card)}>
      <h2 {...stylex.props(videoStyles.title)}>{video.title}</h2>
      <p
        {...stylex.props(
          descriptionStyles.description,
          descriptionStyles.descP,
        )}
      >
        {truncatedDescription}
      </p>
      <iframe
        {...stylex.props(videoStyles.video)}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.title}
      ></iframe>
      <p {...stylex.props(videoStyles.published)}>
        Published on: {new Date(video.publishedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

const videoStyles = stylex.create({
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "20px",
    maxWidth: "640px",
    margin: "20px auto",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "1.5em",
    marginBottom: "10px",
  },
  video: {
    marginBottom: "20px",
    zIndex: 2,
  },
  published: {
    fontSize: "0.9em",
    color: "#ccc",
  },
});

export default YouTubeVideo;
