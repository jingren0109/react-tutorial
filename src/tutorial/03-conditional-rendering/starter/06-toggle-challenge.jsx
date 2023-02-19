import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setShowAlert(!showAlert);
        }}
      >
        toggle alert
      </button>
      {showAlert && <Alert></Alert>}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello You</div>;
};

export default ToggleChallenge;
