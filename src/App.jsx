import './App.css'
import Header from './header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Footer from './footer/Footer';
import { Route,Routes } from 'react-router';

function App() {


  return (
   <>
   <Header/>  
   <Routes>
    <Route path='/' element={<Home/>}/>
    
   </Routes>
  
   <Footer/>
   </>
  )
}

export default App
