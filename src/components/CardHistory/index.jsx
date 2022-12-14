import { StyleCardHistory } from "./style"
import { BASE_URL } from "../../constants/constants"
import useRequestData from "../../hooks/useRequestData"

export function CardHistory() {

  const [data, error, isLoading] = useRequestData(`${BASE_URL}/orders/history`, localStorage.getItem("token"))

  const ListHistory = data && data.orders.map((item, index) => {

    let subtotal = item.totalPrice.toFixed(2).toString().replace(".", ",")

    let time = Date(item.createdAt)
    let newTime = new Date(time)
    const formattedDate = newTime.toLocaleDateString("pt-br", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })

    return (
      <StyleCardHistory key={index}>
        <p>{item.restaurantName}</p>
        <p>{formattedDate}</p>
        <p>SUBTOTAL R${subtotal}</p>
      </StyleCardHistory>)
  })

  return (
    <>
      {isLoading && "Carregando..."}
      {!isLoading && data && data.orders.length > 0 && ListHistory}
      {!isLoading && data && data.orders.length === 0 && <p>Você não realizou nenhum pedido.</p>}
      {!isLoading && error && <p>Erro</p>}
    </>

  )

}