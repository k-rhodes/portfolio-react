import React from "react";

export default class Contact extends React.Component {
  render() {
    const email = encodeURIComponent("mailto:rhodestraveler@gmail.com");
    return (
      <div className="contact">
        <div>
          <a href={email} className="email">
            <div>rhodestraveler@gmail.com</div>
          </a>
        </div>
      </div>
    );
  }
}
