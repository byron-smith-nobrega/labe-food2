import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import ModalScreen from "../ModalAmout/ModalAmout";
import {
  ButtonAdd,
  ButtonRemove,
  ContainerProductsRestaurant,
  DivDetails,
  DivImg,
  DivSpan,
  PAmount,
} from "./styled";

function CardProductsRestaurantes({
  product,
  handleAddProduct,
  handleRemoveProduct,
  }) {
  const {arrayProducts, setArrayProducts}=useContext(GlobalContext)
  const { photoUrl, name, description, price } = product;
  const [visibleModal, setVisibleModal] = useState(false);
  
  const handleAdd = (product) => {
    setVisibleModal(true);
  };
  const handleRemove = (product) => {
    setVisibleModal(false);
    handleRemoveProduct(product);
  };

  const quantityProduct = (product) => {
    const indexProduct =
      arrayProducts &&
      arrayProducts.findIndex((item) => item.id === product.id);
    return arrayProducts[indexProduct].quantity;
  };

  const visibleAmount = (product) => {
    let condition;
    const indexProduct =
      arrayProducts &&
      arrayProducts.findIndex((item) => item.id === product.id);
    if (indexProduct === -1) {
      condition = false;
    } else {
      condition = true;
    }
    localStorage.setItem("ProductCart", JSON.stringify(arrayProducts));
    return condition;
  };
 
  return (
    <>
      {visibleModal ? (
        <ModalScreen
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          handleAddProduct={handleAddProduct}
          product={product}
          arrayProducts={arrayProducts}
        />
      ) : null}

      <ContainerProductsRestaurant>
        <DivImg>
          <img src={photoUrl} alt="Produto" className="ImgProduct" />
        </DivImg>
        <DivDetails>
          {visibleAmount(product) ? (
            <PAmount>{quantityProduct(product)}</PAmount>
          ) : null}
          <h4 className="TitleProduct">{name}</h4>
          <DivSpan>
            <span>{description}</span>
          </DivSpan>
          <div className="divButton">
            <span>{price.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}</span>
          </div>
          {visibleAmount(product) ? (
            <ButtonRemove
              onClick={() => {
                handleRemove(product);
              }}
            >
              remover
            </ButtonRemove>
          ) : (
            <ButtonAdd
              onClick={() => {
                handleAdd(product);
              }}
            >
              adicionar
            </ButtonAdd>
          )}
        </DivDetails>
      </ContainerProductsRestaurant>
    </>
  );
}

export default CardProductsRestaurantes;