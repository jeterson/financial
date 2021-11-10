export type CardTypes = 'PURPLE'|'BLACK'|'GOLD'|'BLUE'|'ORANGE'|'GREEN'|'SILVER';
export type Flags = 'VISA'|'MASTERCARD'|'AMERICAN_EXPRESS'|'OTHER'
type CardFunction = 'DEBIT'| 'CREDIT'|'BOTH'

export type CreditCardProps = {
  name: string;
  amount: number;
  flag?: Flags;
  fourLastNumbers?: number;
  validDate?: Date
  type?: CardTypes
  cardFunction?:CardFunction,
  selected?: boolean,
  onCardClick?: Function  
};

