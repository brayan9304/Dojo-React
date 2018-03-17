import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.css';//luego de importar ya se puede usar todas las clases
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));//se va ir donde esta el id root y ahí va dibujar nuestro componente react
registerServiceWorker();
