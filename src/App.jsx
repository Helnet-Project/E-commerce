import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
