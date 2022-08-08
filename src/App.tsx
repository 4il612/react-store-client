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
      user.setUser(true)
      user.setIsAuth(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading){
    return (
      <BrowserRouter>
      <Navbar/>
        <Spinner className='position-absolute top-50 start-50 translate-middle' animation={'grow'}/>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
