import styled from "styled-components"

const Container = styled.div`
  color: #FFF;  
  
`
const Separator = styled.div`
  height: 1px;
  width: 100%;
  background: grey;
  margin-bottom: 30px
`
const LogoContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 20px;

`
const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .selected a {
    color: #fff;
  }
  .selected svg {
    color: #fff;
  }
 

`

export { Container, LogoContainer, MenuItemsContainer,Separator }
