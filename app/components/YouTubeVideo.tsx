import React from "react";
import Image from "next/image";

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
    throw new Error("Failed");
  }
  return await res.json();
};

const YouTubeVideo = async ({ videoId }: { videoId: string }) => {
  const videoDetails = await fetchVideoDetails(videoId);

  if (!videoDetails.items || videoDetails.items.length === 0) {
    return <div>Video not found</div>;
  }

  const video = videoDetails.items[0].snippet;

  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <Image src={video.thumbnails.high.url} alt={video.title} />
      <p>Published on: {new Date(video.publishedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default YouTubeVideo;
