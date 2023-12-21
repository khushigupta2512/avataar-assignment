import Carousel from "./components/Carousel/Carousel";
import Nav from "./components/Navbar/Nav";
import { ViewportProvider } from "./context/ResizeContext";

function App() {
  return (
    <>
      <ViewportProvider>
        <Nav />
        <div>Featured Products</div>
        <div>Explore and discover a variety of products</div>
        <Carousel />
      </ViewportProvider>
    </>
  );
}

export default App;
