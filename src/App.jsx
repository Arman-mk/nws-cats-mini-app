import './App.scss'
import {Provider} from "react-redux";
import store from "./store/store.js";
import Routing from "./routes/Routing.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routing/>
            </Provider>
        </BrowserRouter>
    )
}

export default App
