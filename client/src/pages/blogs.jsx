import React, { useState, useEffect } from 'react';
// added one dependancy for framer motion and animations 
import { motion } from 'framer-motion';

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'z3qu6zgemnbowzv8sp5fg3evuytv3daigetaomul'; // Replace with your actual API key

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/jobs&api_key=${apiKey}`, {
      headers: {
        'Content-Type': 'application/json',
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

  if (loading) return <div className="text-center text-xl py-10 animate-pulse">Loading...</div>;
  if (error) return <div className="text-center text-xl py-10 text-red-600">Error fetching data: {error.message}</div>;
//------------------------- added some colors for distinct animations and graphics and hover effects--------------------------------------
return (
  <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.h1 
          className="text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest Job Articles
        </motion.h1>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div 
            key={post.guid} 
            className="relative bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              whileTap={{ scale: 0.95 }}
              >
              {post.thumbnail && (
                <motion.img 
                src={post.thumbnail} 
                alt={post.title} 
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                />
              )}
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
                <p
                  className="text-sm text-gray-700 dark:text-gray-300 mb-6 overflow-hidden text-ellipsis line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                ></p>
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block text-center py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  Read More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

//------------------------- added some colors for distinct animations and graphics and hover effects--------------------------------------
export default BlogGrid;
