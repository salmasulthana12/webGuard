import "./App.css";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import LastPart from "./components/LastPart";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import SecondPart from "./components/SecondPart";
import SecuritySection from "./components/SecuritySection";
import SubSection from "./components/SubSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondPart />
      <SecuritySection />
      <SubSection />
      <Review />
      <LastPart />
      <Footer />
    </div>
  );
}

export default App;
