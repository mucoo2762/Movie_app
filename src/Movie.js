import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Movie.css';
import LinesEllipsis from "react-lines-ellipsis";


// ==================================================================
Movie.prototype = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date_uploaded: PropTypes.string.isRequired
};

MoviePoster.prototype = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}; 


MovieGenres.prototype = {
    genres: PropTypes.string.isRequired
};


// ====================================================================
function Movie({index, title, poster, genres, synopsis, year, rating, date_uploaded}){
    return(
        <div className="Movie">
            <div className="movieNumberDiv">
                <span>{index + 1}</span>
            </div>
            <div className="moviePosterDiv">
                <MoviePoster poster={poster} alt={title}/>
                <span>rating : {rating}</span>
            </div>
            <div className="movieTextDiv">
                <h1>{title} ({year})</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => {
                        return <MovieGenres genre={genre} key={index}/>
                    })}
                </div>
                {/* <span className="movieDataUploaded">date_uploaded : {date_uploaded}</span> */}
                <div className="Movie_synopsis">
                    {synopsis}
                    {/* <LinesEllipsis 
                        text={synopsis}
                        maxLine="3"
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                    /> */}
                </div>
                <span className="Movie_synopsis_span">...</span>
            </div>
        </div>
    );
};

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    );
}

function MovieGenres({genre, index}){
    return (
        <span className="Movie_Genre">{genre}</span>
    );
}

// ===================================================================

export default Movie