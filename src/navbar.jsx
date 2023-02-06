import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Navbar() {
  return (<>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Writing Wonder</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://syedamaan.vercel.app/">Owner</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://syedamaan.vercel.app/about">About Me</a>
      </li>
      
    </ul>
  </div>
</nav>

  
  </>)
}

export default Navbar;
