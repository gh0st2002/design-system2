import './styles/global.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Signin } from './pages/Login/Signin';
import RegisterPage from './pages/register/RegisterPage';
import HomePage from './pages/Home/HomePage';





function App (){
  return(
<BrowserRouter>
    <div className='container'>
    
    <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/login' element={<Signin/>} />
    </Routes>
    
    </div>
    </BrowserRouter>
    
  )
}
export default App;