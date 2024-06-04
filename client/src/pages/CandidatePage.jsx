import React from 'react';
import "./CandidatePage.css";

const Candidate = ({ name, position, image, description }) => {
  return (
    <div className="candidate-card">
      <img src={image} className="candidate-image" alt={name} />
      <div className="candidate-details">
        <p className="candidate-name">{name}</p>
        <p className="candidate-position">{position}</p>
        <p className="candidate-description">{description}</p>
      </div>
    </div>
  );
};

const CandidatePage = () => {
  const candidates = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      image: 'https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg',
      description: 'John is a highly skilled software engineer with over 10 years of experience in full-stack development. He is proficient in JavaScript, Python, and Java, and has a passion for building scalable web applications.',
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZdrybHV3F79eAqX8lguAtd1W6Z037RAR7eDdxxi96nDBs490Dd5oH9EQAbC-Ubk5ad0&usqp=CAU',
      description: 'Jane is a seasoned product manager with a knack for identifying market trends and delivering innovative products. She has successfully led multiple product launches, ensuring alignment with business goals and customer needs.',
    },
    {
      name: 'Mike Johnson',
      position: 'Data Analyst',
      image: 'https://images.herzindagi.info/image/2022/Apr/interview-tips-for-career-women.jpg',
      description: 'Mike is a data analyst who excels in transforming data into actionable insights. With a strong background in statistics and experience in using tools like SQL and Tableau, he helps organizations make data-driven decisions.',
    },
    {
      name: 'Sara Connor',
      position: 'UX Designer',
      image: 'https://www.glassdoor.com/employers/app/uploads/sites/2/2019/10/5-ways-to-optimize-over-600-job-description-templates-1280x883.png',
      description: 'Sara is a creative UX designer with a passion for creating intuitive and engaging user experiences. She has a keen eye for detail and has worked on numerous projects that prioritize user satisfaction and accessibility.',
    },
    {
      name: 'David Lee',
      position: 'DevOps Engineer',
      image: 'https://cdn.cheekyscientist.com/cs/uploads/2020/08/pexels-mentatdgt-937481-900x600.jpg',
      description: 'David is a DevOps engineer with expertise in continuous integration and continuous deployment (CI/CD) processes. He has a strong background in cloud services and automation, ensuring efficient and reliable software delivery.',
    },
    {
      name: 'Emma Watson',
      position: 'Marketing Manager',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT621hI0pt0OX-fE9QLrckPwv0xj29k7NPYSL41RXXSnTlKRjhIqeJI9wX4eBtXAlkk-ss&usqp=CAU',
      description: 'Emma is a dynamic marketing manager known for her strategic thinking and creative campaigns. She has a proven track record in driving brand awareness and engagement through innovative marketing strategies.',
    },
    // {
    //   name: 'Oliver Stone',
    //   position: 'QA Engineer',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzURKpZmv6jO0ec9CJVYD3sUL8_5X66O7ooOdLzCgxbZGt-8XOZaiIOsOzPy1MF6QUWh4&usqp=CAU',
    //   description: 'Oliver is a meticulous QA engineer with a focus on ensuring the highest quality standards for software products. He is experienced in both manual and automated testing, helping to identify and resolve issues before they reach the end user.',
    // },
  ];

  return (
    <div className="candidate-page">
      {candidates.map((candidate, index) => (
        <Candidate key={index} {...candidate} />
      ))}
    </div>
  );
};

export default CandidatePage;
