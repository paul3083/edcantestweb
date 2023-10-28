import React, {useEffect, useRef} from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import IntroClub from "./pages/IntroClub";
import Apply from "./pages/Apply";
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  const introclub = useRef(null)
  const apply = useRef(null)
  const home = useRef(null)

  const scrollIntroClub = () => {
    if (introclub !== null) {
      const { offsetTop } = introclub.current;
      window.scrollTo({ behavior: "smooth", top: offsetTop });
    }
  }

  const scrollApply = () => {
    if (apply !== null) {
      const { offsetTop } = apply.current;
      window.scrollTo({ behavior: "smooth", top: offsetTop });
    }
  }

  const scrollHome = () => {
    if (home !== null) {
      const { offsetTop } = home.current;
      window.scrollTo({ behavior: "smooth", top: offsetTop });
    }
  }

  return (
    <>
      <Header sc1={scrollIntroClub} sc2={scrollApply} sc3={scrollHome}/>
      <Home homeRef={home}/>
      <IntroClub introclubRef={introclub}/>
      <Apply applyRef={apply}/>
    </>
  );
}

export default App;