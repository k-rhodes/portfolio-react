import React from "react";
import { Link } from "react-router-dom";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div>
          <Link className="project-link" to="">
            CRUD SPA
          </Link>
        </div>
        <div>
          <Link className="project-link" to="">
            NETFLIX CLONE
          </Link>
        </div>
        <div>
          <Link className="project-link" to="">
            ITUNES
          </Link>
        </div>
      </div>
    );
  }
}
