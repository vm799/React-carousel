import ImageSlider from "./components/ImageSlider"
import { SliderData } from "./components/SliderData"
import { NavBar } from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <header className="Image slider">
      <NavBar />
      </header>
      <main>
      <ImageSlider slides ={ SliderData }/>
      </main>
    </div>
  );
}

export default App;
