import styled from "styled-components"
const MainContainer = styled.main`
  background: #FFFFFF;
  height: 100vh;
  flex: 1;
  overflow: hidden;
  .main {
     padding:10px;
     height: calc(100vh - 85px);
     padding-bottom: 35px;
     overflow: auto;
  }
  

`

const Container = styled.div`
   background: gray;
   display: flex;   
`

const SideContainer = styled.aside`
   background: #171719;
   height: 100vh;
   width: 18%;
`

export {MainContainer, SideContainer, Container}