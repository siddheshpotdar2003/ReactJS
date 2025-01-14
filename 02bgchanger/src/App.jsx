import { useState } from "react";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div className={`bg-${color}-500 w-screen h-screen`}>
      <div className="absolute bg-white bottom-20 left-20 w-max border-black border-2 rounded-sm px-2 py-1 ">
        <Button btnColor={"purple"} setColor={setColor} />
        <Button btnColor={"blue"} setColor={setColor} />
        <Button btnColor={"green"} setColor={setColor} />
        <Button btnColor={"orange"} setColor={setColor} />
        <Button btnColor={"yellow"} setColor={setColor} />
        <Button btnColor={"pink"} setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
