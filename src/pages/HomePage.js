import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our App</h1>
      <p style={styles.subtitle}>Choose an action to get started:</p>
      <div style={styles.buttonContainer}>
        <Link to="/login" style={styles.button}>
          Login
        </Link>
        <Link to="/posts" style={styles.button}>
          View Posts
        </Link>
        <Link to="/add-post" style={styles.button}>
          Add New Post
        </Link>
        <Link to="/search" style={styles.button}>
          Search Posts
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default HomePage;
