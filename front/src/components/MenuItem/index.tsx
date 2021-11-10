import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { MenuItemContainer } from './style'

type MenuItemProps = {
  
  svgIcon?: IconProp,
  name: string,
  color?: string,
  selected?: boolean,
  path: string,
}
export function MenuItem({name, path, color = "#989EAA", selected, svgIcon}: MenuItemProps) {
  return (
    <MenuItemContainer color={color} className={selected ? "selected" : ''}>
    <FontAwesomeIcon color={color} icon={svgIcon || faTachometerAlt}  />
     <Link to={path}> {name}</Link>
   </MenuItemContainer>
  )
}