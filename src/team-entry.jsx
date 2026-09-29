import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TeamPage from "./TeamPage.jsx";
import "./styles.css";
import "./team.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TeamPage />
  </StrictMode>,
);
