import Carousel from "./components/Carousel/Carousel";
import Nav from "./components/Navbar/Nav";
import { ViewportProvider } from "./context/ResizeContext";

function App() {
  return (
    <>
      <ViewportProvider>
        <Nav />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Featured Products
          </h1>
          <div
            style={{
              fontSize: "1.5rem",
              marginBottom: "20px",
            }}
          >
            Explore and discover a variety of products
          </div>
        </div>
        <Carousel />
      </ViewportProvider>
    </>
  );
}

export default App;
