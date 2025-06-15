import axios from "axios";
import React, { useState } from "react";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const resp = await axios.post("http://127.0.0.1:8000/upload-pdf/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", resp.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="bg-black w-auto h-auto text-amber-200 p-4">
      <h1>Upload your resume</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ResumeAnalyzer;