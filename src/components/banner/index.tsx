import * as S from "./styles";
import banner from "../../assets/svg/Banner.svg";
import backGround from "../../assets/svg/BackgroundBanner.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CardBanner } from "../cardBanner";

export function Banner() {
  return (
    <S.BannerContainer style={{ backgroundImage: `url(${backGround})` }}>
      <S.BannerContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora.
        </p>
        <S.BannerDetails>
          <CardBanner
            IconComponent={<ShoppingCart color={"#FFFFFF"} />}
            label="Café selecionado"
            type="cart"
          />
          <CardBanner
            IconComponent={<Package color={"#FFFFFF"} />}
            label="Embalagem mantém o café intacto"
            type="package"
          />
          <CardBanner
            IconComponent={<Coffee color={"#FFFFFF"} />}
            label="Entrega rápida e rastreada"
            type="coffee"
          />
          <CardBanner
            IconComponent={<Timer color={"#FFFFFF"} />}
            label="O café chega fresquinho até você"
            type="timer"
          />
        </S.BannerDetails>
      </S.BannerContent>
      <img src={banner} alt="Café Rocket seat" />
    </S.BannerContainer>
  );
}
