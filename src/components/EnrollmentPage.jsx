import LccLogo from './assets/lcc_logo.png';

const EnrollmentPage = () => {
  return (
    <div className="enrollment-background">
      <div className="enrollmemt-header-title">LA CONCEPCION <br />COLLEGE</div>
        <div className="enrollment-container">
          <div className="enrollment-header">
          <div className="lcc-logo">
            <img src={LccLogo} alt="La Concepcion College logo"/>
          </div>

          <nav>
            <ul>
              <li><a href="https://laconcepcioncollege.com/about-us/" target="_blank">About Us</a></li>
                <li><a href="https://laconcepcioncollege.com/academics/" target="_blank">Offered Courses</a></li>
                <li><a href="https://laconcepcioncollege.com/contact-us-2/" target="_blank">Contact Us</a></li>
                <li><a th:href="@{/loginForm}">Log In</a></li>
            </ul>
          </nav>
        </div>

        <div className="enrollment-body">
          <h2>Ready to get started?</h2>
          <p>Click below to begin your enrollment process.</p>
          <button id="enroll-btn">ENROLL NOW</button>
          
          <div className="why-enroll">
            <h3>Why Enroll with us?</h3>
            <ul>
              <li>Quality Education: Learn from expert instructors.</li>
              <li>Flexible Programs: Choose the course that fits your schedule.</li>
              <li>Supportive Community: Join a network of like-minded individuals.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;