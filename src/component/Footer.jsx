import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-400 text-white py-4 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
