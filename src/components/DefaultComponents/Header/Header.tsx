import React from "react";
import Logo from "../Logo/Logo";
import { Container, StyledLink } from "./styles";

const Header: React.FC = () => {
  const menuItems = [
    {
      name: "Nossos serviços",
      path: "",
    },
    {
      name: "Nossos projetos",
      path: "",
    },
    {
      name: "Solicite um orçamento",
      path: "",
    },
  ];

  return (
    <Container>
      <Logo width={42} height={42} />
      {menuItems.map((item) => (
        <StyledLink to={item.path}>{item.name}</StyledLink>
      ))}
    </Container>
  );
};

export default Header;
