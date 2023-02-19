import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Karen" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please log in</h4>
          <button className="btn" type="button" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
