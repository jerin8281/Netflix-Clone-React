import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { actionUrl, comedyUrl, documentariesUrl, horrorUrl, orginalsUrl, romanceUrl } from "./Url/Url";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Orginals' url={orginalsUrl} />
      <RowPost title='Action' isSmall url={actionUrl} />
      <RowPost title='Romance' isSmall url={romanceUrl} />
      <RowPost title='Comedy' isSmall url={comedyUrl} />
      <RowPost title='Horror' isSmall url={horrorUrl} />
      <RowPost title='Documentaries' isSmall url={documentariesUrl} />
    </div>
    
  );
}

export default App;
