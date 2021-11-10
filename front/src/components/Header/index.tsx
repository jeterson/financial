import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons'
import { Button, HeaderContainer, InputContainer, ProfileContainer } from "./style";

type HeaderProps = {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <div className="title">{title}</div>

      <InputContainer>
        <FontAwesomeIcon icon={faSearch} />
        <input placeholder="Pesquisar" />
      </InputContainer>

      <ProfileContainer>
        <Button>
          <FontAwesomeIcon className="btn-icon" icon={faEnvelope} />
        </Button>
        <Button>
          <FontAwesomeIcon className="btn-icon" icon={faBell} />
        </Button>
        <img src="https://lh3.googleusercontent.com/a-/AOh14Gj4kpz7p4yMU_XbGdVhhlnVounSZ3pyb7BJgwsa=s96-c" />
      </ProfileContainer>

    </HeaderContainer>
  )
}