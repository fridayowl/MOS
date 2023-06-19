import React, { useState, useEffect, useRef } from 'react';

const TextEditor = ({ defaultData, setRisks, risks, index, type }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [labelText, setLabelText] = useState(defaultData);
  const dialogRef = useRef(null);

  const handleLabelClick = (e) => {
    e.stopPropagation();
    setOpen(true);
    setText(labelText);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveCloseClick = () => {
    setLabelText(text);
    setOpen(false);
    const updatedRisks = [...risks];
    switch (type) {
      case 'RiskOwner':
        updatedRisks[index].RiskIdentification.RiskOwner = text;
        break;
      case 'RiskStatement':
        updatedRisks[index].RiskIdentification.RiskStatement = text;
        break;
      case 'ExistingControls':
        updatedRisks[index].RiskExitingControl.ExistingControls = text;
        break;
     case 'ISO27001Mapping':
        updatedRisks[index].RiskExitingControl.ISO27001Mapping = text;
        break;
        case "PlannedControls" :
        updatedRisks[index].RiskPlannedControls.PlannedControls= text;
        break ; 
        case  "Remarks":
        updatedRisks[index].RiskMonitoring.Remarks=text
        break ;      
      default:
        break;
    }
    setRisks(updatedRisks);
  };

  const handleClickOutside = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      handleSaveCloseClick();
    }
  };

  const handleInputBlur = () => {
    handleSaveCloseClick();
  };

  useEffect(() => {
    if (open) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  return (
    <div>
      <label onClick={handleLabelClick}>{labelText}</label>

      {open && (
        <div className="dialog" ref={dialogRef}>
          <h2>{type}</h2>
          <textarea
            value={text}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
            style={{ height: 'auto' }}
          ></textarea>
          <div className="button-container">
            <button onClick={handleSaveCloseClick}>Save/Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .dialog {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #fff;
          padding: 24px;
          border: 1px solid #e0e0e0;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          width: 300px;
          max-width: 100%;
          border-radius: 4px;
          font-family: Arial, sans-serif;
        }

        .dialog textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          margin-bottom: 16px;
          font-size: 14px;
          outline: none;
          resize: vertical; /* Allow vertical resizing of textarea */
          height: auto; /* Set initial height to auto */
          overflow: auto; /* Enable vertical scrolling if needed */
        }

        .dialog .button-container {
          display: flex;
          justify-content: flex-end;
        }

        .dialog button {
          padding: 8px 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          outline: none;
        }

        .dialog button:hover {
          background-color: #0056b3;
        }

        .dialog label {
          display: block;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .dialog h2 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  );
};

export default TextEditor;
