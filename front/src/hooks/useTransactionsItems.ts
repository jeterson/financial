import { useEffect, useState } from "react";
import { TransactionItemProps } from "../types/transaction-types";

export function useTransactionsItems() {

  const [tItems, setTItems] = useState<TransactionItemProps[]>([])
  useEffect(() => {
    const itemsMock:TransactionItemProps[] = [
      {
        date: new Date(),
        value: 250,
        description: 'Teste - Elden Ring',        
        category: {name: 'Food', id: 'food', operation: 'D',}
      },
      {
        date: new Date(),
        value: 250,
        description: 'Teste - Elden Ring',
        category: {name: 'Lazer', id: 'lazer', operation: 'D'}
      },
      {
        date: new Date(),
        value: 250,
        description: 'Teste - Elden Ring',
        category: {name: 'Education', id: 'education', operation: 'R',}
      },
      {
        date: new Date(),
        value: 250,
        description: 'Teste - Elden Ring',
        category: {name: 'Fuel', id: 'fuel', operation: 'D',}
      },
      
      
    ] 

    setTItems(itemsMock)
  },[])


  return {tItems}
}