
import Home from '../src/routes/home/home.component.jsx'
import Navigation from '../src/routes/navigation/navigation.component'
import {Routes, Route, Outlet}from 'react-router-dom'
import Signin from './routes/sign-in/sign-in.component.jsx'

const Shop=()=>(
  <div>
    <h1>SHOP</h1>
  </div>
)

const App=()=> {
 
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signin' element={<Signin/>}/>
      </Route>
      
    </Routes>

  );
}

export default App;
