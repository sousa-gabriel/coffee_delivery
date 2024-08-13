import * as S from "./styles";
import Logo from "../../assets/svg/Logo.svg";
import { MapPinLine } from "phosphor-react";
import { Card } from "../card";

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="Logo" />
      <S.Content>
        <S.Tag>
          <MapPinLine size={24} />
          <p>Porto Alegre, RS</p>
        </S.Tag>
        <Card salesCardIndicator={0} />
      </S.Content>
    </S.HeaderContainer>
  );
}
