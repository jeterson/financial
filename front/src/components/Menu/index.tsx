import {Container, LogoContainer, MenuItemsContainer, Separator} from './style'
import {BrowserRouter, Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from '../MenuItem'
import {faDonate} from '@fortawesome/free-solid-svg-icons'


export function Menu() {
  return (
    <Container>
      
      <LogoContainer>
        <FontAwesomeIcon size="4x" icon={faDonate} />
      </LogoContainer>
      <Separator  />
      <MenuItemsContainer>
        <MenuItem path="/" name="Dashboard" selected />
        <MenuItem path="/account" name="Contas" />
        <MenuItem path="/" name="Expense" />        
      </MenuItemsContainer>
      
    </Container>
  )
}