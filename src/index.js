import './index.scss';
import store from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree)

