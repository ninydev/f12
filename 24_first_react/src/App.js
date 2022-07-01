import NinyFooter from "./components/Footer/NinyFooter";
import NinyHeader from "./components/Header/NinyHeader";
import FormSignUp from "./components/Forms/Auth/FormSignUp";


function App() {
  return (
    <div className="App">
        <NinyHeader></NinyHeader>
        <FormSignUp></FormSignUp>
      <NinyFooter></NinyFooter>
    </div>
  );
}

export default App;
