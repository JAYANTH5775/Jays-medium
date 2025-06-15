import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "./Navbar";



function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = async () => {
    await addDoc(collection(db, "articles"), {
      title,
      content, // This will now be rich text HTML
      author: "jayanth.siddalingappa@gmail.com",
      timestamp: serverTimestamp(),
    });

    setTitle("");
    setContent("");
    alert("Article posted!");
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <div className="mb-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="form-control"
        />
      </div>

    <div className="mb-3">
    <textarea
      value={content}
      onChange={e => setContent(e.target.value)}
      placeholder="Write..."
      className="form-control"
      rows={10}
    />
  </div>

      <div className="d-flex justify-content-center">
        <button
          onClick={handlePost}
          className="btn btn-primary btn-lg px-4"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default Editor;
