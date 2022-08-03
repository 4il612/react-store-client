import { useContext } from "react"
import { Context } from "../index"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container  from "react-bootstrap/Container";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color: "white"}} to={SHOP_ROUTE}>react-store</NavLink>
        <Nav className="ml-auto" style={{color: "white"}}>
          {user.isAuth ? 
              <Container>
                {user.user.role === "ADMIN" && 
                  <Button 
                    onClick={() => navigate(ADMIN_ROUTE)} 
                    variant="outline-light"
                  >
                    Admin
                  </Button>} 
                <Button 
                  style={{marginLeft: '8px'}} 
                  onClick={() => navigate(LOGIN_ROUTE)} 
                  variant="outline-light"
                >
                  exit
                </Button>
              </Container>
            :
            <Button onClick={() => user.setIsAuth(true)} variant="outline-light">LogIn</Button>
          }
          
        </Nav>
        </Container>
      </Navbar>
    )
})

export default NavBar