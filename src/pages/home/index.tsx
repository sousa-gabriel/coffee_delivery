import { Banner } from "../../components/banner";
import { CardCoffee } from "../../components/cardCoffe";
import * as S from "./styles";
import coffeeAmericano from "../../assets/svg/coffee/Americano.svg";
import coffeeArabe from "../../assets/svg/coffee/Arabe.svg";
import coffeeCafeComLeite from "../../assets/svg/coffee/CafeComLeite.svg";
import coffeeCafeGelado from "../../assets/svg/coffee/CafeGelado.svg";
import coffeeCapuccino from "../../assets/svg/coffee/Capuccino.svg";
import coffeeChocolateQuente from "../../assets/svg/coffee/ChocolateQuente.svg";
import coffeeCubano from "../../assets/svg/coffee/Cubano.svg";
import coffeeExpresso from "../../assets/svg/coffee/Expresso.svg";
import coffeeExpressoCremoso from "../../assets/svg/coffee/ExpressoCremoso.svg";
import coffeeHavaiano from "../../assets/svg/coffee/Havaiano.svg";
import coffeeIrlandês from "../../assets/svg/coffee/Irlandês.svg";
import coffeeLatte from "../../assets/svg/coffee/Latte.svg";
import coffeeMacchiato from "../../assets/svg/coffee/Macchiato.svg";
import coffeeMochaccino from "../../assets/svg/coffee/Mochaccino.svg";

export function Home() {
  const coffees = [
    {
      id: 1,
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: coffeeExpresso,
      price: 9.9,
    },
    {
      id: 2,
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      image: coffeeAmericano,
      price: 9.9,
    },
    {
      id: 3,
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      image: coffeeExpressoCremoso,
      price: 12.9,
    },
    {
      id: 4,
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      image: coffeeCafeGelado,
      price: 12.9,
    },
    {
      id: 5,
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      image: coffeeCafeComLeite,
      price: 12.9,
    },
    {
      id: 6,
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      image: coffeeLatte,
      price: 12.9,
    },
    {
      id: 7,
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      image: coffeeCapuccino,
      price: 12.9,
    },
    {
      id: 8,
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      image: coffeeMacchiato,
      price: 12.9,
    },
    {
      id: 9,
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      image: coffeeMochaccino,
      price: 12.9,
    },
    {
      id: 10,
      name: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      image: coffeeChocolateQuente,
      price: 12.9,
    },
    {
      id: 11,
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      image: coffeeCubano,
      price: 12.9,
    },
    {
      id: 12,
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      image: coffeeHavaiano,
      price: 12.9,
    },
    {
      id: 13,
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      image: coffeeArabe,
      price: 12.9,
    },
    {
      id: 14,
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      image: coffeeIrlandês,
      price: 12.9,
    },
  ];

  return (
    <S.HomeContainer>
      <Banner />
      <S.Title>Nossos cafés</S.Title>
      <S.ContentCards>
        {coffees.map((coffee) => (
          <CardCoffee
            key={coffee.id}
            price={coffee.price}
            name={coffee.name}
            description={coffee.description}
            image={coffee.image}
          />
        ))}
      </S.ContentCards>
    </S.HomeContainer>
  );
}
