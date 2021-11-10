import { MainContainer, SideContainer, Container } from './style'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { Dashboard } from '../Dashboard'
import { Account } from '../Account'
import { Menu } from '../../components/Menu'
import { Header } from '../../components/Header'
export function Main() {
  return (
    <BrowserRouter>
      <Container>

        <SideContainer>
          <Menu />
        </SideContainer>
        <MainContainer>
          <div>
            <Header title="Dashboard" />
          </div>

          <div className="main">
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/account' component={Account} />
            </Switch>
          </div>
        </MainContainer>

      </Container>
    </BrowserRouter>
  )
}