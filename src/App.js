import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/base/Footer";
import Navbar from "./components/base/Navbar";
import { routes } from "./routes";

function App() {

  const theme = useSelector(state => state.theme)

  document.body.style.backgroundColor = theme ? "#d4d7c912" : "black";
  document.body.style.color = theme ? "black" : "white";

  return (
    <div>
      <Navbar />
      <Routes>
        {
          routes.map((item,index) => 
          <Route key={index} path={item.pathname} element={<item.element />} />)
        }
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
