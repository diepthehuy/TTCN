import { useState,useEffect } from "react";
function App() {
      const user ={"username": "walt12","password": "Aa$12345"};
      const login =async () =>{
        try{
          const reponse = await fetch("http://localhost:3500/auth",{
          method: 'POST',
          headers:{'Content-Type':'application/json'},
          credentials: 'include',
          body: JSON.stringify(user)
          
        });
          const result = reponse.data;
          console.log(result);
        }catch(err){
          console.log(err.message);
        }
      }
  return (
    <div>
      <p>Ambatukam</p>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
