import NinyFooter from "./components/Footer/NinyFooter";
import NinyHeader from "./components/Header/NinyHeader";
import TagsList from "./components/Tags/TagsList";


function App() {
  return (
    <div className="App">
      <NinyHeader></NinyHeader>
        <TagsList></TagsList>
      <NinyFooter></NinyFooter>
    </div>
  );
}

export default App;
