import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchBox = styled.div`
  background-color: #1c1c1c;
  width: 100%;
  position: fixed;
  align-items: center;
  box-shadow: #00ff00 0px 15px 15px -20px;
  display: flex;
  top: 0;
  height: 5rem;
  z-index: 100;

  @media (max-width: 600px) {
    height: 9rem;
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

export const Search = styled.div`
  width: 80%;
  height: 6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: -3rem;
  }
`;

export const Input = styled.input`
  font-size: 1.5em;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  outline: 0;
`;
