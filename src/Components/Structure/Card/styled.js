import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardArea = styled.div`
  border: 1px solid black;
  width: 13rem;
  height: 19rem;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  background: -webkit-linear-gradient(
    to right,
    #05a3a3e5,
    #067a83,
    #0bbbb2b4,
    #15e9deb4,
    #0bbbb2b4,
    #0bbbb2b4,
    #05a3a3e5
  );
  background: linear-gradient(
    to right,
    #05a3a3e5,
    #078992,
    #0bbbb2b4,
    #15e9deb4,
    #0bbbb2b4,
    #0bbbb2b4,
    #05a3a3e5
  );
  border: 2px solid rgba(192, 182, 37, 0.616);
`;
export const CardImage = styled.img`
  width: 100%;
  height: 13rem;
  border-radius: 0.4rem;
  border: solid 3px rgb(218, 218, 6);
  filter: brightness(0.9) contrast(1.5) saturate(1.7);
`;

export const CardData = styled.p`
  width: 100%;
  margin: 0.5rem;
  color: black;
  padding: 0.1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1em;
  border-radius: 0.5rem;
`;
export const CardSpan = styled.span`
  font-size: 1.1em;
`;

export const Linked = styled(Link)`
  text-decoration: none;
`;
