import { withTranslation } from "react-i18next";

interface ArticleCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const ArticleCard = ({ title, subtitle, image }: ArticleCardProps) => {
  return (
    <div>
      <img src="../public/img/article_thumbnails/globe.jpeg"></img>
    </div>
  );
};

export default withTranslation()(ArticleCard);