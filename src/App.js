import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import routes from "./routes/routes";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TopRated from "./pages/TopRated";
import Cart from "./pages/Cart";
import Main from "./layout/Main";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        <RouterProvider router={routes} />
      </div> */}
    </Provider>

  );
}

export default App;
