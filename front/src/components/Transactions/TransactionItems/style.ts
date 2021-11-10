import styled from "styled-components";

export const ListContainer = styled.ul`

display: flex;
flex-direction: column;
gap: 15px;
max-height: 250px;
overflow: hidden;

padding-top: 10px;
margin-top:10px;
padding-right: 15px;
padding-bottom: 10px;



&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px rgba(0,0,0,0);
  border-radius: 5px;
  
    
}

&::-webkit-scrollbar {
    width: 10px;
    display: none;
    
}

&:hover {
  overflow: auto
}

&::-webkit-scrollbar-thumb {    
    box-shadow: inset 10px 10px 10px 10px #232227;
    border-radius: 5px;
    
}
`