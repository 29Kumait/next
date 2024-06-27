import { NextApiRequest, NextApiResponse } from "next";
import {
  fetchYoutubeVideoDetails,
  YoutubeApiCustomError,
} from "@/lib/youtubeApi";

const youtubeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { videoId } = req.query;

  if (!videoId || typeof videoId !== "string") {
    res.status(400).json({ error: "Missing or invalid videoId" });
    return;
  }

  try {
    const videoDetails = await fetchYoutubeVideoDetails(videoId);
    res.status(200).json(videoDetails);
  } catch (error) {
    if (error instanceof YoutubeApiCustomError) {
      res
        .status(error.statusCode)
        .json({ error: error.message, details: error.errorDetails });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export default youtubeHandler;
