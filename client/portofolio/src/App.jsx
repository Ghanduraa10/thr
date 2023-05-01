import { RouterProvider } from "react-router-dom";
import router from "../routers/router";
import { Provider } from "react-redux";
import store from "../reducer";

// import "./App.css";

function App() {
  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
    </>
  );
}

export default App;
