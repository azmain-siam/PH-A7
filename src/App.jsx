import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="w-[90%] lg:w-11/12 max-w-7xl mx-auto">
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
