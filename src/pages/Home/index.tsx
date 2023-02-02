import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import TeamContent from "../../content/TeamContent.json";
import MissionContent from "../../content/MissionContent.json";
import ArticlesContent from "../../content/ArticlesContent.json";
import ArticlesBlock from "../../components/ArticlesBlock";

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
        icon="intro.svg"
        id="intro"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="mission.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={TeamContent.title}
        content={TeamContent.text}
        section={TeamContent.section}
        icon="team.svg"
        id="team"
      />
      <ArticlesBlock
        title={ArticlesContent.title}
      />
    </Container>
  );
};

export default Home;
