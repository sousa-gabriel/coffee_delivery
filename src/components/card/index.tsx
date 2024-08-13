import * as S from "./styles";
import { ShoppingCart } from "phosphor-react";

interface CardProps {
  salesCardIndicator: number;
}

export function Card({ salesCardIndicator }: CardProps) {
  return (
    <S.CardContainer>
      <ShoppingCart size={24} />
      {salesCardIndicator > 0 && <S.Card>{salesCardIndicator}</S.Card>}
    </S.CardContainer>
  );
}
