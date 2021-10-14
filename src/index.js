import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import client from "./graphql/client";
import { ApolloProvider } from "@apollo/client";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <ApolloProvider client={client}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </ApolloProvider>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
