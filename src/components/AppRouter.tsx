import {Navigate, Route, Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const isAuth: boolean = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, component}) => 
                <Route key={path} path={path} element={component()} />
            )}
            {publicRoutes.map(({path, component}) => 
                <Route key={path} path={path} element={component()} />
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />}/>
        </Routes>
    )
}

export default AppRouter