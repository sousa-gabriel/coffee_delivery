import * as S from "./styles";
interface CardBannerProps {
  IconComponent: React.ReactNode;
  label: string;
  type: "cart" | "package" | "coffee" | "timer";
}

export function CardBanner({ IconComponent, label, type }: CardBannerProps) {
  return (
    <S.CardContainer>
      <S.IconRound type={type}>{IconComponent}</S.IconRound>
      <p>{label}</p>
    </S.CardContainer>
  );
}
