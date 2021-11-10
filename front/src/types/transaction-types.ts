export type TransactionItemProps = {
  icon?: string,
  color?: string,
  value: number,
  description: string,
  date: Date,  
  category: Category,
}
export type TransactionItemsProps = {
    items: TransactionItemProps[]
}

export type Category = {
  id: string,
  name: string,
  operation: 'R'| 'D',
}