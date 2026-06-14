import ReactDOM from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(
    document.getElementById("root")!
).render(
    <HelmetProvider>
        <div className="grid-bg min-h-screen">
            <App />
        </div>
    </HelmetProvider>
);
