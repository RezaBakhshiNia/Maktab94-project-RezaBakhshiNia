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
    <div className="uploader-container">
      <input type="file" multiple onChange={handleFileChange} />
      <div className="uploader-gallery">
        {selectedFiles.map((file) => (
          <div key={file.id} className="gallery-photo">
            <img src={file.preview} alt={file.name} />
            <i
              className="bi bi-x-lg"
              onClick={() => handleRemoveFile(file.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
