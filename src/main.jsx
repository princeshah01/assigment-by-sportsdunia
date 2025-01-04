import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import "./index.css";


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-jtuzd8pvf58nh5r7.us.auth0.com"
    clientId="eTWVRzedTUA5U2Q9xXowGph0A7Mj0JtF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App/>
  </Auth0Provider>,
);

