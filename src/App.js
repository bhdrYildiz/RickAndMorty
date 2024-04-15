import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";
import { Provider } from "react-redux";
import store from "./store";
import Favorites from "./components/Favorites/favorites";

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardDetails />} />

      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episodes/:id" element={<CardDetails />} />

      <Route path="/location" element={<Location />} />
      <Route path="/location/:id" element={<CardDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Router>
  </Provider>
  );
}

export default App;
