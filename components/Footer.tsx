// components/Footer.tsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Full-width banner image */}
      <div className="footer-banner">
        <img
          src="/images/footer/los-angeles-with-mount-baldy-credit-alek-leckszas_orig.jpeg"
          alt="Los Angeles skyline"
          className="footer-banner-img"
        />
      </div>

      {/* Logo strip */}
      <div className="footer-logos">
        <img
          src="/images/program/partnerships/health-services-lac.png"
          alt="Health Services Los Angeles County"
          className="footer-logo"
        />
        <img
          src="/images/program/partnerships/kecklogo.jpeg"
          alt="Keck School of Medicine of USC"
          className="footer-logo"
        />
        <img
          src="/images/logos/cdu.png"
          alt="Charles R. Drew University"
          className="footer-logo"
        />
        <img
          src="/images/program/partnerships/ucla-ncsp.png"
          alt="UCLA National Clinician Scholars Program"
          className="footer-logo"
        />
        <img
          src="/images/program/partnerships/lundquist.png"
          alt="The Lundquist Institute"
          className="footer-logo"
        />
        <img
          src="/images/program/partnerships/viivlogo.png"
          alt="ViiV Healthcare"
          className="footer-logo"
        />
      </div>

      {/* Bottom copyright text */}
      <div className="footer-text">
        <p>© {new Date().getFullYear()} HIV Clinical Fellowship</p>
        <p>Content in this website is property of the HIV Clinical Fellowship. Your Privacy Choices.</p>
      </div>
    </footer>
  );
}