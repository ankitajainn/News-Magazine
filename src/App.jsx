import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";

import { useState,useEffect } from 'react';


const App = () => {

  const [category, setCategory] = useState("general");
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <Newsboard category={category}/>
      
    </div>
  );
}

export default App;
