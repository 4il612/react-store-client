import { useContext } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import { Context } from '../index';
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const {user, device} = useContext(Context)
    console.log(user);
    console.log(device)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => {
               return <Route key={path} path={path} element={<Component/>} /> 
            }
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} />
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />}/>
        </Routes>
    )
}

export default AppRouter