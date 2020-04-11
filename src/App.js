import React from 'react';
import './styles/App.css';
import { ConsultationPage } from "./pages";
import { Header } from "./commons";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="flex-container">
                <ConsultationPage/>
            </div>
        </div>
    );
}

export default App;
