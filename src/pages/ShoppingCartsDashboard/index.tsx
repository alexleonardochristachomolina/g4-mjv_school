import { useState, useEffect } from "react";
import { Container } from "./style";
import { IShoppingCart } from "../../interfaces/shoppingcart.interfaces";
import { AsideDescription } from "../../components/AsideDescription";
import { HeaderDescription } from "../../components/HeaderDescription";
import { Link } from "react-router-dom";
import { ListShoppingCarts } from "../../components/ListShoppingCarts";
import { Button } from "../../components/Button";

export const ShoppingCartsDashboard = () => {
  const [shoppingCartList, setShoppingCartList] = useState<IShoppingCart[]>([]);

  return (
    <Container>
      <AsideDescription />
      <div className="main-content">
        <HeaderDescription />
        <Link className="back-to-dashboard" to="/dashboard">
          Voltar
        </Link>
        <Button
          label="FINALIZAR A COMPRA"
          className="button"
          BackgroundColor="var(--action-primary)"
          linkTo="/Dashboard"
        ></Button>

        <ListShoppingCarts />
      </div>
    </Container>
  );
};