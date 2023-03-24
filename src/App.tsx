import { useState, FC, useEffect } from "react";
import logo from "./Assets/logo-on-dark.png";
import "./App.css";

const App: FC = (): JSX.Element => {
  const [user, setUser] = useState("");
  const AUTH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjc5NjYzNDQ1LCJzdWIiOiIzMzgwZjE0ZC0yODIxLTQ2ZDgtYTdjZi0wZGRmMmU4YzFkYjYiLCJlbWFpbCI6InZhaXNobmF2Z2hlbmdlQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZ2l0aHViIiwicHJvdmlkZXJzIjpbImdpdGh1YiJdfSwidXNlcl9tZXRhZGF0YSI6eyJhdmF0YXJfdXJsIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzYyNDU5OTgzP3Y9NCIsImVtYWlsIjoidmFpc2huYXZnaGVuZ2VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IlZhaXNobmF2IEdoZW5nZSIsImlzcyI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20iLCJuYW1lIjoiVmFpc2huYXYgR2hlbmdlIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiVmFpc2huYXZHaGVuZ2UiLCJwcm92aWRlcl9pZCI6IjYyNDU5OTgzIiwic3ViIjoiNjI0NTk5ODMiLCJ1c2VyX25hbWUiOiJWYWlzaG5hdkdoZW5nZSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNjc5NjU2MjQ1fV0sInNlc3Npb25faWQiOiI5NDczODk3Zi1hNDI2LTQ4MWUtYTc5Ny03ZGRiZGE2YjUyODkifQ.r14OtszmpXguygsWVA3HQSCAVPqgHtU6p4PlCD9DFxQ";
  useEffect(() => {
    const response = fetch("https://api.opensauced.pizza/v1/auth/session", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    response
      .then((res) => res.json())
      .then((data) => setUser(data.user_name))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h3>OpenSauced Browser Extension</h3>
      {user != "" && <p>You are logged-in as <span className="user">{user}</span></p>}
      <img className="logo" src={logo} alt="open sauced logo" />
    </div>
  );
};

export default App;
