// Importing the StrictMode component from React, which helps identify potential problems in the application.
import { StrictMode } from "react";

// Importing the createRoot function from the react-dom/client package, which is used to create a root for rendering.
import { createRoot } from "react-dom/client";

// Importing the main App component from the local file App.js.
import App from "././App";

// Importing the CSS file for styling the application.
import "./index.css";

// Creating a root for rendering the React application in the DOM element with the id 'root'.
// The exclamation mark after 'getElementById' is a TypeScript non-null assertion operator,
// indicating that the developer is sure that this element exists.
createRoot(document.getElementById("root")!).render(
  // Wrapping the App component in StrictMode to enable additional checks and warnings for its descendants.
  <StrictMode>
    {/* Rendering the main App component, which is the entry point of the application. */}
    <App />
  </StrictMode>
);
