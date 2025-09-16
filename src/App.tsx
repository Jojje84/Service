import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portal from "./pages/Portal";
import Navbar from "./pages/components/Navbar";
import styled from "styled-components";

const Page = styled.div`
  margin: 2rem;
`;

function App() {
  return (
    <>
      <Page>
        <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portal" element={<Portal />} />

      </Routes>
      </Page>
    </>
  );
}

export default App;
