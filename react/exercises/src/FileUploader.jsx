import { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt="uploaded image" />}
    </div>
  );
};

export default FileUploader;
