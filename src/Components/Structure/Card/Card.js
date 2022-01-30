import * as S from "./styled";

export default function Card(personagem) {
  const dados = personagem.personagem;

  return (
    <>
      <S.Linked to={{ pathname: "/" + dados.id, state: dados }}>
        <S.CardArea>
          <S.CardImage src={dados.image} alt={dados.name} />

          <S.CardData>
            <S.CardSpan>Character:</S.CardSpan> {dados.name}
          </S.CardData>
          <S.CardData>
            <S.CardSpan>Status:</S.CardSpan> {dados.status}
          </S.CardData>
        </S.CardArea>
      </S.Linked>
    </>
  );
}
