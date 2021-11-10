import { CreditCard } from "../../components/CreditCard";
import { Button, Separator, AccountStatistics, AmountDetails, Cards, DashboardPage, Transactions, TransactionsHeader } from './style'
import { useCards } from '../../hooks/useCards'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { CreditCardProps } from "../../types/card-type";
import { TransactionItems } from "../../components/Transactions/TransactionItems";
import { useTransactionsItems } from "../../hooks/useTransactionsItems";
import { DonutChart } from "../../components/Charts/DonutChart";
import { DonutChartData } from "../../types/chart-types";
import { AreaChart } from "../../components/Charts/AreaChart";


export function Dashboard() {

  const { cards, setCards } = useCards()

  const { tItems } = useTransactionsItems();
  const data = [
    {
      label: 'Food',
      id: 'food',
      values: [100]
    },
    {
      label: 'Fuel',
      id: 'fuel',
      values: [30]
    },
    {
      label: 'Education',
      values: [573],
      id: 'education'
    },
    {
      label: 'Lazer',
      id: 'lazer',
      values: [60]
    }

  ]

  function handleDonutChartClick(obj: DonutChartData) {
    console.log(obj)
  }

  function handleClickCard(card: CreditCardProps) {
    setCards(cards.map(c => {
      c.selected = false;
      if (card.name == c.name) {
        c.selected = !card.selected;
      }
      return c;
    }))
  }

  return (
    <DashboardPage>
      <Cards>
        {
          cards.map(card => <CreditCard onCardClick={() => handleClickCard(card)} key={card.name} {...card} />)
        }
      </Cards>
      <AccountStatistics>
        <Transactions>
          <TransactionsHeader>
            <span>Ultimas Transações</span>
            <button type="button">
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </TransactionsHeader>

          <TransactionItems items={tItems} />

         
        </Transactions>

        <AmountDetails>
          <div className="amount-info">
            <span>Seu Valor Total</span>
            <span className="amount">R$ 378,50</span>
            <span className="date">16/10/2021</span>
            <Button className="btn-extract">Extrato</Button>
          </div>
          <Separator />
          <div className="chart-statistics">
            <Button>Ver tudo</Button>
            <DonutChart onClick={handleDonutChartClick} title="Teste" data={data} />
          </div>
        </AmountDetails>
      </AccountStatistics>

    </DashboardPage>
  )
}