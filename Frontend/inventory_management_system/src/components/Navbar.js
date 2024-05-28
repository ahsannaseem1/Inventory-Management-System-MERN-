import React from 'react';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link text-white fs-5" href="/">{props.title}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-5" href="/products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-5" href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
