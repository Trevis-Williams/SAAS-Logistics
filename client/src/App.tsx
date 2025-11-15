// !!!!THIS IS THE MAIN APP!!!! THIS SHOULD REMIAN RELATIVILY SHORT AT ALL TIMES. ONLY PUT COMPNETS IN THE HTML. IF SOMETHING NEW IS NEEDED CREATE A COMPONET 
// DO NOT ADD TO HTML. !!!THANK YOU!!!


import { useState } from 'react'
import './style/App.css'
import Header from'./components/Header' //Links the Header.jsx file. No idea why this is showing red as it works. Will troubleshoot later. Will make an issue for this. 
function App() {
  

  return (
    <>
       <Header /> {/* Calling the Header componet and placing it above the other componets */}
      <div>
       <h1>Summary of what the app with do. For now lorem ipsum, </h1>
      </div>
      
     
    </>
  )
}

export default App
