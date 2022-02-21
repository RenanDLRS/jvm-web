import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderHeight = "84px";

export const Container = styled.div`
  width: 100%;
  height: ${HeaderHeight};
  background-color: rgba(36, 40, 48, 0.5);

  display: flex;
  column-gap: 40px;
  align-items: center;
  padding-left: 10%;

  position: fixed;
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #d1d1d1;
  text-decoration: none;

  margin-right: 20px;
`;
