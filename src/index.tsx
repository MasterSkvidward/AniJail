import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { ConfigProvider } from "antd";
import { sliderToken } from "./utils/antdTokens";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <Provider store={store}>
      <BrowserRouter>
         <ConfigProvider theme={{components: 
            {Slider: sliderToken}
            }}>
            <App />
         </ConfigProvider>
      </BrowserRouter>
   </Provider>
);
