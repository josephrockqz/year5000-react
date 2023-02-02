import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, ContentWrapper } from "./styles";
import ArticleCard from "../ArticleCard";

interface ArticlesBlockProps {
  title: string;
  t: any;
}

const ArticlesBlock = ({ title, t }: ArticlesBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        {/* <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
            </Col>
          </ContentWrapper>
        </Row> */}
        {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 60 }}>
          <div>Column 1</div>
          <div>Column 2</div>
          <div>Column 3</div>
        </div> */}
        <Row gutter={[24, 16]}>
          <Col span={8}>
            <ArticleCard
              title="Globe Study"
              subtitle="Crazy findings about globe(s)"
              image="Image of Globe"
            />
          </Col>
          <Col span={8}>Hello</Col>
          <Col span={8}>Hello</Col>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(ArticlesBlock);
