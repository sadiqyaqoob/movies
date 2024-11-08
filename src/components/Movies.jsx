import React, { useState } from "react";
import { movies } from "./data.js";
const Movies = () => {
  const [movielist, setmovielist] = useState(movies);

  const filterByCategory = (cat) =>{
    setmovielist(movies.filter((data)=>data.category==cat))
  } 
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="my-3">
          <button type="button"  onClick={()=>setmovielist(movies)} className="btn btn-outline-primary mx-3">
            ALL
          </button>
          <button type="button" onClick={()=>filterByCategory("Action")}  className="btn btn-outline-primary mx-3">
            ACTION
          </button>
          <button type="button" onClick={()=>filterByCategory("Thirller")}  className="btn btn-outline-light mx-3">
            THIRLLER
          </button>
          <button type="button" onClick={()=>filterByCategory("Animation")}  className="btn btn-outline-danger mx-3">
            ANIMATION
          </button>
          <button type="button" onClick={()=>filterByCategory("Horror")}  className="btn btn-outline-warning mx-3">
            HORROR
          </button>
          <button type="button" onClick={()=>filterByCategory("Drama")}  className="btn btn-outline-info mx-3">
            DRAMA
          </button>
          <button type="button" onClick={()=>filterByCategory("Sci-Fi")}  className="btn btn-outline-light mx-3">
            SCI-FI
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            textAlign: "center",
            width: "1200px",
            margin: "auto",
            marginTop: "1.5rem",
          }}
        >
          {movielist.map((data) => (
            <div
              key={data.id}
              style={{
                maxWidth: "250px",
              }}
            >
              <div
                style={{ padding: "14px", height: "280px" }}
                className="hover_effect"
              >
                <img
                  src={data.poster_path}
                  alt=""
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    border: "1px solid yellow",
                  }}
                />
              </div>
              <h5 style={{ paddingTop: "20px" }}>{data.title}</h5>
              <p>{data.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
