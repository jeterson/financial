import styled from "styled-components";

export const AccountPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .title {

    
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      padding-top: 20px;
      
    }
    .help {
      color: #c0c0c0;
      font-size: 14px;
      padding-bottom: 20px;

    }
  }

  
`

export const Form = styled.form`

  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 50%;
  

`

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 100%;  
  
  button {
    height: 40px;
    padding: 10px;

    border: none;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;    

    &.cancel {
      background: #E95D2E;
      color: #FFFF;
    }

    &.save {
      background: #2185FF;
      color: #FFFF;
      margin-right: -20px;
    }

    &:active {
      transform: scale(0.99);
    }
    &:hover {
      filter: brightness(0.9)
    }
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {    
    font-size: 12px;
  }

  input {
    width: 100%;
    height: 25px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background: #DCEAF3;
  }

`