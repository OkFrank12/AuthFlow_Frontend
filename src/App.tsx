import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Router/MainRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Store } from "./Global/Store";
import { Provider } from "react-redux";

const persistor = persistStore(Store);

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={MainRoute} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
