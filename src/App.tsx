import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
    .then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <BrowserRouter>
      <Navbar/>
      <Spinner hidden={!loading} className='position-absolute top-50 start-50 translate-middle' animation={'grow'}/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
