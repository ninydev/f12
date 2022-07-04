import NinyFooter from "./components/Footer/NinyFooter";
import NinyHeader from "./components/Header/NinyHeader";
import KinoKradHome from "./components/Kinokrad/KinoKradHome";


function App() {
  return (
    <div className="App container">
        <NinyHeader></NinyHeader>
        <KinoKradHome></KinoKradHome>
      <NinyFooter></NinyFooter>
    </div>
  );
}

export default App;
