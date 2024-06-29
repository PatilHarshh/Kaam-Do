import React, { useState, useEffect } from 'react';

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'z3qu6zgemnbowzv8sp5fg3evuytv3daigetaomul'; // Replace with your actual API key

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/jobs&api_key=${apiKey}`, {
      headers: {
        'Content-Type': 'application/json',
        // Add other headers if required by the API
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const gridItemStyle = {
    padding: '10px',
    textAlign: 'center',
    width: '100%', // Adjust to fit within the grid
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: 'grey',
  }

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '1.2em',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '0.9em',
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
    padding: '8px 16px',
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
    <div style={gridContainerStyle}>
      {posts.map((post) => (
        <div key={post.guid} style={gridItemStyle}>
          {post.thumbnail && <img src={post.thumbnail} alt={post.title} style={imageStyle} />}
          <h2 style={titleStyle}>{post.title}</h2>
          <p style={paragraphStyle}>{new Date(post.pubDate).toLocaleDateString()}</p>
          <p style={paragraphStyle} dangerouslySetInnerHTML={{ __html: post.description }}></p>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)}
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
