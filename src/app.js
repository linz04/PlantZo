import React from "react";

import Popup from "./components/Popup";
import Signup from "./components/Signup";

const App = () => (
  <div className="flex flex-col items-center justify-center p-44 h-full">
    <h1 className="text-2xl">Testing Popup</h1>
    <Popup trigger={true}>
      <Signup />
    </Popup>
  </div>
);

export default App;
