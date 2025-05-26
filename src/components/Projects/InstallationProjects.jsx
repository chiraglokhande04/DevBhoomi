import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const projects = [
  {
    title: 'IPS OFFICER',
    subtitle: 'Punjab: Senior IPS Officer DGP Rank',
    address: 'Sector 85 Wave Estate Mohali Punjab 140308',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'APNA BAZAAR',
    address: '553X+8JR, Tehsil Road, Anand Colony, Waraich Colony, Samana, Punjab India 147101',
    specification: 'ELEVATOR SPECIFICATION-STRUCTURE 6 Passenger (408kg) 5 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'TRS HOSPITALITY GULMOHAR GARDEN AND RESORT',
    address: '40 km Ambala chandigarh, Highway, Ambala, Haryana India 134007',
    specification: 'ELEVATOR SPECIFICATION-STRUCTURE 6 Passenger (408kg) 2 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Captain Vishnu Sharma (ARMY RETD.)',
    address: 'House Number 878 sector 4 panchkula Haryana India 134112',
    specification: 'ELEVATOR SPECIFICATION-STRUCTURE 6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Devinder Singh Director at PIPL Developers (Real Estate)',
    address: ' House No. 3100 Block D Aerocity Mohali Punjab India 140603',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 4 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Rekha Gupta Retd. Principal (Secondary Education Govt. of Haryana)',
    address: 'House No. 993 Sector 12A Panchkula Haryana India 134112',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 5 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Er. Surinder Kumar Executive Engineer. Electricity "OP" Division No.3',
    address: 'MLU 221 Sector 109 EMAAR Mohali Hills Punjab India (140501)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. Maninder Owner Satluj Senior Secondary School',
    address: 'Satluj Colony, Kishangarh Road, Shahabad, Haryana India 136135',
    specification: 'ELEVATOR SPECIFICATION-STRUCTURE 6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. Gurnek Singh',
    address: 'House No. 939AP26 Sector 12A Panchkula Haryana India 134112',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 4 Opening HEAVY Capacity ELEVATOR',
    videoSrc: "Sector_12_Panchkula.mp4"
  },
  {
    title: 'BOURBON |BAR AND LOUNGE| Prop Shakti',
    address: '2nd floor, Ganesh Plaza, near Vishal mega Mart, Radha Garden, Ganga Nagar, Meerut, Uttar Pradesh 250001',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. K.S. Chahal Representative Indusviva',
    address: '754 Sector 79 Mohali Punjab India (140603)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. Sandeep Sethi',
    address: 'Phase 10 Mohali Punjab India (140603)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: "10 phase mohali.mp4"
  },
  {
    title: 'Mr. Amarjeet Gill',
    address: 'Sector 27D Chandigarh',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. A.S. BAL DIRECTOR (FALCON EXPORTS)',
    address: ' House number 561 Sector 33b Chandigarh (160033)',
    specification: 'ELEVATOR SPECIFICATION-8 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: "sector 32 b chandigarh.mp4"
  },
  {
    title: 'Mr. Rajbir Singh Gill',
    address: 'SCO Number 12&14 Second and Third Floor Sector 115, Khrar Mohali, Punjab , 140501',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. Rashpal Singh',
    address: 'Mohali 7 PHASE PUNJAB INDIA (140603)',
    specification: 'ELEVATOR SPECIFICATION-8 Passenger (408kg) 4 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. Naresh Kumar PROP Hotel Raati',
    address: ' Near Chitkara, Sector 80, Sahibzada Ajit Singh Nagar, Punjab (140308)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 8 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. Kapil Gaurav Das Proprietor Bawarchi Restaurant Canal Road',
    address: 'Samvedna Healthcare, Canal Rd, next to A Plus Car Care, Kishanpur, Dehradun, Uttarakhand 248001',
    specification: 'ELEVATOR SPECIFICATION-8 Passenger (408kg) 5 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. ISHU BABBAR & TINKU BABBAR',
    address: ' House number 3 and 4 Hira Enclave is a Locality in Nabha City in Punjab State Haryana his located nearby Location of the Hotel is Guru Nanak Nagar.',
    specification: 'ELEVATOR SPECIFICATION:-  LIFT1 :- 6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR  LIFT2 :- 6 Passenger (408kg) 3 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
  {
    title: 'Mr. MILAN SHARMA OWNER Milan Security Services “A Division of Milan Human Resources Pvt Ltd”(ISO 9001:2015 Certified Company)',
    address: 'D-90, Sector 10, Noida, Uttar Pradesh India (201301)',
    specification: 'ELEVATOR SPECIFICATION-6 Passenger (408kg) 4 Opening HEAVY Capacity ELEVATOR',
    videoSrc: ''
  },
    {
      title: "Gulmohar Garden",
      subtitle: "Ambala Installation",
      address: "Ambala",
      specification: "Installation 2020",
      videoSrc: ""
    },
    {
      title: "Apna Bazar Samana",
      subtitle: "Samana Installation",
      address: "Samana",
      specification: "Installation 15-03-2022",
      videoSrc: ""
    },
    {
      title: "Babbar Jewellers Nabha",
      subtitle: "Nabha Installation",
      address: "Nabha",
      specification: "Installation 20-03-2024/01-09-2024",
      videoSrc: ""
    },
    {
      title: "Surainder Kumar (SE) Emmar Mohali Hills",
      subtitle: "Mohali Hills Installation",
      address: "Emmar Mohali Hills",
      specification: "Installation 01-07-2023",
      videoSrc: ""
    },
    {
      title: "Col. Vishnu Sharma",
      subtitle: "Panchkula Installation",
      address: "Panchkula Sec-4",
      specification: "Installation 26-01-2022",
      videoSrc: ""
    },
    {
      title: "Rekha Gupta",
      subtitle: "Panchkula Installation",
      address: "Panchkula Sec-12 A",
      specification: "Installation 01-03-2024",
      videoSrc: ""
    },
    {
      title: "Munish Gupta",
      subtitle: "Panchkula Installation",
      address: "Panchkula sec-16",
      specification: "Installation 15-09-2024",
      videoSrc: ""
    },
    {
      title: "Gunek Singh",
      subtitle: "Panchukula Installation",
      address: "Panchukula sec-12 A",
      specification: "Installation 01-06-2023",
      videoSrc: ""
    },
    {
      title: "Paruthi Ji",
      subtitle: "Mohali Installation",
      address: "Sector 79 Mohali",
      specification: "Installation 26-06-2023",
      videoSrc: "sector 79 mohali.mp4"
    },
    {
      title: "IPS Punjab Wave state",
      subtitle: "Mohali Installation",
      address: "Sec-85 Mohali",
      specification: "Installation 20-03-2024",
      videoSrc: ""
    },
    {
      title: "Prem Nath Saapra",
      subtitle: "Chandighar Installation",
      address: "Sec-15 Chandighar",
      specification: "Installation 13-03-2025",
      videoSrc: ""
    },
    {
      title: "Sandeep Sethi",
      subtitle: "Mohali Installation",
      address: "phase 10 mohali",
      specification: "Installation 09-04-2024",
      videoSrc: ""
    },
    {
      title: "Hotel KK",
      subtitle: "Chandighar Installation",
      address: "Chandighar sec-43",
      specification: "Installation 01-09-2024",
      videoSrc: ""
    },
    {
      title: "A S Bal",
      subtitle: "Chandighar Installation",
      address: "Chandighar sec-33",
      specification: "Installation 01-11-2023",
      videoSrc: ""
    },
    {
      title: "Devinder Singh",
      subtitle: "aerocity Installation",
      address: "aerocity",
      specification: "Installation 01-05-2022",
      videoSrc: ""
    },
    {
      title: "Hotel Ambience",
      subtitle: "zirakpur Installation",
      address: "zirakpur",
      specification: "Installation 10-04-2025",
      videoSrc: ""
    },
    {
      title: "Barwachi Dehradun",
      subtitle: "Dehradun Installation",
      address: "Dehradun",
      specification: "Installation 01-07-2023",
      videoSrc: ""
    },
    {
      title: "Burbon Meerut",
      subtitle: "Meerut Installation",
      address: "Meerut",
      specification: "Installation 01-06-2022",
      videoSrc: ""
    },
    {
      title: "Hotel Shivansh INN",
      subtitle: "Rishikesh Installation",
      address: "Rishikesh",
      specification: "Installation 2020",
      videoSrc: ""
    },
    {
      title: "Hotel Green INN",
      subtitle: "Rishikesh Installation",
      address: "Rishikesh",
      specification: "Installation 2020",
      videoSrc: ""
    }
  
  
];

const InstallationProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const projectsWithVideo = projects.filter(project => project.videoSrc);
  const projectsWithoutVideo = projects.filter(project => !project.videoSrc);

  return (
    <div className="bg-white py-8">
      <h2 className="text-center text-blue-400 text-xl font-semibold uppercase">Our Project</h2>
      <h1 className="text-center text-3xl font-bold mb-6">Installation Projects</h1>

      <div className="mb-12">
        <h2 className="text-center text-2xl font-bold mb-6">Video Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
          {projectsWithVideo.map((project, index) => (
            <div
              key={index}
              className="bg-blue-400 rounded-2xl shadow-lg p-4 text-white text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <video autoPlay muted className="w-full h-80 object-cover rounded-md" controls>
                <source src={`/videos/${project.videoSrc}`} type="video/mp4" />
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

      <div>
        <h2 className="text-center text-2xl font-bold mb-6">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
          {projectsWithoutVideo.map((project, index) => (
            <div
              key={index}
              className="bg-blue-400 rounded-2xl shadow-lg p-4 text-white text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <h3 className="text-lg font-bold mt-4">{project.title}</h3>
              {project.subtitle && <p className="font-medium">{project.subtitle}</p>}
              <p><strong>Address:</strong> {project.address}</p>
              <p className="font-semibold mt-2">{project.specification}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationProjects;