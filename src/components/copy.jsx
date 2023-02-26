import { useState } from "react";

export const Copy = () => {
  const [text, setText] = useState("aitor.lancharro@gmail.com");
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Copy Text to Clipboard</h4>
        </div>

        <div className="card-body">
          <p className="label">Message</p>
          <textarea
            type="text"
            value={text}
            onChange={({ target }) => {
              setText(target.value);
            }}
            placeholder="Enter Message"
            className="text-area"
          />

          {isCopied ? (
            <p className="success-msg">Text copied to clipboard</p>
          ) : null}

          <button onClick={handleClick} className="btn">
            COPY
          </button>
        </div>
      </div>
    </div>
  );
};
