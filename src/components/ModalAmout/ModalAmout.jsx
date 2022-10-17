import React from "react";
import { DivContainer, DivModal, DivModalposition } from "./styled";
import { useForm } from "../../hooks/useForm";

const ModalScreen = ({
  setVisibleModal,
  handleAddProduct,
  product,
  id = "modal",
}) => {
  const [form, onChange, clear] = useForm({
    quantity: "",
  });

  const handleClose = (event) => {
    if (event.target.id === id) setVisibleModal(false);
  };

  const handleQuantity = (event) => {
    event.preventDefault();
    setVisibleModal(false);
    {form.quantity>0?handleAddProduct(product, form.quantity):null}
  };

  return (
    <DivModalposition>
      <DivModal id="modal" className="modal" onClick={handleClose}>
        <DivContainer>
          <span>Selecione a quantidade desejada </span>
          <form onSubmit={handleQuantity}>
            <select
              id="quantity"
              name="quantity"
              value={form.quantity}
              onChange={onChange}
            >
              <option>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            <button>ADICIONAR AO CARRINHO</button>
          </form>
        </DivContainer>
      </DivModal>
    </DivModalposition>
  );
};

export default ModalScreen;
