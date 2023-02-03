import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next";

interface ArticleCardProps {
  title: string;
  subtitle: string;
  image: string;
  url_title: string;
}

const ArticleCard = ({ title, subtitle, image, url_title }: ArticleCardProps) => {
  return (
    <Link to={"/article/" + url_title}>
      {title}
    </Link>
  );
};

export default withTranslation()(ArticleCard);