import React from 'react';
import './index.css'; // You can create this CSS file to style your page

const IndexPage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to my page!</h1>
        <p>Explore my links below:</p>
      </header>
      <main className="main">
        <div className="links-container">
          <a href="https://example.com" className="link-item">
            Example Website
          </a>
          <a href="https://github.com" className="link-item">
            GitHub Profile
          </a>
          <a href="https://twitter.com" className="link-item">
            Twitter Profile
          </a>
          {/* Add more links as needed */}
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 Your Name</p>
      </footer>
    </div>
  );
};

export default IndexPage;
