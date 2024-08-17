import React from 'react';
import ReactDOM from 'react-dom';
import Examplerender from './components/useEffect';
import Userdemo from './components/apifetching';
function Main(){
  return(
    <div>
      <Examplerender />
      <Userdemo />
    </div>
  )
}
ReactDOM.render(<Main />, document.getElementById("root"));