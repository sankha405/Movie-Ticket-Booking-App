import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [message, setMessage] = useState("");

  // Read Backend URL from Kubernetes ConfigMap
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/movies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [API_BASE_URL]);

  const bookTicket = async () => {
    if (!selectedMovie) {
      alert("Please select a movie");
      return;
    }

    if (!customerName.trim()) {
      alert("Please enter your name");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/bookings`, {
        customer_name: customerName,
        movie_id: selectedMovie.id,
      });

      setMessage(response.data.message);
      setCustomerName("");
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    }
  };

  return (
    <div className="App">
      <h1>{process.env.REACT_APP_NAME}</h1>

      <p>
        <strong>Environment:</strong>{" "}
        {process.env.REACT_APP_ENVIRONMENT}
      </p>

      <h2>Available Movies</h2>

      {movies.length === 0 ? (
        <p>Loading movies...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <input
                type="radio"
                name="movie"
                onChange={() => setSelectedMovie(movie)}
              />
              <strong>{movie.title}</strong> ({movie.language}) - ₹
              {movie.ticket_price}
            </li>
          ))}
        </ul>
      )}

      <br />

      <input
        type="text"
        placeholder="Enter Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <br />
      <br />

      <button onClick={bookTicket}>
        Book Ticket
      </button>

      <br />
      <br />

      {message && (
        <h3 style={{ color: "green" }}>
          {message}
        </h3>
      )}
    </div>
  );
}

export default App;