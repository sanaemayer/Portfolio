import React, { useEffect } from "react";
import "./styles/styles.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
