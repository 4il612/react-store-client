import { Card, Container, Form, Button } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/consts"

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card 
                style={{width: 400}}
                className="p-5"
            >
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="password"
                    />
                </Form>
                <Button 
                    className="mt-3 align-self-center"
                    style={{minWidth: 120}}
                    variant="outline-success"
                >
                    {isLogin ? 'Войти' : 'Регистрация'}
                </Button>
                {isLogin ? 
                    <div className="mt-2 align-self-center">
                        Нет аккаунта? <NavLink to={REGISTER_ROUTE}>Зарегистрируйтесь!</NavLink>
                    </div>    
                    :
                    <div className="mt-2 align-self-center">
                        Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                    </div>  
                }
                
            </Card>
        </Container>
    )
}

export default Auth