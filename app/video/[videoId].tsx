import { GetServerSideProps } from "next";
import YouTubeVideo from "../components/YouTubeVideo";

import { ParsedUrlQuery } from "querystring";

interface VideoPageProps {
  videoId: string;
}

interface Params extends ParsedUrlQuery {
  videoId: string;
}

const VideoPage = ({ videoId }: VideoPageProps) => {
  return <YouTubeVideo videoId={videoId} />;
};

export const getServerSideProps: GetServerSideProps<VideoPageProps> = async (
  context,
) => {
  const { videoId } = context.params as Params;

  if (!videoId) {
    return {
      notFound: true,
    };
  }

  return {
    props: { videoId },
  };
};

export default VideoPage;
