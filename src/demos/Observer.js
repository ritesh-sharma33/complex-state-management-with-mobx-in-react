import React, { useState } from "react";
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";

var techObs = observable({ techName: "React" });

// Action using the action function
const changeTech = action(techName => {
  techObs.techName = techName;
});

// The observer HOC can be used with hooks based components
const TechElement = observer(({ techData }) => (
  <span>{techData.techName}</span>
));

export default function App() {
  const [techText, setTechText] = useState("");
  return (
    <div>
      <input onChange={e => setTechText(e.target.value)} type="text" />
      <br /><br />
      <button onClick={() => changeTech(techText)}>Change Tech</button>
      <br /><br />
      <TechElement techData={techObs} />
    </div>
  );
}

// Alternatively, we can use the @observer for class based components
@observer
class App extends React.Component {
  render() {  } 
}