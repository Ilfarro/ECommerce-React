import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
          <div className="container text-center">
            <small>Copyright &copy; rumahorang.web.id</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
