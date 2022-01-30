import * as S from "./styled";
import logo from "./logo.png";

export default function Search(filter) {
  return (
    <S.SearchBox>
      <S.Search>
        <S.LinkHome to="/">
          <S.Img src={logo} alt="Rick and Morty" />
        </S.LinkHome>
        <S.Input
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
      </S.Search>
    </S.SearchBox>
  );
}
