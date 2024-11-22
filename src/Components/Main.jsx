import React from 'react';
import { Container } from "react-bootstrap";


const Main = (props) => {
    if (props.video == null)
        return (
            <h1 style={{ textAlign: 'center', marginTop: '20px', color: '#555' }}>Loading...</h1>
        );

        //videosource 
    const videosrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
        <Container style={{ maxWidth: '800px', margin: 'auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <iframe
                src={videosrc}
                title={props.video.snippet.title}
                style={{ width: '100%', height: '400px', borderRadius: '10px', border: 'none' }}
                allowFullScreen
            />
            <h5 style={{ marginTop: '15px', fontSize: '1.5rem', color: '#333', fontWeight: 'bold' }}>
                {props.video.snippet.title}
            </h5>
            <h6 style={{ marginTop: '10px', fontSize: '1.2rem', color: '#555' }}>Description:</h6>
            <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }}>
                {props.video.snippet.description}
            </p>
        </Container>
    );
};

export default Main;
