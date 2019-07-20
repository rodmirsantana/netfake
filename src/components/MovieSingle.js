import React from 'react'

const MovieSingle = (props) => {
    const { image, title, desc} = props;
    return (
        <section className="movie-single" style={{
            backgroundImage: `url(${image})`
        }}>
            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </section>
    );
};

export default MovieSingle