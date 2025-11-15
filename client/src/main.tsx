import { StrictMode } from 'react' // Allowsd us to use <StrictMode> </StrictMode> without we could use the back errow to navigate
import { createRoot } from 'react-dom/client' // Makes a root and renders our app
import './index.css' // Links index.css to this file
import App from './App.tsx' // Links app.tsx to this file

//document.getElementById('root') → Finds the <div id="root"></div> inside index.html. The ! is a non-null assertion. It tells TypeScript: “Trust me this element exists.”
//createRoot() creates the React "root" where the entire app will render.

createRoot(document.getElementById('root')!).render(
 //This enables StrictMode, helps catch state bugs, ,detects unsafe lifecycle methods, Renders your <App /> component
// Everything inside App becomes your application UI in the browser.
  <StrictMode>
    <App />
  </StrictMode>,
)
