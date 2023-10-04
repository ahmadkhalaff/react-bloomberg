import "./App.css";
import Nav from "./components/Nav";
import Economics from "./components/Economics";
import MainContainer from "./components/MainContainer";
function App() {
  return (
    <div className="App">
      <body>
        <Nav />
        <Economics />
        <MainContainer />

        <footer></footer>
      </body>
    </div>
  );
}

export default App;
