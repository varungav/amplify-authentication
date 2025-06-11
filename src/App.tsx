import { useState } from 'react';
import './App.css';

function App() {
  const [fileChanged, setFileChanged] = useState(false);

  const handleFileChange = (e) => {
    setFileChanged(true);
    console.log('Selected file:', e.target.files[0]);
  };

  return (
    <div className="flex justify-center pt-[25%]">
      <input
        type="file"
        placeholder="Please put your file here"
        onChange={handleFileChange}
        className="border p-2"
      />
      {fileChanged && <p className="ml-4 text-green-600">File selected!</p>}
    </div>
  );
}

export default App;
