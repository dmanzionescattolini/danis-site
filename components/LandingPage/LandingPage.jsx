  import { Link } from 'react-router-dom';
import './LandingPage.scss'

  export default function LandingPage() {
    return (
     <header>
   
          <img id="banner" src="../../src/assets/banner.png" alt="banner yellow dinosaur productions" className="img-fluid shadow-1-soft" />
          <a href="/home" ><img id="dinosaur"src="../../src/assets/dinosaur.png" alt="yellow dinosaur" className="img-fluid w-75 "></img></a>
    </header>
    );
  }