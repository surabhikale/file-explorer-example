import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import explorer from './data/folderData';
import Folder from './components/folder';

function App() {
  const [explorerData, setexplorerData] = useState(explorer);
  console.log(explorerData);

  return (
    <>
      <div>
        <Folder explorer={explorerData} />
      </div>
    </>
  );
}

export default App;
