import { useState } from "react";

const LoginRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [users, setUsers] = useState([]);

  const handleAuthentication = (e) => {
    e.preventDefault();
    if (isRegistered) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setIsLogin(true);
      } else {
        alert("Invalid credentials");
      }
    } else {
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify(users));
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      {isLogin ? (
        <div>
          <h1>Welcome back! {email}</h1>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <div>
          <h1>{isRegistered ? "Please login." : "Please register."}</h1>
        </div>
      )}
      <form>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleAuthentication}>
          {isRegistered ? "Login" : "Register"}
        </button>
      </form>

      <p>
        {isRegistered
          ? "You are registered. Please login."
          : "You are not registered. Please register."}
      </p>

      <button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? "Login" : "Register"}
      </button>
    </div>
  );
};

export default LoginRegistration;
