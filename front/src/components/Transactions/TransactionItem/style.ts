import styled from "styled-components";

export const Container = styled.li`

  list-style: none;
  display: flex;  
  align-items: center;  
  gap: 15px;
  
  
  .info-container{        
      display: flex;
      flex: 1;      
      justify-content: space-between;
      align-items: center;
    .info{      
      display: flex;
      flex-direction: column;
      .description {
        font-size: 16px;
        font-weight: 500;
      }
      .date {
        font-size: 12px;
        color: #B9B9B9
      }
    }

    .value {      
      font-weight: 600;
      font-size: 14px;
    }
  }

  &.in .value { 
    color: #FFAA57
  }

  &.out .value {
    color: #B9B9B9
  }

  .icon-container {
    height:45px;
    width: 45px;
    border-radius:10px;
    background: #DCEAF3;

    display: flex;
    justify-content:center;
    align-items: center;
  }

`