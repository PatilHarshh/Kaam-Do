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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
      {posts.map((post) => (
        <div key={post.guid} className="p-4 pt-2 text-center w-full box-border border border-gray-300 rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
          {post.thumbnail && <img src={post.thumbnail} alt={post.title} className="max-w-full h-auto mb-2" />}
          <h2 className="text-lg pt-2 mb-2">{post.title}</h2>
          <p className="text-sm pt-2 mb-2">{new Date(post.pubDate).toLocaleDateString()}</p>
          <p className="text-sm mb-2 pt-2 overflow-hidden  text-ellipsis line-clamp-3" dangerouslySetInnerHTML={{ __html: post.description }}></p>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 pt-2 px-4 py-2 bg-blue-600 text-white no-underline rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;