import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#0073e6', borderRadius: '50%', right: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#0073e6', borderRadius: '50%', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'z3qu6zgemnbowzv8sp5fg3evuytv3daigetaomul'; // Replace with your actual API key
  
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/jobs&api_key=${apiKey}`, {
      headers: {
        'Content-Type': 'application/json'
        // Add other headers if required by the API
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data.items);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slideStyle = {
    padding: '10px',
    textAlign: 'center',
    width: '250px', // Reduced width
    height: '350px', // Reduced height
    boxSizing: 'border-box',
    margin: '0 auto', // Centering the slide content
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '1.2em', // Reduced font size
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '0.9em', // Reduced font size
    marginBottom: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 16px', // Reduced padding
    backgroundColor: '#0073e6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  const linkHoverStyle = {
    backgroundColor: '#005bb5',
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <Slider {...settings}>
      {posts.map(post => (
        <div key={post.guid} style={slideStyle}>
          {post.thumbnail && <img src={post.thumbnail} alt={post.title} style={imageStyle} />}
          <h2 style={titleStyle}>{post.title}</h2>
          <p style={paragraphStyle}>{new Date(post.pubDate).toLocaleDateString()}</p>
          <p style={paragraphStyle} dangerouslySetInnerHTML={{ __html: post.description }}></p>
          <a 
            href={post.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={linkStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseOut={e => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
          >
            Read More
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
