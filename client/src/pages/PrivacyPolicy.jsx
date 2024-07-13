import React from 'react';
import styled from 'styled-components';

const KaamDoPrivacyPolicy = () => {
  return (
    <>
      <div className="py-8 mb-5 sm:w-[90vw] justify-start ml-auto mr-auto mt-5">
        <div className='text-center'>
          <PolicyWrapper className='privacy'>
            <h1>Privacy Policy</h1>
            <section className='text-left'>
              <p>Last updated: 06 July, 2024</p>
              <p>Welcome to Kaam Do. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at info@example.com.</p>
            </section>
            <section className='text-left'>
              <h2>Information We Collect</h2>
              <p>We collect personal information that you provide to us, such as name, address, contact information, and employment history. We collect personal information when you register on our platform, apply for jobs, or interact with our services.</p>
            </section>
            <section className='text-left'>
              <h2>How We Use Your Information</h2>
              <p>We use personal information collected via our platform for purposes such as matching job seekers with job opportunities, facilitating communication between job seekers and employers, improving our services, and complying with legal obligations.</p>
            </section>
            <section className='text-left'>
              <h2>Sharing Your Information</h2>
              <p>We may share your information with employers, service providers, or affiliates who assist us in operating our platform or provide services to you.</p>
            </section>
            <section className='text-left'>
              <h2>Security of Your Information</h2>
              <p>We implement security measures to protect the confidentiality and integrity of your personal information. However, no method of transmission over the Internet or electronic storage is completely secure.</p>
            </section>
            <section className='text-left'>
              <h2>Your Choices and Rights</h2>
              <p>You have the right to access, update, or delete your personal information. You may also object to the processing of your personal information, restrict its processing, or request data portability.</p>
            </section>
            <section className='text-left'>
              <h2>Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.</p>
            </section>
            <section className='text-left'>
              <h2>Contact Us</h2>
              <p>If you have questions or comments about this policy, you may email us at: <a href="mailto:info@example.com">info@example.com</a>.</p>
            </section>
          </PolicyWrapper>
        </div>
      </div>
    </>
  );
};

const PolicyWrapper = styled.div`
  padding: 10px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    color: rgb(251 146 60);
    font-weight: bold;
  }

  p {
    margin: 10px 0;
  }
`;

export default KaamDoPrivacyPolicy;
