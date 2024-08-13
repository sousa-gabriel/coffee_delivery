import { ShoppingCartSimple } from "phosphor-react";
import * as S from "./styles";

interface ButtonProps {
  type: "primary" | "secondary" | "icon";
  label?: string;
}

export function Button({ type, label }: ButtonProps) {
  if (type === "primary") {
    return (
      <S.ButtonPrimary>
        <p>{label}</p>
      </S.ButtonPrimary>
    );
  }

  if (type === "secondary") {
    return (
      <S.ButtonSecondary>
        <p>{label}</p>
      </S.ButtonSecondary>
    );
  }

  if (type === "icon") {
    return <S.ButtonIcon>{<ShoppingCartSimple />}</S.ButtonIcon>;
  }
}
