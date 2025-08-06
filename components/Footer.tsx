// components/Footer.tsx

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Full-width banner image */}
      <div className="footer-banner">
        <Image
          src="/images/footer/footer-banner-ss.png"
          alt="Los Angeles skyline"
          className="footer-banner-img"
          width={1920}
          height={300}
          priority
        />
      </div>

      {/* Logo strip */}
      <div className="footer-logos">
        <Image
          src="/images/program/partnerships/health-services-lac.png"
          alt="Health Services Los Angeles County"
          className="footer-logo"
          width={150}
          height={50}
        />
        <Image
          src="/images/program/partnerships/kecklogo.jpeg"
          alt="Keck School of Medicine of USC"
          className="footer-logo"
          width={150}
          height={50}
        />
        <Image
          src="/images/logos/cdu.png"
          alt="Charles R. Drew University"
          className="footer-logo"
          width={150}
          height={50}
        />
        <Image
          src="/images/program/partnerships/ucla-ncsp.png"
          alt="UCLA National Clinician Scholars Program"
          className="footer-logo"
          width={150}
          height={50}
        />
        <Image
          src="/images/program/partnerships/lundquist.png"
          alt="The Lundquist Institute"
          className="footer-logo"
          width={150}
          height={50}
        />
        <Image
          src="/images/program/partnerships/viivlogo.png"
          alt="ViiV Healthcare"
          className="footer-logo"
          width={150}
          height={50}
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