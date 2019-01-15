import React from "react";
import { Link } from "react-router-dom";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div>
          <a
            className="project-link"
            href="https://fierce-falls-43276.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CRUD SPA
          </a>
        </div>
        <div>
          <Link className="project-link" to="">
            NETFLIX CLONE
          </Link>
        </div>
        <div>
          <a
            className="project-link"
            href="https://k-rhodes.github.io/fetch-itunes-api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iTUNES API SEARCH
          </a>
        </div>
      </div>
    );
  }
}
