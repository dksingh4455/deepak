import Image from 'next/image';
import { FaTwitterSquare,FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: 'Farmer Name',
      designation: 'Designation',
      image: '/farmer1.jpg', // Replace with your image path
    },
    {
      name: 'Farmer Name',
      designation: 'Designation',
      image: '/farmer2.jpg', // Replace with your image path
    },
    {
      name: 'Farmer Name',
      designation: 'Designation',
      image: '/farmer3.jpg', // Replace with your image path
    },
  ];

  return (
    <section className="bg-white py-12">
      {/* Header Section */}
      <div className="text-center mb-10 py-[20px]">
        <h3 className="text-sm font-semibold text-green-500 uppercase">The Team</h3>
        <h2 className="text-3xl font-bold text-gray-800">
          We Are Professional Organic Farmers
        </h2>
      </div>

      {/* Team Cards */}
      <div className="max-w-[1240px] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div  className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative h-72">
              <Image
                src="/team-1.jpg"
                alt={member.name}
                layout="fill"
                className="object-cover"
              />
              
            </div>

            {/* Social Media Sidebar */}
            <div className="absolute top-0 right-0 bg-orange-500 h-full w-12 flex flex-col justify-center items-center space-y-10">
              <a
                href="#"
                className="text-white text-lg hover:scale-110 transform transition"
                aria-label="Twitter"
              >
               <FaTwitterSquare size={35} className='bg-white text-orange-500 rounded-full p-2'/>
              </a>
              <a
                href="#"
                className="text-white text-lg hover:scale-110 transform transition"
                aria-label="Facebook"
              >
              <FaFacebookF size={35} className='bg-white text-orange-500 rounded-full p-2'/>
              </a>
              <a
                href="#"
                className="text-white text-lg hover:scale-110 transform transition"
                aria-label="LinkedIn"
              >
            <FaLinkedinIn size={35} className='bg-white text-orange-500 rounded-full p-2' />

              </a>
              <a
                href="#"
                className="text-white text-lg hover:scale-110 transform transition"
                aria-label="Instagram"
              >
                <FaInstagram  size={35} className='bg-white text-orange-500 rounded-full p-2'/>

              </a>
            </div>

            {/* Details Section */}
            <div className="bg-green-500 text-white p-4 text-center">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
