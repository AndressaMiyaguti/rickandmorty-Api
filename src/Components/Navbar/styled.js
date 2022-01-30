import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  height: 5rem;
  align-items: center;
  width: 100vw;
  z-index: 100;
  background-color: #1c1c1c;
  position: fixed;
  box-shadow: #00ff00 0px 15px 15px -20px;

  @media (max-width: 560px) {
    flex-direction: column;    
  }
`;

export const Img = styled.img`
  width: 210px;
  filter: brightness(0.9) contrast(1.5) saturate(1.7);
  margin-top: -1rem;
  padding: 0.2rem 0;
`;
export const LinkHome = styled(Link)`
  text-decoration: none;
`;
