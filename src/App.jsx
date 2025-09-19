import { Provider } from "react-redux";
import LoaderProvider from "./pages/LoaderProvider";
import Router from "./Routes";
import {store} from "./store"

export default function App() {
  return (
    <Provider store={store}>
      <LoaderProvider>
          <Router/>
      </LoaderProvider>
    </Provider>
  );
}
