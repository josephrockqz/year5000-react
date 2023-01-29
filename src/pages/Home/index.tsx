import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import TeamContent from "../../content/TeamContent.json";
import MissionContent from "../../content/MissionContent.json";
import ArticlesContent from "../../content/ArticlesContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon=""
        id="intro"
      />
      <ContentBlock
        type="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon=""
        id="mission"
      />
      <ContentBlock
        type="left"
        title={TeamContent.title}
        content={TeamContent.text}
        section={TeamContent.section}
        icon=""
        id="team"
      />
      <ContentBlock
        type="left"
        title={ArticlesContent.title}
        content={ArticlesContent.text}
        icon=""
        id="articles"
      />
    </Container>
  );
};

export default Home;
