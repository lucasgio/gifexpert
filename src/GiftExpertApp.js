import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGridd from "./components/GifGridd";

function GiftExpertApp() {
  const [categories, setCategories] = useState([]);
  return (
    <div>
      <header id="gifexpert">
        {/* Fixed navbar */}
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#gifexpert">
              <img
                src="./assets/logo128.png"
                alt=""
                width="32"
                height="32"
                id="logo"
                className="d-inline-block align-text-top"
              />
              GiftExpertApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
              <AddCategory setCategories={setCategories} />
            </div>
          </div>
        </nav>
      </header>
      {/* Begin page content */}
      <main className="flex-shrink-0">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Search your favorite giff</h1>
          </div>
        </div>
        <div className="container-fluid">
          <ul>
            {categories.map((category) => {
              return <GifGridd key={category} category={category} />;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default GiftExpertApp;
