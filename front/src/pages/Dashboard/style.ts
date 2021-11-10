import styled from "styled-components";

export const DashboardPage = styled.div`
display: flex;
gap: 75px;
`

export const Cards = styled.div`
  display: flex;
  width: 35%;
  flex-direction: column;
  gap: 10px;
`


export const AccountStatistics = styled.div`
  display: flex;
  gap: 10px;
  width: 65%;
`

export const Transactions = styled.div`
  width: 60%;
  box-shadow: 0.2px 0px 0px rgba(0,0,0,0.4);
  
 
`

export const TransactionsHeader = styled.div`
  display: flex;  
  align-items:center;
  justify-content: space-between;  
  padding-right: 10px;
  padding-top: 10px;
  

  span {
    font-size: 20px;
  }
  button {
    width: 35px;
    height: 35px;    
    background: #FAFAFA;
    border: none;

    border-radius: 5px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9)
    }
    &:active {
      transform: scale(0.98);
    }
  }
`


export const AmountDetails = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .amount-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    
    .amount {
      font-size: 40px;
      font-weight: 700;
    }

    .btn-extract {
      margin-top: 20px;
    }
    .date {
      font-size: 12px;
      color: #c0c0c0;
    }
        
  }

  .chart-statistics {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

`

export const Button = styled.button`
      background: #FAFAFA;
      border: none;
      height: 40px;
      width: 70%;
      border-radius: 10px;      
      cursor: pointer;

      &:active {
        transform: scale(0.98);        
      }
      &:hover {
        filter: brightness(0.9)
      }

    
`

export const Separator = styled.div`
height:1px;
background:  #FAFAFA;
width: 100%;
filter: brightness(0.9)
`

