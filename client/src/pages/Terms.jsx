import React from 'react';
import styled from 'styled-components';

const KaamDoTermsConditions = () => {
  return (
    <>
      <div className="py-8 mb-5 sm:w-[90vw] justify-start ml-auto mr-auto mt-5">
        <div className='text-center'>
          <TermsWrapper className='terms'>
            <h1>Terms and Conditions</h1>
            <section className='text-left'>
              <p>Last updated: 06 July, 2024</p>
              <p>Welcome to Kaam Do The Simplified Job Searching Platform. These terms and conditions outline the rules and regulations for the use of Kaam Do's website.</p>
            </section>
            <section className='text-left'>
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing this website, you agree to be bound by these terms and conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            </section>
            <section className='text-left'>
              <h2>2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Kaam Do's website for personal, non-commercial transitory viewing only.</p>
            </section>
            <section className='text-left'>
              <h2>3. Intellectual Property Rights</h2>
              <p>All content and materials available on Kaam Do, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, are the property of Kaam Do or its content suppliers and are protected by international copyright laws.</p>
            </section>
            <section className='text-left'>
              <h2>4. Limitation of Liability</h2>
              <p>In no event shall Kaam Do, its directors, officers, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the website; (ii) any conduct or content of any third party on the website; (iii) any content obtained from the website; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
            </section>
            <section className='text-left'>
              <h2>5. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </section>
            <section className='text-left'>
              <h2>6. Changes to Terms</h2>
              <p>Kaam Do reserves the right, at its sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
            </section>
            <section className='text-left'>
              <h2>7. Contact Us</h2>
              <p>If you have any questions about these terms and conditions, please contact us at: <a href="mailto:info@example.com">info@example.com</a>.</p>
            </section>
          </TermsWrapper>
        </div>
      </div>
    </>
  );
};

const TermsWrapper = styled.div`
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

export default KaamDoTermsConditions;
