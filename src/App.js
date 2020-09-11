import React from "react";
import "./App.css";
import { ElevatedHeader, Logo } from "./components/Atoms";
import { LoginForm } from "./components/Organisms";

function App() {
    return (
        <div className='App'>
            <ElevatedHeader LeftElement={<Logo />} />

            <div className='App-body'>
                <LoginForm />
            </div>
        </div>
    );
}

export default App;
