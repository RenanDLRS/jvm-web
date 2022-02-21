import React from "react";
import Logo from "../DefaultComponents/Logo/Logo";
import {
  Container,
  FooterText,
  IconsContainer,
  LinksContainer,
} from "./styles";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      name: "Contato",
      path: "",
    },
    {
      name: "Sobre nós",
      path: "",
    },
    {
      name: "Artstation",
      path: "",
    },
  ];
  const footerIcons = [
    {
      Icon: FaFacebookF,
      path: "",
    },
    {
      Icon: BsInstagram,
      path: "",
    },
    {
      Icon: FaGoogle,
      path: "",
    },
  ];

  return (
    <Container>
      <Logo width={42} height={42} />
      <IconsContainer>
        {footerIcons.map(({ Icon, ...iconRest }) => (
          <a href={iconRest.path} target="_blank" rel="noreferrer">
            <Icon fill="#0b63c4" />
          </a>
        ))}
      </IconsContainer>
      <FooterText>JVM 2022, all rights reserved</FooterText>
      <LinksContainer>
        {footerLinks.map((link) => (
          <FooterText>{link.name}</FooterText>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default Footer;
