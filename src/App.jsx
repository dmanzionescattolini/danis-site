import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home/Home';
import LandingPage from '../components/LandingPage/LandingPage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return <main className="container-fluid">  <BrowserRouter>
             <Routes>
            <Route element={<LandingPage/>} path="/"/>
            <Route element={<Home/>} path="/home" />
            </Routes> 
        </BrowserRouter>
        </main>
  ;
}

