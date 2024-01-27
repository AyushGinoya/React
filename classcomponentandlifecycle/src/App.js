import "./App.css";
import LifeCycleA from "./Components/Mounting/LifeCycleA";
import LifeCycleB from "./Components/Mounting/LifeCycleB";
import LifeCycleC from "./Components/Updating/LifeCycleC";
function App() {
  return (
    <div className="App">
      {/* <LifeCycleA></LifeCycleA> */}
      <LifeCycleC></LifeCycleC>
    </div>
  );
}

export default App;
