import "./App.css";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibilities,
  WhatGPT3,
} from "./containers";
import { CTA, NavBar, Brand } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
