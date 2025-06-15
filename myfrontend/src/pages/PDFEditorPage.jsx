import React, { useState } from 'react';
import PDFEditor from '../components/PDFEditor';
import '../styles/PDFEditorPage.css';

const PDFEditorPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [inputMethod, setInputMethod] = useState('file'); // 'file' or 'url'
  const [error, setError] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        console.log('Selected file:', file.name, 'Size:', file.size, 'Type:', file.type);
        setSelectedFile(file);
        setPdfUrl(''); // Clear URL when file is selected
        setError(null);
      } else {
        setError('Please select a valid PDF file');
        console.error('Invalid file type:', file.type);
      }
    }
  };

  const handleUrlSubmit = (event) => {
    event.preventDefault();
    if (pdfUrl) {
      console.log('Loading PDF from URL:', pdfUrl);
      setSelectedFile(null); // Clear file when URL is used
      setError(null);
    }
  };

  return (
    <div className="pdf-editor-page">
      <div className="pdf-editor-header">
        <h1>PDF Editor</h1>
        <div className="input-method-selector">
          <button
            className={`method-button ${inputMethod === 'file' ? 'active' : ''}`}
            onClick={() => setInputMethod('file')}
          >
            Upload File
          </button>
          <button
            className={`method-button ${inputMethod === 'url' ? 'active' : ''}`}
            onClick={() => setInputMethod('url')}
          >
            Enter URL
          </button>
        </div>
        <div className="input-container">
          {inputMethod === 'file' ? (
            <div className="file-upload">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                id="pdf-file-input"
                className="file-input"
              />
              <label htmlFor="pdf-file-input" className="file-input-label">
                {selectedFile ? 'Change PDF' : 'Upload PDF'}
              </label>
              {selectedFile && (
                <span className="selected-file-name">{selectedFile.name}</span>
              )}
            </div>
          ) : (
            <form onSubmit={handleUrlSubmit} className="url-input-form">
              <input
                type="url"
                value={pdfUrl}
                onChange={(e) => setPdfUrl(e.target.value)}
                placeholder="Enter PDF URL"
                className="url-input"
              />
              <button type="submit" className="url-submit-button">
                Load PDF
              </button>
            </form>
          )}
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="pdf-editor-container">
        {selectedFile || pdfUrl ? (
          <PDFEditor file={selectedFile} url={pdfUrl} />
        ) : (
          <div className="no-file-selected">
            <h2>No PDF Selected</h2>
            <p>Please upload a PDF file or enter a PDF URL to start editing</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFEditorPage; 