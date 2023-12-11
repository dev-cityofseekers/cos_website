import React from 'react';
import { Link } from 'react-scroll';

interface WelcomeProps {
  whatsappLink: string;
}

const WelcomeComponent: React.FC<WelcomeProps> = ({ whatsappLink }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl mt-10 p-5">
      <div className="md:flex">
        <div className="p-8">
          <h1 className="text-lg font-semibold text-indigo-500">Welcome to City Of Seekers!</h1>
          <p className="mt-2 text-gray-600">
            As you gear up for an unforgettable experience, we invite you to become a part of our vibrant community. Connect with fellow festival-goers, make new friends, and enhance your festival journey by joining our WhatsApp Group!
          </p>
          
          <p className="mt-4 text-gray-600">
            In this group, you'll find:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
            <li><span role="img" aria-label="tent">🏕️</span> <strong>Tent Renting:</strong> Share or rent tents easily. Whether you have extra space or need a cozy corner, our community has got you covered!</li>
            <li><span role="img" aria-label="car">🚗</span> <strong>Car Sharing:</strong> Planning your journey to the festival? Coordinate with others for a fun and eco-friendly ride. Save on travel costs and reduce your carbon footprint!</li>
            <li><Link to={"FAQ"} smooth={true}
                  duration={300} className='cursor-pointer'><span role="img" aria-label="question">❓</span> <strong>Overall Questions:</strong> Got questions not answered in our <div className='text-blue-400'>FAQ?</div> Ask here!</Link></li>
          </ul>

          <p className="mt-4 text-gray-600">
            To join, simply click on the link below or scan the QR code. Let's make City Of Seekers a memorable and connected experience for everyone!
          </p>
          
          <a href={whatsappLink} className="mt-4 inline-block bg-indigo-500 text-white px-5 py-2 rounded shadow-lg hover:bg-indigo-400 transition duration-300">Join WhatsApp Group</a>
          
          <div className="mt-4 text-center text-gray-600">
            Or scan this QR-Code
          </div>
          <img
            src="/images/qr.png"
            alt="WhatsApp Group QR Code"
            className="mt-4 w-48 mx-auto"
          />

          <p className="mt-4 text-center text-gray-600">
            See you in the group and soon at City Of Seekers! 🌟
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
