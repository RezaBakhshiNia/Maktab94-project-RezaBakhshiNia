import { useState } from "react";

const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: Date.now(),
        })
      ),
    ]);
  };

  const handleRemoveFile = (id) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((file) => file.id !== id)
    );
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {selectedFiles.map((file) => (
          <div key={file.id}>
            <img src={file.preview} alt={file.name} />
            <button onClick={() => handleRemoveFile(file.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
