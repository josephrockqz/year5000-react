import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { useLocation } from "react-router-dom";

import {
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  const currentLocation = useLocation();
  console.log(currentLocation.pathname);

  if (currentLocation.pathname == "/") {
    return (
      <>
        <Extra>
          <Container border={true}>
            <Row
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <NavLink to="/">
                <LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </LogoContainer>
              </NavLink>
              <FooterContainer>
                <SocialLink
                  href="https://github.com/josephrockqz/year5000-react"
                  src="github.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/joseph-rock/"
                  src="linkedin.svg"
                />
              </FooterContainer>
            </Row>
          </Container>
        </Extra>
      </>
    );
  }

  return <span />;

  
};

export default withTranslation()(Footer);
