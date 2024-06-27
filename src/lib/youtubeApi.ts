import fetch from "node-fetch";

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

interface YoutubeApiErrorDetails {
  message: string;

  [key: string]: unknown;
}

interface YoutubeApiError {
  error: YoutubeApiErrorDetails;
}

const isYoutubeApiError = (data: unknown): data is YoutubeApiError => {
  return (
    typeof data === "object" &&
    data !== null &&
    "error" in data &&
    typeof (data as any).error === "object" &&
    "message" in (data as any).error
  );
};

export class YoutubeApiCustomError extends Error {
  public statusCode: number;
  public errorDetails: YoutubeApiErrorDetails | null;

  constructor(
    message: string,
    statusCode: number,
    errorDetails: YoutubeApiErrorDetails | null = null,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorDetails = errorDetails;
    Object.setPrototypeOf(this, YoutubeApiCustomError.prototype);
  }
}

const fetchYoutubeVideoDetails = async (
  videoId: string,
): Promise<YoutubeVideoDetails> => {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    throw new Error("Missing YouTube API Key");
  }

  const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

  const response = await fetch(youtubeApiUrl);
  const data = await response.json();

  if (!response.ok) {
    if (isYoutubeApiError(data)) {
      throw new YoutubeApiCustomError(
        data.error.message,
        response.status,
        data.error,
      );
    } else {
      throw new YoutubeApiCustomError(
        "Unknown error from YouTube API",
        response.status,
      );
    }
  }

  return data as YoutubeVideoDetails;
};

export { fetchYoutubeVideoDetails };

/**
 // simpler way:
 //
 import fetch from "node-fetch";

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

 interface YoutubeApiError {
 error: {
 message: string;
 [key: string]: any;
 };
 }

 const isYoutubeApiError = (data: unknown): data is YoutubeApiError => {
 return (
 typeof data === "object" &&
 data !== null &&
 "error" in data &&
 typeof (data as any).error === "object" &&
 "message" in (data as any).error
 );
 };

 const fetchYoutubeVideoDetails = async (
 videoId: string,
 ): Promise<YoutubeVideoDetails> => {
 const apiKey = process.env.YOUTUBE_API_KEY;

 if (!apiKey) {
 throw new Error("Missing YouTube API Key");
 }

 const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

 const response = await fetch(youtubeApiUrl);
 const data = await response.json();

 if (!response.ok) {
 if (isYoutubeApiError(data)) {
 throw new Error(data.error.message);
 } else {
 throw new Error("Unknown error from YouTube API");
 }
 }

 return data as YoutubeVideoDetails;
 };

 export { fetchYoutubeVideoDetails };
 */

/**
 *
 *
 *
 *
 *


 API Route using the Updated Function

 import { NextApiRequest, NextApiResponse } from 'next';
 import { fetchYoutubeVideoDetails, YoutubeApiError } from "@/lib/youtubeApi";

 const youtubeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
 const { videoId } = req.query;

 if (!videoId || typeof videoId !== 'string') {
 res.status(400).json({ error: 'Missing or invalid videoId' });
 return;
 }

 try {
 const videoDetails = await fetchYoutubeVideoDetails(videoId);
 res.status(200).json(videoDetails);
 } catch (error) {
 if (error instanceof YoutubeApiError) {
 res.status(error.statusCode).json({ error: error.message, details: error.errorDetails });
 } else {
 res.status(500).json({ error: 'Internal Server Error' });
 }
 }
 };

 export default youtubeHandler;


 */
