import * as S from "./styles";
import { Tag } from "../tag";
import { Button } from "../button";
import { InputNumber } from "../inputNumber";

interface CardCoffeeProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export function CardCoffee({
  name,
  description,
  price,
  image,
}: CardCoffeeProps) {
  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <S.CardCoffeeContainer>
      <img src={image} alt="Café" />
      <Tag label="Tradicional" />
      <h2>{name}</h2>
      <p>{description}</p>
      <S.Sales>
        <p>{priceFormatted}</p>
        <InputNumber />
        <Button type="icon" />
      </S.Sales>
    </S.CardCoffeeContainer>
  );
}
