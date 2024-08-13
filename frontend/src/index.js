// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";

// import { Provider as AlertProvider, positions, transitions } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   transition: transitions.SCALE,
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <App />
//       </AlertProvider>
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>
);
