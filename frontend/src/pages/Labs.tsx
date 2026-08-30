import { Link } from "react-router-dom";

export function Labs() {
  return (
    <section>
      <h1>Labs</h1>
      <p>Small experiments and interactive web ideas.</p>

      <ul>
        <li>
          <Link to="/labs/three">Three.js experiment</Link>
        </li>
      </ul>
    </section>
  );
}