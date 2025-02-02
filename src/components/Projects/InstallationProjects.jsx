import React from 'react';

const projects = [
  {
    title: 'IPS OFFICER ARPIT SHUKLA',
    subtitle: 'Punjab: Senior IPS Officer DGP Rank',
    address: 'Sector 85 Wave Estate Mohali Punjab 140308',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'APNA BAZAAR',
    address: '553X+8JR, Tehsil Road, Anand Colony, Waraich Colony, Samana, Punjab India 147101',
    specification: 'ELEVATOR SPECIFICATION-STRUCTURE 6 Passenger (408kg) 5 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'TRS HOSPITALITY GULMOHAR GARDEN AND RESORT',
    address: '40 km Ambala chandigarh, Highway, Ambala, Haryana India 134007',
    specification: 'ELEVATOR SPECIFICATION-STRUCTURE 6 Passenger (408kg) 2 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Captain Vishnu Sharma (ARMY RETD.)',
    address: 'House Number 878 sector 4 panchkula Haryana India 134112',
    specification: 'ELEVATOR SPECIFICATION-STRUCTURE 6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Devinder Singh Director at PIPL Developers (Real Estate)',
    address: ' House No. 3100 Block D Aerocity Mohali Punjab India 140603',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 4 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Rekha Gupta Retd. Principal (Secondary Education Govt. of Haryana)',
    address: 'House No. 993 Sector 12A Panchkula Haryana India 134112',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 5 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Er. Surinder Kumar Executive Engineer. Electricity "OP" Division No.3',
    address: 'MLU 221 Sector 109 EMAAR Mohali Hills Punjab India (140501)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. Maninder Owner Satluj Senior Secondary School',
    address: 'Satluj Colony, Kishangarh Road, Shahabad, Haryana India 136135',
    specification: 'ELEVATOR SPECIFICATION-STRUCTURE 6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. Gurnek Singh',
    address: 'House No. 939AP26 Sector 12A Panchkula Haryana India 134112',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 4 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'BOURBON |BAR AND LOUNGE| Prop Shakti',
    address: '2nd floor, Ganesh Plaza, near Vishal mega Mart, Radha Garden, Ganga Nagar, Meerut, Uttar Pradesh 250001',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. K.S. Chahal Representative Indusviva',
    address: '754 Sector 79 Mohali Punjab India (140603)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. Sandeep Sethi',
    address: 'Phase 10 Mohali Punjab India (140603)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. Amarjeet Gill',
    address: 'Sector 27D Chandigarh',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. A.S. BAL DIRECTOR (FALCON EXPORTS)',
    address: ' House number 561 Sector 33b Chandigarh (160033)',
    specification: 'ELEVATOR SPECIFICATION-8 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. Rajbir Singh Gill',
    address: 'SCO Number 12&14 Second and Third Floor Sector 115, Khrar Mohali, Punjab , 140501',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. Rashpal Singh',
    address: 'Mohali 7 PHASE PUNJAB INDIA (140603)',
    specification: 'ELEVATOR SPECIFICATION-8 Passenger (408kg) 4 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. Naresh Kumar PROP Hotel Raati',
    address: ' Near Chitkara, Sector 80, Sahibzada Ajit Singh Nagar, Punjab (140308)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 8 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. Kapil Gaurav Das Proprietor Bawarchi Restaurant Canal Road',
    address: 'Samvedna Healthcare, Canal Rd, next to A Plus Car Care, Kishanpur, Dehradun, Uttarakhand 248001',
    specification: 'ELEVATOR SPECIFICATION-8 Passenger (408kg) 5 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. ISHU BABBAR & TINKU BABBAR',
    address: ' House number 3 and 4 Hira Enclave is a Locality in Nabha City in Punjab State Haryana his located nearby Location of the Hotel is Guru Nanak Nagar.',
    specification: 'ELEVATOR SPECIFICATION:-  LIFT1 :- 6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR  LIFT2 :- 6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  },
  {
    title: 'Mr. MILAN SHARMA OWNER Milan Security Services “A Division of Milan Human Resources Pvt Ltd”(ISO 9001:2015 Certified Company)',
    address: 'D-90, Sector 10, Noida, Uttar Pradesh India (201301)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 4 Opening HEAVY Capacity ELEVATOR',
    videoSrc: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/VID-20240216-WA0016-1.mp4'
  }
];

const InstallationProjects = () => {
  return (
    <div className="bg-white py-8">
      <h2 className="text-center text-blue-400 text-xl font-semibold uppercase">Our Project</h2>
      <h1 className="text-center text-3xl font-bold mb-6">Installation Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
        {projects.map((project, index) => (
          <div key={index} className="bg-blue-400 rounded-2xl shadow-lg p-4 text-white text-center">
            <video autoPlay muted className="w-full h-80 object-cover rounded-md" controls>
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <h3 className="text-lg font-bold mt-4">{project.title}</h3>
            {project.subtitle && <p className="font-medium">{project.subtitle}</p>}
            <p><strong>Address:</strong> {project.address}</p>
            <p className="font-semibold mt-2">{project.specification}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallationProjects;
