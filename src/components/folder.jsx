import { StrictMode } from 'react';
import { useState } from 'react';
function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if(e.keyCode === 13 && e.target.value){
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({...showInput,visible:false});
    }
  }
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <button
            className="primary-Button"
            onClick={(e) => handleNewFolder(e, true)}
          >
            Folder Add +
          </button>
          <button
            className="primary-Button"
            onClick={(e) => handleNewFolder(e, false)}
          >
            File Add +
          </button>
        </div>
        <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? '📁' : '📄'}</span>
              <input
                className="inputContainer__input"
                onKeyDown={onAddFolder}
                autoFocus
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}
export default Folder;
