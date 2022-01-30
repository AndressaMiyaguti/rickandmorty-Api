import logo from "./logo.png";
import * as S from "./styled";

export default function Navbar() {
  return (
    <S.Navbar>
      <S.LinkHome to="/">
        <S.Img src={logo} alt="Rick and Morty" />
      </S.LinkHome>
    </S.Navbar>
  );
}
