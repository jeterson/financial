import styled from "styled-components";
type StyleProps = {
  color?: string
}
const MenuItemContainer  = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 24px;
  align-items: center;
  a, svg {
    color: ${props => props.color};
    text-decoration: none;   
  }  

  &:hover a {
    filter: brightness(0.9);
  }
`

export {MenuItemContainer}