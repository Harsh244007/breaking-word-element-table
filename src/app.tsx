import { memo } from "preact/compat";
import BreakingLogo from "./components/BreakingLogo";
import { useState, useEffect } from "preact/hooks";
import Breakify from "./helpers/Breakify";
const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [first, setFirst] = useState(["", "", ""]);
  const [last, setLast] = useState(["", "", ""]);

  useEffect(() => {
    setFirst(Breakify(firstName));
  }, [firstName]);

  useEffect(() => {
    setLast(Breakify(lastName));
  }, [lastName]);

  const handleFirstNameChange = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setFirstName(e.target.value);
    }
  };

  const handleLastNameChange = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setLastName(e.target.value);
    }
  };
  return (
    <div className="app">
      <p className="mx-5">Enter any name in this box</p>
      <p className="mx-5">It would highlight elements name from it.</p>

      <div className="content">
        <BreakingLogo result={first} />
        <BreakingLogo result={last} />
        <div className="row">
          <div className="col">
            <label>First Name</label>
            <input onChange={handleFirstNameChange} value={firstName} />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input onChange={handleLastNameChange} value={lastName} />
          </div>
        </div>
        <button>Breakify</button>
      </div>

      <p className="mt-5">Made by Harsh with ❤️</p>
    </div>
  );
};
export default memo(App);
