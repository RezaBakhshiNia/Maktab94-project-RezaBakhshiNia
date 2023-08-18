import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import the Quill CSS

const TextEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = new Quill(editorRef.current, {
        theme: "snow", // Set the theme to 'snow' for the default Quill toolbar and styles
        // Additional options...
      });

      // Optional: Add event listeners or further customization
      // Example:
      // editor.on('text-change', (delta, oldDelta, source) => {
      //   console.log('Text changed:', editor.getText());
      // });

      // Cleanup: Destroy the editor instance when the component unmounts
      return () => {
        editor.off("text-change");
        editor.destroy();
      };
    }
  }, []);

  return <div ref={editorRef} />;
};

export default TextEditor;
