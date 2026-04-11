import { useState } from 'react';
import lccLogo from './assets/lcc_logo.png';
import PrLogo from './assets/enrollmentPR.png';

const EnrollmentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle close
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="backgroundContainer">

        {/* Header */}
        <div className="header-container">
          <div className="logo-container">
          {/*<img src={lccLogo} alt="lcc logo" />*/}
            <h1 className="page-title"> </h1>
          </div>

          <nav className="navbar">
            {/* Hamburger Icon */}
            <div 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Navigation Links */}
            <ul className={isMenuOpen ? 'active' : ''}>
              <li onClick={handleLinkClick}>HOME</li>
              <li onClick={handleLinkClick}>ABOUT US</li>
              <li onClick={handleLinkClick}>OFFERED COURSES</li>
              <li onClick={handleLinkClick}>CONTACT</li>
              <li onClick={handleLinkClick}>LOG IN</li>
            </ul>
          </nav>
        </div>

        {/* BODY */}
        <div className="body-container">
          {/*<img src={PrLogo} alt="Enrollment Poster" />*/}
          <div className="whyEnroll">
            <h3>Why Enroll with us?</h3>
            <ul>
              <li>Quality Education: Learn from expert instructors.</li>
              <li>Flexible Programs: Choose the course that fits your schedule.</li>
              <li>Supportive Community: Join a network of like-minded individuals.</li>
            </ul>

            <h2>Ready to get started?</h2>
            <p>Click below to begin your enrollment process.</p>
            <button id="enroll-btn">ENROLL NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnrollmentPage;