import { useState, useCallback, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let [pass, setpass] = useState();
  let [len, setlen] = useState(7);
  let [number, setnum] = useState(false);
  let [character, setchar] = useState(false);

  const passgen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZqwertyuioplkjhgfdsazxcvbnm";
    let passw = "";
    if (number) str += "1234567890";
    if (character) str += "!@#$%^&*()_+-";
    for (let i = 0; i < len; i++) {
      let ch = str.charAt(Math.random() * str.length);
      passw += ch;
      setpass(passw);
    }
  }, [character, len, number]);

  const Num = useCallback(() => {
    setnum(!number);
  }, [number]);

  const Ch = useCallback(() => {
    setchar(!character);
  }, [character]);

  const handleradio = useCallback(
    (event) => {
      setlen(event.target.value);
    },
    [setlen]
  );

  useEffect(() => {
    passgen();
  }, [passgen, setpass]);
  const handle = (e) => {
    setpass(e.target.value);
  };

  const passref = useRef(null);
  const copy = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <>
      <div className="container mt-5 p-2">
        <h1 className="mb-3 text-primary">Password Generator</h1>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <input
              type="text"
              className="form-control h-100"
              value={pass}
              onChange={handle}
              ref={passref}
              placeholder="password"
              readOnly
            />
          </div>
          <div className="col-md-3">
            <button onClick={copy} className="btn btn-primary w-100 h-100">
              Copy
            </button>
          </div>
          <div className="col-md-3">
            <button onClick={passgen} className="btn btn-secondary w-100 h-100">
              Gen
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <input
              type="range"
              className="w-100 h-100"
              min={5}
              max={10}
              step={1}
              value={len}
              onChange={handleradio}
            ></input>
          </div>
          <div className="col-md-4">
            <button
              className={`w-100 ${number ? "btn btn-primary" : "btn"}`}
              onClick={Num}
            >
              Number
            </button>
          </div>
          <div className="col-md-4">
            <button
              className={`w-100 ${character ? "btn btn-primary" : "btn"}`}
              onClick={Ch}
            >
              Characters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
