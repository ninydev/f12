import NinyFooter from "./components/Footer/NinyFooter";
import NinyHeader from "./components/Header/NinyHeader";
import PhoneBook from "./components/PhoneBook/PhoneBook";


function App() {
  return (
    <div className="App container">
        <NinyHeader></NinyHeader>
        <PhoneBook></PhoneBook>
      <NinyFooter></NinyFooter>
    </div>
  );
}

export default App;
