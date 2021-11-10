import { useEffect, useState } from "react"
import { CreditCardProps as Card } from "../types/card-type"

type UseCardsProps = {
}


export function useCards() {
  const [cards, setCards] = useState<Card[]>([])
  const [card, setCard] = useState<Card>()

  useEffect(() => {
    const cardItemsMock: Card[] = [
      {
        amount: 150,
        name: 'JETERSON M GOMES - BB',
        cardFunction: 'BOTH',
        flag: 'VISA',
        fourLastNumbers: 1111,
        type: 'GOLD',
        validDate: new Date(),
        selected: true
      },
      {
        amount: 300,
        name: 'DAIANE SILVA - NUBANK',
        cardFunction: 'BOTH',
        flag: 'MASTERCARD',
        fourLastNumbers: 8888,
        type: 'PURPLE',
        validDate: new Date()
      }
    ]
  
    setCards(cardItemsMock);
  }, [])
  

  return {cards, card, setCards}
}