import { Link } from 'react-router-dom'
import {StyledLink} from '../../utils/style/Atoms'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'


const HomeLogo = styled.img`
height : 70px;`

const NavConatiner = styled.nav`
padding : 30px;
display : flex;
justify-content : space-between;
align-items : center;
`

function Header() {
  return (
    <NavConatiner>
      <Link to="/">
        <HomeLogo src={DarkLogo} alt="shiny agency  logo"/>
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavConatiner>
  )
}

export default Header
