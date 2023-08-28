//import logo from './assets/logos/logo.svg';
import React, {createContext} from 'react';
import './App.css';
import Splash from './Splash'
import HeaderBar from './HeaderBar'
import Main from './Main'
import {SessionContext} from './SessionContext'

function App() {

    const surgeonList = ["Dr. Oertli", "Cpt. Kanter", "Pete Pizol", "Steve Säntis", "Bubba", "Billy"]
    const surgeryList = ["Cataract Chop", "Vitrectomy", "Glaucoma"]
    const [showSplash, setShowSplash] = React.useState(true)
    const [showHeaderAndMain, setShowHeaderAndMain] = React.useState(false)
    const [activeSurgeonUser, setActiveSurgeonUser] = React.useState("")
    const [activeSurgeryType, setActiveSurgeryType] = React.useState("")

    function setDatUser(user)  {
        setActiveSurgeonUser(activeSurgeonUser => user)
    }

    const contextData = {
        surgeon: activeSurgeonUser,
        surgery: activeSurgeryType
    }

    function turnOffSplash() {
        setShowSplash(false);
        setShowHeaderAndMain(true);
    }

    const session = {
        surgeonList,
        surgeryList,
        activeSurgeonUser,
        setActiveSurgeonUser,
        activeSurgeryType,
        setActiveSurgeryType,
    }

    return (
        <SessionContext.Provider value={session}>
        <div className="App">
            {showSplash && <Splash turnOff={turnOffSplash} />}
            {showHeaderAndMain && <HeaderBar />}
            {showHeaderAndMain && <Main surgeon={activeSurgeonUser} surgery={activeSurgeryType}/>}
        </div>
        </SessionContext.Provider>
    );
}

export default App;
