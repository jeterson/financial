import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCreditCard,} from '@fortawesome/free-regular-svg-icons'
import { faCcMastercard, faCcVisa, faCcAmex } from '@fortawesome/free-brands-svg-icons'
import { Card } from "./style";
import { CreditCardProps } from "../../types/card-type";
import { useCards } from "../../hooks/useCards";

type CardTypes = 'PURPLE'|'BLACK'|'GOLD'|'BLUE'|'ORANGE'|'GREEN'|'SILVER';
type Flags = 'VISA'|'MASTERCARD'|'AMERICAN_EXPRESS'|'OTHER'
type CardFunction = 'DEBIT'| 'CREDIT'|'BOTH'




export function CreditCard({
                      name, 
                      amount, 
                      flag = 'OTHER',
                      fourLastNumbers = 8888,
                      validDate = new Date,
                      type = 'BLACK',
                      cardFunction = 'CREDIT',
                      selected = false,  
                      onCardClick = () => {}                              
                    }: CreditCardProps) {

  

  function formatCurrency(amount: number) {
    return amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  function formatValidDate(validDate: Date) {
    return `${validDate.getMonth()+1}/${validDate.getFullYear()}`
  }

  function getFlagIcon(flag: Flags) {
    switch (flag) {
      case 'OTHER':
        return faCreditCard
      case 'VISA':
        return faCcVisa
      case 'MASTERCARD':
        return faCcMastercard
      case 'AMERICAN_EXPRESS':
        return faCcAmex
    }
  }
  return (
    <Card onClick={() => onCardClick()} className={`${type.toLocaleLowerCase()} ${selected ? 'selected' : ''}`}>
      <div className="top">
        <span className="card-function">{`${cardFunction === 'CREDIT' ? 'Credit' : cardFunction === 'DEBIT' ? 'Debt': 'Debt/Credit'}`}</span>
      </div>
      <div className="name-and-amount">
        <span className="description">{name}</span>
        <span className="amount">{formatCurrency(amount)}</span>
      </div>
      <div className="card-info">        
        <FontAwesomeIcon className="flag" icon={getFlagIcon(flag)} />
        <div className="info">
          <span className="numbers">**** **** **** {fourLastNumbers}</span>
          <span className="valid-date">{formatValidDate(validDate)}</span>
        </div>
      </div>
    </Card>
  )
}