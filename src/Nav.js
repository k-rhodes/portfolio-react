import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/contact/">CONTACT</Link>
          </li>
          <li>
            <Link to="/resume/">RESUME</Link>
          </li>
          <li>
            <Link to="/projects/">PROJECTS</Link>
          </li>
        </ul>
      </div>
    );
  }
}
