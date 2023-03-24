import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footers from './components/Footers';
import Navbars from './components/Navbars';

// import SignIn from './components/SignIn';

function App() {
  return (
    <>
    {/* <SignIn /> */}

      <Navbars />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      
      <Footers />

    </>
  );
}

export default App;
