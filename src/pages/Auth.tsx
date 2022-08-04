import { useContext, useState } from "react"
import { Card, Container, Form, Button } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { Context } from "../index"
import { login, registration } from "../http/userAPI"
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/consts"
import { observer } from "mobx-react-lite"

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkIn = async () => {
        let data
        if (isLogin){
            data = await login(email, password)
        } else{
            data = await registration(email, password)
        }
        user.setUser(data)
        user.setIsAuth(true)
    }
    
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
                        value={email}
                        onChange={
                            e => setEmail(e.target.value)
                        }
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="password"
                        value={password}
                        onChange={
                            e => setPassword(e.target.value)
                        }
                        type='password'
                    />
                </Form>
                <Button 
                    className="mt-3 align-self-center"
                    style={{minWidth: 120}}
                    variant="outline-success"
                    onClick={() => checkIn()}
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
})

export default Auth