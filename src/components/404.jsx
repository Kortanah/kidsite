import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#ffffff",
        textAlign: "center",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "10rem", color: "#f94144", textShadow: "4px 4px #90be6d" }}>404</h1>
      <h2 style={{ fontSize: "3rem", color: "#f3722c", marginBottom: "20px" }}>Oops! Page Not Found</h2>
      <p style={{ fontSize: "1.5rem", color: "#577590", marginBottom: "30px" }}>
        It seems like the page you're looking for got lost in space!
      </p>
      <Link
        to="/"
        className="btn btn-primary"
        style={{
          padding: "10px 20px",
          fontSize: "1.5rem",
          backgroundColor: "#277da1",
          borderRadius: "50px",
          textDecoration: "none",
        }}
      >
        Go Back Home
      </Link>
      <img
        src="img/404-kids.png" // Example image of a kid-friendly 404 illustration
        alt="Lost in space"
        style={{ marginTop: "30px", maxWidth: "400px", width: "100%" }}
      />
    </div>

    </>
  )
}

export default NotFound