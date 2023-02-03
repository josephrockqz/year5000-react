import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next";

interface ArticleCardProps {
  title: string;
  subtitle: string;
  image_url: string;
  url_title: string;
}

const ArticleCard = ({ title, subtitle, image_url, url_title }: ArticleCardProps) => {
  return (
    <Link to={"/article/" + url_title}>
      <div style={{background: "lightgrey", width: "190px", height: "300px", margin: "auto"}}>
        <p style={{fontSize: "20px", marginBottom: "5px"}}>
          <b>{title}</b>
        </p>
        <p style={{fontSize: "12px"}}>
          {subtitle}
        </p>
        <img src={image_url} style={{maxWidth: "180px", maxHeight: "120px"}} />
      </div>
    </Link>
  );
};

export default withTranslation()(ArticleCard);