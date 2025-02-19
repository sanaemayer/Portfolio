import React, { useEffect } from "react";
import "./styles/global.scss";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Sanae Mayer";
  }, []);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
