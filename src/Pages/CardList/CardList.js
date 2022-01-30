/* eslint-disable react-hooks/exhaustive-deps */
import Api from "./../../Api/Api";
import Card from "./../../Components/Structure/Card/Card";
import Search from "./../../Components/Search/Search";
import { useEffect, useState } from "react";
import * as S from "./styled";

export default function CardList() {
  const urlApi = `${Api.apiUrl}/character?page=1`;

  const [dados, setDados] = useState([]);
  const [filter, setFilter] = useState([]);

  let completeData = []; // Variável auxiliar

  async function pegarDados(url) {
    if (url != null) {
      await fetch(url)
        .then((resposta) => resposta.json())
        .then((resultado) => {
          completeData = [...completeData, ...resultado.results]; //Mantém o conteúdo existente mais o conteúdo de results(Api)
          setDados(completeData);
          setFilter(completeData);
          pegarDados(resultado.info.next); //Chamada da função para que execute novamente a requisição da próxima página
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  useEffect(() => {
    pegarDados(urlApi);
  }, []);

  const filterPersonagens = (e) => {
    const filtered = filter.filter((personagem) =>
      personagem.name.toLowerCase().includes(e.target.value.toLowerCase())
    ); /*Verifica se o personagem é igual ao valor digitado  */
    setDados(
      filtered
    ); /* Altera o estado para que apareça o personagem filtrado na tela */
  };

  return (
    <>
      <Search placeholder="Buscar personagem..." action={filterPersonagens} />
      <S.CardList>
        {dados.map((personagem) => (
          <Card personagem={personagem} key={personagem.id} />
        ))}
      </S.CardList>
    </>
  );
}
