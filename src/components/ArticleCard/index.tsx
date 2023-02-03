import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next";

interface ArticleCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const ArticleCard = ({ title, subtitle, image }: ArticleCardProps) => {
  return (
    <Link to="/article">
      {title}
    </Link>
  );
};

export default withTranslation()(ArticleCard);