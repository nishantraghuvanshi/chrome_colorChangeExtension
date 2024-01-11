import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('#000000');

  const onClick = async () => {
    let [tab] = await chrome.tabs.query({active:true});
    chrome.scripting.executeScript<string[],void>({
      target: {tabId: tab.id!},
      args: [color],
      func: (color) => {
        document.body.style.backgroundColor = color;
      }
    });

  }

  return (
    <>
      <h1>Color Changer</h1>
      <div className="card">
        <input type='color' 
        onChange={(e)=>{setColor(e.currentTarget.value)}}
        value={color} />
        <button onClick={onClick}>
          Click Me
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
