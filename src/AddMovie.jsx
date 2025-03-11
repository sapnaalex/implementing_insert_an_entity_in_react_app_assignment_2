import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-movie">
      <h2>Add a New Movie</h2>
      <form>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="director" placeholder="Director" onChange={handleChange} />
        <select name="genre" onChange={handleChange}>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange} />
        <input type="url" name="posterUrl" placeholder="Poster Image URL" onChange={handleChange} />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
