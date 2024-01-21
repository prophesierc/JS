import App from './components/App';
import './styles/global.css'
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';

//const reactContentRoot = document.getElementById("root"); -- This is deprecated - root.render is the most modern version
//const root = createRoot(document.getElementById("root"));
//root.render(App());

ReactDOM.render(<App />, document.getElementById('root')); // deprecated, but necessary for tutorial rn
