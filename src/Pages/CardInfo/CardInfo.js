/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "./styled";
import Api from "./../../Api/Api";
import { useState, useEffect } from "react";
import Navbar from "./../../Components/Navbar/Navbar";

export default function Episodes(props) {
  const [episodes, setEpisodes] = useState([]);

  const personagem = props.location.state;

  function getEpisodeIds(personagem) {
    return personagem.episode.map((episodeId) => {
      const lastIndex = episodeId.lastIndexOf("/");
      //retorna somente o id da url
      return episodeId.substring(lastIndex + 1);
    });
  }
  function fixResult(result) {
    if (result instanceof Array) {
      return result;
    } else {
      //Garante o retorno de Array
      return [result];
    }
  }

  const getEpisode = () => {
    const episodeIds = getEpisodeIds(personagem);
    
    fetch(Api.urlEpisode + episodeIds)
      .then((res) => res.json())
      .then((result) => {
        setEpisodes(fixResult(result));
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <>
      <Navbar />
      <S.Info>
        <S.Container>
          <S.Folha>
            <S.Image src={personagem.image} alt={personagem.name} />
            <S.Personagem>
              <S.Span>Character: </S.Span>
              {personagem.name}
            </S.Personagem>
          </S.Folha>
          <S.Episodes> Appearences in Episodes: </S.Episodes>
          {episodes.map((episode) => (
            <S.Form episode={episode} key={episode.id}>
              <S.Label>{episode.name}</S.Label>
            </S.Form>
          ))}
          <S.Footer />
        </S.Container>
      </S.Info>
    </>
  );
}
