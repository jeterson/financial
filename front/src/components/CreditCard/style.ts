import styled from "styled-components";

const Card = styled.div`
  height: 250px;
  width: 100%;  
  border-radius: 20px;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  gap: 25px;  
  transition: filter 0.3s;

  &.selected {
    transition: all 0.3s;
    transform: scale(0.99);
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.99);

  }
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  .top {
    display: flex;
    justify-content: flex-end;
    margin-top:-30px
    
  }

  &.purple {
    background: #830E74    
  }
  &.gold {
    background: #FFE800;   
  }
  &.orange {
    background:#FF7A00;
  }
  &.black {
    background:#232227;
  }
  &.green{
    background:#213321;
  }
  &.blue {
    background: #152B8E;
  }

  .name-and-amount {
    display: flex;
    align-items: flex-start;
    justify-content:center;   
    flex-direction: column;
    
  }
  .description, .top {    
    color: #7F7F80;
    font-weight: 700;
  }
  &.gold > .name-and-amount .description, &.gold .top   {
    color: #0053A6;
  }
  &.orange > .name-and-amount .description, &.orange .top  {
    color: #fff;
  }
  &.blue .name-and-amount .description, &.blue .top  {
    color: #fff;
  }
  &.green .name-and-amount .description, &.green .top  {
    color: #50D57A;
  }
  .amount {
    color: #fff;
    font-size:30px;      
  }
  &.gold .amount {
    color: #0053A6;
  }
  .card-info {
    display: flex;
    margin-bottom: -20px;
    justify-content: space-between;
    color: #fff;
  
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;      
    }    
    .flag {
      width: 50px;
      height: 50px
    }
  }
  &.gold .card-info {
      color: #0053A6;
    }
  &.green .card-info {
      color: #50D57A;
    }

  
`


export {Card}