
//import Data from './Mock-data.json';
import './App.css';
import React from "react"
import Articles from "./Components/Article";

function App() {

  const Data = require('./Mock-data.json');
  //console.log(Data.Articles);

  const dataArray = Data.Articles.map(function(x){
    return (<Articles Name = {x.Name} Article={x.Number} Email={x.Email} Content={x.Content} />)
  })

  return dataArray
}

//<Articles Name = "Anurag" Article="12341234" Email="something" Content="somethig somethigng"  />
 //   <Articles Name = "Panwar" Article="12341234" Email="something 2222" Content="somethig somethigng222"  />
 //   <Articles Name = "bleh" Article="12341234" Email="something 333" Content="somethig somethigng 33"  />
    
export default App;
