import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Investigation from "./components/Investigation/Investigation.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import FundFlow from "./components/FundFlow/FundFlow.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Investigation />
      <Dashboard />
      <FundFlow />
      <Footer />
    </>
  );
}

export default App;