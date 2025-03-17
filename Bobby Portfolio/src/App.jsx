import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import { useLocation } from 'react-router-dom';

function App() {
  const page = useLocation().pathname;
  return (
    
      <div>
        <Header className="flex-row">
          <Navbar location= {page}/>
        </Header>
        <Outlet />
        <Footer />
      </div>
    
  )
}
export default App;
