import { NextApiRequest, NextApiResponse } from "next";
import {
  fetchYoutubeVideoDetails,
  YoutubeApiCustomError,
} from "../../app/lib/youtubeApi";

const youtube = async (req: NextApiRequest, res: NextApiResponse) => {
  const { videoId } = req.query;

  if (!videoId || typeof videoId !== "string") {
    res.status(400).json({ error: "Missing or invalid videoId" });
    return;
  }

  try {
    console.log(`Fetching details for videoId: ${videoId}`);
    const videoDetails = await fetchYoutubeVideoDetails(videoId as string);
    res.status(200).json(videoDetails);
  } catch (error) {
    console.error("Error fetching YouTube video details:", error);
    if (error instanceof YoutubeApiCustomError) {
      res
        .status(error.statusCode)
        .json({ error: error.message, details: error.errorDetails });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export default youtube;
