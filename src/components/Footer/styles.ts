import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: rgba(29, 32, 38, 1);

  width: 100%;
  height: 242px;
  padding: 70px 10%;

  display: grid;
  grid-template-columns: auto 400px;
`;

export const FooterText = styled.span`
  font-size: 12px;
  line-height: 31px;
  color: #b3b3b3;

  align-self: end;
`;

export const IconsContainer = styled.div`
  justify-self: end;
  display: flex;
  column-gap: 20px;
  padding-right: 40px;
  span {
    cursor: pointer;
    align-self: center;
  }
`;

export const LinksContainer = styled.div`
  justify-self: end;
  display: flex;
  column-gap: 20px;
  span {
    cursor: pointer;
  }
`;
