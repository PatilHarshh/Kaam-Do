import React, { useState } from 'react';
import "../assets/feedback-form.css"

const Feedback = ({ showModal, closeModal }) => {
  
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Updated this route as required, the below route works if backend is running at port 3000
      const response = await fetch('http://localhost:3000/feedback/createFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName,
          userEmail,
          feedback,
          rating,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }
      console.log('Feedback submitted successfully');
      setUserName("")
      setUserEmail("")
      setFeedback("")
      setRating(null);
      closeModal(); 
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      
    }
  };

  return (
    <> 
        {showModal && 
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="relative bg-white p-6 rounded-lg shadow-orange-200 shadow-md sm:w-3/4 max-w-lg">
            <div class="custom-shape-divider-top-1718601849">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-700 text-center my-4">Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"
                >Your Name</label>
                <input
                  className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="Enter your name here"
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => {setUserName(e.target.value)}}
                  required
                />
                 <label className="block text-gray-700 text-sm font-bold mb-2"
                >Your Email Id</label>
                <input
                  className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="xyz@gmail.com"
                  type="email"
                  id="userEmail"
                  value={userEmail}
                  onChange={(e) => {setUserEmail(e.target.value)}}
                  required
                />
                <textarea
                  id="feedback"
                  name="feedback"
                  rows="4"
                  placeholder="Your valuable feedback or suggestion"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none border-gray-300 bg-gray-100"
                  required
                ></textarea>
              </div>

              <div className="rating-section p-4 gap-5 flex flex-col text-center">
                <h2 className="text-gray-700 text-sm font-bold">Would Like to rate our App experiance?</h2>
                <div className='flex justify-center bg-gray-100 p-5 rounded-md'>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                        key={star}
                        onClick={() => setRating(star)}
                        className={`star w-8 h-8 fill-current cursor-pointer ${
                            star <= rating ? 'text-yellow-500' : 'text-gray-200'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10 1l2.598 6.775H19.5l-5.192 4.235L16.5 19l-6.5-5.5L3.5 19l1.192-7.99L0 7.775h6.902L10 1z"
                        />
                        </svg>
                    ))}
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded">
                  Submit
                </button>
                <button type="submit" className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded" onClick={closeModal}>
                  Cancel
                </button>
              </div>
              
            </form>
          </div>
        </div>
        }
    </>
  );
};

export default Feedback;
