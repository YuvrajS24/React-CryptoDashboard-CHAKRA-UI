// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from "./components/ui/provider"
import {system} from "./theme/index.js" 
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider theme={system}>
      <App />
</Provider>
  
  </StrictMode>
);
