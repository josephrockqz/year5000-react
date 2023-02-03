import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection } from "./styles";
import ArticleCard from "../ArticleCard";

interface ArticlesBlockProps {
  title: string;
  t: any;
  id: string;
}

const ArticlesBlock = ({ title, t, id }: ArticlesBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row gutter={[24, 16]} id={id}>
          <Col span={24}>
            <h6>
              {t(title)}
            </h6>
          </Col>
          <Col span={8}>
            <ArticleCard
              title="Globe Study"
              subtitle="Crazy findings about globe(s)"
              image_url="https://freesvg.org/img/earth-globe-dan-gerhrad-05r.png"
              url_title="globe_study"
            />
          </Col>
          <Col span={8}>
            <ArticleCard
              title="Footbal is Life?"
              subtitle="We explore whether football is indeed life or not"
              image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/AmFBfield.svg/1200px-AmFBfield.svg.png"
              url_title="football_is_life"
            />
          </Col>
          <Col span={8}>
            <ArticleCard
              title="Missiles are being launched like it's no one's business"
              subtitle="North Korea, Iraq, Russia, USA - missile lahaunchers"
              image_url="https://freesvg.org/img/Missile.png"
              url_title="missile_study"
            />
          </Col>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(ArticlesBlock);
