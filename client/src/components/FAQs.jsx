import React, { useState } from 'react';
const faqsData = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button at the top right corner and fill in the required details."
    },
    {
      question: "How do I reset my password?",
      answer: "Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password."
    },
    {
      question: "How do I search for jobs?",
      answer: "Use the search bar on the homepage to enter keywords, job titles, or company names. You can also use filters to narrow down your search."
    },
    {
      question: "How can I apply for a job?",
      answer: "Once you find a job you're interested in, click on the 'Apply' button and follow the instructions to submit your application."
    },
    {
      question: "How do I receive job alerts?",
      answer: "To receive job alerts, go to your account settings and enable job alerts. You can customize the alerts based on your preferences and receive notifications via email."
    },
    {
      question: "How do I contact support?",
      answer: "If you need assistance, you can contact our support team by clicking on the 'Contact Us' link at the bottom of the page. Fill in the contact form and our team will get back to you as soon as possible."
    },
    {
      question: "How do I upload my resume?",
      answer: "To upload your resume, go to your profile page and click on 'Upload Resume'. Select the file from your computer and it will be added to your profile."
    },
    {
      question: "Can I apply for jobs without an account?",
      answer: "No, you need to have an account to apply for jobs on our platform. This helps us to provide a more personalized experience and track your application status."
    },
    {
      question: "What types of jobs are available?",
      answer: "We have a wide range of job listings across various industries, including technology, healthcare, finance, education, and more. Use the search filters to find jobs that match your skills and interests."
    },
    {
      question: "How can I improve my chances of getting hired?",
      answer: "Make sure your profile is complete and up-to-date, including your resume and skills. Tailor your applications to the job descriptions, and consider reaching out to employers directly through the platform's messaging system."
    }
  ];
  

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">Frequently Asked Questions</h1>
      <ul className="space-y-4 mt-12">
        {faqsData.map((faq, index) => (
          <li key={index} className="border-b pb-4">
            <h3
              onClick={() => handleClick(index)}
              className="text-xl font-semibold cursor-pointer flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-4 transform transition-transform duration-200" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
              </span>
            </h3>
            {activeIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQs;