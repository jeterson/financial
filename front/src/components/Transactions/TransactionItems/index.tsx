import { TransactionItemsProps } from "../../../types/transaction-types";
import { TransactionItem } from "../TransactionItem";
import { ListContainer } from "./style";

export function TransactionItems(props: TransactionItemsProps) {
  return (
    <ListContainer>
      {
        props.items.map((item, index) => {
          return (
            <TransactionItem key={index} {...item} />
          )
        })
      }
    </ListContainer>
  )
}