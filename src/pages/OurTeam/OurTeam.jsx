import React, { useEffect } from "react";
import img1 from "../../images/team1.jpeg";
import img2 from "../../images/team2.jpeg";
import img3 from "../../images/team3.jpeg";
import img4 from "../../images/team4.jpg";
import img5 from "../../images/team5.jpg";
import img6 from "../../images/team6.jpeg";
import img7 from "../../images/team7.jpg";
import img8 from "../../images/team8.jpeg";
import img9 from "../../images/team9.jpeg";
import img10 from "../../images/team10.jpeg";
import img11 from "../../images/team11.jpeg";
import img12 from "../../images/team12.jpg";
import img13 from "../../images/team13.jpg";
import img14 from "../../images/team14.jpg";
import img15 from "../../images/team15.jpeg";
import img16 from "../../images/team16.jpeg";
import img17 from "../../images/team17.jpeg";
import img18 from "../../images/team18.jpeg";
import { Helmet } from "react-helmet";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const ourTeam = [
    {
      picture: img1,
      heading: "Saurabh Agrawal (CEO)",
      description:
        "Graduated from the prestigious Kathmandu College Of Management, Nepal. Worked with Coca Cola in Marketing (Kathmandu) built expertise in positioning, branding, advertising.",
    },
    {
      picture: img2,
      heading: "Priyanka Agrawal (COO)",
      description:
        "Graduate from Sydenham College (Mumbai), MBA from NMIMS (Mumbai) and CPA from Australia. A decade of work experience from across the globe (Australia, Singapore, UK, France, Germany, Switzerland & India) in investment banking & management consulting, with a clear understanding of the pulse of pubs since 2013.",
    },
    {
      picture: img3,
      heading: "Dheeraj Sachdeva",
      title: "VP Operations",
      description:
        "Dual IHM degree holder from Strathclyde University UK and NIHM Dehradun, Dheeraj comes with extensive work experience of over 20 years from India, UK and USA’s multinational F&B establishments.",
    },
    {
      picture: img4,
      heading: "Himmat Rautela",
      title: "Corporate Chef",
      description:
        "Known as Master chef in this fraternity. Himmat has hands on experience of over 20 years with various well known brands all across India including five stars and has a magic in his hands.",
    },
    {
      picture: img5,
      heading: "Sameer Shrivastav",
      title: "VP Business Development",
      description:
        "Bringing over 23 years of accomplished experience in the retail Sector, Sameer holds a Masters in Business Economics (MBE) specializing in Franchisee Acquisition & Management, Business Development & Project Managment. He also looks after leasing and liaison.",
    },
    {
      picture: img6,
      heading: "Ranjeet Talwar",
      title: "VP Franchisee Sales",
      description:
        "A graduate from Jai Narayan University Jodhpur, Ranjeet is an enthusiastic sales professional with over 23 years of work experience in Telecom, FMCG & F&B industry and franchising.",
    },
    {
      picture: img7,
      heading: "Sandeep Kumar Pachauri",
      title: "Corporate General Manager",
      description:
        "Leveraging a wealth of experience in strategic management and operations, Sandip oversees the seamless functioning of multiple establishments within the portfolio. Sandip holds Bachelors degree in Hotel management and Catering technology.",
    },
    {
      picture: img8,
      heading: "Puran Lohiya",
      title: "Training Manager",
      description:
        "A graduate in hotel management with over 14 years of experience, Puran always wanted to be a leader in Training & Development. Puran carries in dept know of ‘Train the Planet’ & ‘Train the Trainers’.",
    },
    {
      picture: img9,
      heading: "Sourav Singh",
      title: "Clubstraunt Manager",
      description:
        "A professional with 15 years of rich experience in hospitality industry with multinational brands and international openings. Sourav is passionate about delivering best guest experience",
    },
    {
      picture: img10,
      heading: "Paramjeet Maan",
      title: "Clubstraunt Manager",
      description:
        "Paramjeet has a proven track record of optimizing restaurant operations. He is passionate about creating a positive dining atmosphere and implementing strategies that enhance efficiency and profitability.",
    },
    {
      picture: img11,
      heading: "Anuj Kumar",
      title: "Training Manager",
      description:
        "A hotel management degree holder and professional from UIMT Dehradun, Anuj has over 12 years of experience in operations and Training. He is super passionate about upholding the highest standards of training quality",
    },
    {
      picture: img12,
      heading: "Ravi Sharma",
      title: "Mixologist",
      description:
        "As a Corporate Mixologist, Ravi brings a dynamic blend of mixology mastery and managerial finesse to Toy Boy. With a background steeped in the art of crafting exceptional libations and A graduate of Hotel Management from DPMI, he combines formal educa- tion with a wealth of practical knowledge to curate an enticing and diverse beverage culture.",
    },
    {
      picture: img13,
      heading: "Denis Lily",
      title: "Marketing Manager",
      description:
        "A graduate in Hotel management from AlHM and with over 12 years of experience, Denis comes with a deep knowledge of marketing.",
    },
    {
      picture: img14,
      heading: "Madan Singh",
      title: "Manager I.T",
      description:
        "A Post Graduate from MR PG college Haldwani, Madan holds over 10 years of experience in managing IT operations in pubs.",
    },
    {
      picture: img15,
      heading: "Dharamveer Tiwari",
      title: "HR Manager",
      description:
        "A master degree holder, Dharmendra has extensive work experience of Human Resources for over 15 years in multiple industries.",
    },
    {
      picture: img16,
      heading: "Ashok Kumar Gupta",
      title: "Head of Finance",
      description:
        "With over 32 years of experience in finance, Ashok holds an M.Com degree from Darbhanga. He has worked with multiple industries in his past tenure",
    },
    {
      picture: img17,
      heading: "Ajay Gupta",
      title: "Legal Advisor",
      description:
        "With over 20 years of experience in representing clients in litigation and Alternate Dispute Resolution at Supreme Court, Delhi High Court, District Courts, NCDRC, Ajay has earned his LL.B. from Delhi University. He also holds P.G. Diploma in Corporate Law & Management from the Indian Law Institute, New Delhi.",
    },
    {
      picture: img18,
      heading: "Ankit Luthra",
      title: "Social Media Manager",
      description:
        "With over 10 years of experience in Social Media Marketing, Ankit comes with in-depth knowledge of the modern social media trends and management skills ",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Our Team | ToyBoy</title>
        <meta
          name="description"
          content="Meet the exceptional team behind ToyBoy, featuring experienced professionals in various roles from CEO to Social Media Manager. Learn about their backgrounds and expertise."
        />
        <meta
          name="keywords"
          content="ToyBoy team, team members, CEO, COO, VP Operations, Corporate Chef, Business Development, Franchisee Sales, Hospitality, Marketing Manager, IT Manager, HR Manager, Finance Head, Legal Advisor, Social Media Manager"
        />
        <meta property="og:title" content="Meet Our Team | ToyBoy" />
        <meta
          property="og:description"
          content="Discover the talented individuals who make up the ToyBoy team, including our CEO, COO, and other key roles. Explore their professional backgrounds and contributions."
        />
        <meta property="og:image" content="/path-to-your-default-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/our-team" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team | ToyBoy" />
        <meta
          name="twitter:description"
          content="Meet the amazing team behind ToyBoy. Learn about our CEO, COO, and other key members and their roles in the company."
        />
        <meta name="twitter:image" content="/path-to-your-default-image.jpg" />
      </Helmet>
      <div
        className="ourteam"
        style={{ backgroundColor: "#0B1517", color: "white" }}
      >
        <h1 className="text-center py-5" style={{ color: "white" }}>
          Our Amazing Team
        </h1>
        <div className="container">
          <div className="row">
            {ourTeam.map((item, index) => (
              <div className="col-md-4 mb-5">
                <div className="mb-5">
                  <img
                    style={{ width: "100%", borderRadius: "5rem" }}
                    src={item.picture}
                    alt="our team member"
                  />
                </div>
                <div>
                  <h2 className="text-center" style={{ color: "#CA9C5E" }}>
                    {item.heading}
                  </h2>
                  <p className="text-center">{item.title}</p>
                  <p>
                    <i>{item.description}</i>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
