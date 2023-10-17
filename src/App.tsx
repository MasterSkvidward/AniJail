import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss";
import { useDispatch } from "react-redux";
import { GlobalActionCreators } from "./store/reducers/global/action-creatores";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    if ((theme === "dark") || (theme === "light")) dispatch(GlobalActionCreators.setTheme(theme));
  });

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
