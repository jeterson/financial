import styled from "styled-components";

const HeaderContainer = styled.header`
  box-shadow: 0 2px 12px rgba(0,0,0,0.4);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .title {
    padding: 10px;
    font-weight: 700;
    font-size: 20px;
  }
`

const InputContainer = styled.div`
  background: #FAFAFA;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  
  > svg {
    color: #878F9F;
  }

  input {
    border: none;
    height: 40px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;   
    background: transparent;
    &:focus {
      outline: none;
    }
  }
  
`

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`
const Button = styled.button `
  border: none;
  background: transparent;
  width: 30px;
  height: 30px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  

  .btn-icon {
    width: 100%;
    height: 100%;
    color: #232227;

    &:hover {
    filter: brightness(4)
  }
  }
`
export { HeaderContainer, InputContainer, ProfileContainer, Button }