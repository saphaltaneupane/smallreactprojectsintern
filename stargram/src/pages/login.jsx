import React from "react";
import { useAuthStore } from "../stores/authStore";
import { useState } from "react";
export const Login = () => {
  const login = useAuthStore((state) => state.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const ok = login(username, password);
    if (!ok) setError("Invalid username or password");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 8,
            background: "black",
            color: "white",
          }}
        >
          Login
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
