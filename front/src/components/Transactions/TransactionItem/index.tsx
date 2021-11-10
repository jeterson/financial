import { TransactionItemProps } from "../../../types/transaction-types";
import { Container } from "./style";
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TransactionItem({ category, description, date, value, icon, color }: TransactionItemProps) {

  function formatCurrency(amount: number) {
    const value = amount;
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  return (
    <Container className={category.operation === 'R' ? 'in' : 'out'}>
      <div className="icon-container">
        <FontAwesomeIcon className="icon" icon={faAddressBook} />
      </div>
      <div className="info-container">
       
        <div className="info">
          <div className="description">{description}</div>
          <div className="date">18/10/2020 18:00</div>
        </div>

        <div className="value">{category.operation === 'R' ? '+' : '-' }{formatCurrency(value)}</div>
      </div>
    </Container>
  )
}