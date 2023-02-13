import {useState} from "react";
import reactLogo from "./assets/react.svg";
import {invoke} from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // ?Arguments can be of any type, as long as they implement serde::Deserialize.
        // ?Arguments should be passed as a JSON object with camelCase keys:
        setGreetMsg(await invoke("greet", {name}));
        // ?The invoke function returns a promise that resolves with the returned value.
        // ?Returned data can be of any type, as long as it implements serde::Serialize.
    }

    return (
        <div className="container">
            <h1>Welcome to Tauri!</h1>

            <div className="row">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo vite" alt="Vite logo"/>
                </a>
                <a href="https://tauri.app" target="_blank">
                    <img src="/tauri.svg" className="logo tauri" alt="Tauri logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>

            <p>Click on the Tauri, Vite, and React logos to learn more.</p>

            <div className="row">
                <div>
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="Enter a name..."
                    />
                    <button type="button" onClick={() => greet()}>
                        Greet
                    </button>
                </div>
            </div>

            <p>{greetMsg}</p>
        </div>
    );
}

export default App;
