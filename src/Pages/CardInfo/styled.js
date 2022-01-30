import styled from "styled-components";

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  background-color: #f7f5f5;
  transform: rotate(2deg);
  width: 50%;
  position: relative;
  margin-top: 8rem;
  margin-bottom: 8rem;
  border-top: solid 1px lightblue;
  border-bottom: solid 1px lightblue;
  border-left: solid 0.8px rgba(243, 6, 45, 0.623);
  border-right: solid 0.8px rgba(243, 6, 45, 0.623);

  @media (max-width: 600px) {
    width: 90%;
    transform: rotate(0);
  }
`;
export const Folha = styled.div`
  margin-top: -1rem;
`;
export const Span = styled.span`
  color: black;
  font-family: "Poppins", sans-serif;
`;
export const Personagem = styled.h2`
  margin: 4rem 1rem;
  color: #2f4f4f;
`;
export const Image = styled.img`
  width: 130px;
  border: 1px solid black;
  margin-right: 1rem;
  filter: brightness(0.9) contrast(1.5) saturate(1.7);
  border-radius: 5px;
  float: right;
  margin-top: -1rem;
`;
export const Episodes = styled.h1`
  width: 95%;
  height: 45px;
  padding: 0.5rem;
  flex-wrap: wrap;
  font-size: 2em;
  border-top: solid 1px lightblue;
  border-bottom: solid 1px lightblue;
  color: #191970;

  @media (max-width: 1200px) {
    padding-top: 0;
  }
`;
export const Form = styled.form``;
export const Label = styled.label`
  display: inline-block;
  flex-wrap: wrap;
  width: 95%;
  height: 2rem;
  font-size: 1.1em;
  font-weight: bold;
  border-top: solid 1px lightblue;
  border-bottom: solid 1px lightblue;
  margin: 0;
  padding: 0.5rem 0.8rem;
  color: #2f4f4f;
`;
export const Footer = styled.div`
  border-bottom: solid 1px lightblue;
  height: 5rem;
`;
