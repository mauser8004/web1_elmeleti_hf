import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎓 Webprogramozás 1 – React feladat</h1>
      <p>Válassz az alábbi alkalmazások közül:</p>
      <ul>
        <li>
          <Link to="/app1">📝 To-do lista alkalmazás</Link>
        </li>
        <li>
          <Link to="/app2">❓ Mini kvíz alkalmazás</Link>
        </li>
      </ul>
    </div>
  );
}
