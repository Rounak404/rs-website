import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import YearSlideshow from '../components/YearSlideshow';
import SEO from '../components/SEO';
import { generateImageMetadata, optimizeImageUrl } from '../utils/imageOptimization';
import '../styles/Achievements.css';

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample images and videos for the 2025 slideshow
  const slideshowImages = [
    {
      src: '/images/achievement1.jpg',
      alt: 'VSSUT Robotics Society achievement showcase 1',
      width: 800,
      height: 600
    },
    {
      src: '/images/achievement2.jpg',
      alt: 'VSSUT Robotics Society achievement showcase 2',
      width: 800,
      height: 600
    },
    {
      src: '/images/achievement5.jpg',
      alt: 'VSSUT Robotics Society achievement showcase 3',
      width: 800,
      height: 600
    },
    {
      src: '/images/achievement4.jpg',
      alt: 'VSSUT Robotics Society achievement showcase 4',
      width: 800,
      height: 600
    }
  ];

  const slideshowVideos = [
    // '/videos/achievement1.mp4',
    // '/videos/achievement2.mp4'
  ];

  const achievementsByYear = {
    2025: [
      {
        id: 67,
        title: 'Patent for the Base Frame of our Autonomous Mobile Robot',
        year: '2025',
        description:
          ' this patented base frame serves as a foundational platform — ideal for understanding the core working of autonomous mobile robots and their wide range of applications.',
        category: 'Research',
      },
      {
        id: 1,
        title: 'FTBI Startup Bootcamp 2025 Achievement  ',
        description:
          'secured the 3rd Prize at the Startup Bootcamp 2025, organized by FTBI, NIT Rourkela in collaboration with VSSUT, Burla ',
        category: 'Competition',
      },
      {
        id: 2,
        title: 'National Science Day',
        description: 'Winner – Science Exhibition, National Science Day, BRIC',
        category: 'Competition',
      },
    ],
    2024: [
      {
        id: 2,
        title: 'Smart India Hackathon',
        description: 'Grand Finalist – Smart India Hackathon',
        category: 'Competition',
      },
      {
        id: 3,
        title: 'E-Yantra Robotics Competition',
        description: 'Finalist – E-Yantra Robotics Competition (IIT Bombay).',
        category: 'Competition',
      },
      {
        id: 4,
        title: 'INNOVISION',
        description: 'Runners-Up – INNOVISION (NIT Rourkela)',
        category: 'Competition',
      },
    ],
    2023: [
      {
        id: 5,
        title: 'Smart India Hackathon',
        description: 'Grand Finalist – Smart India Hackathon',
        category: 'Competition',
      },
      {
        id: 6,
        title: 'E-Yantra Robotics Competition',
        description: 'Finalist – E-Yantra Robotics Competition (IIT Bombay)',
        category: 'Competition',
      },
      {
        id: 7,
        title: 'Robomania',
        description: '1st Runner Up in Innovation Challenge - Robomania',
        category: 'Competition',
      },
      {
        id: 8,
        title: 'START-UP MELA',
        description: 'Top 10 – INNOMINDS Hackathon (START-UP MELA)',
        category: 'Expo',
      },
    ],
    2022: [
      {
        id: 9,
        title: 'Smart India Hackathon',
        description: 'Grand Finalist – Smart India Hackathon',
        category: 'Competition',
      },
      {
        id: 10,
        title: 'Innovation Design Competition',
        description:
          '1st Prize – Innovation Design Competition, ISRO Satish Dhawan Space Centre',
        category: 'Competition',
      },
      {
        id: 11,
        title: 'Smart India Hackathon',
        description: '1st Runner Up – Smart India Hackathon',
        category: 'Competition',
      },
      {
        id: 12,
        title: 'Smart India Hackathon',
        description: 'Finalists(2 Teams) – Smart India Hackathon',
        category: 'Competition',
      },
    ],
    2021: [
      {
        id: 13,
        title: 'DEEPTECH IDEATHON',
        description: 'Winner – DEEPTECH IDEATHON, Mouser Electronics',
        category: 'Competition',
      },
      {
        id: 14,
        title: 'Pre Incubation Training Programme',
        description:
          'Selected in Pre Incubation Training Programme, by CII, Utkal University',
        category: 'Award',
      },
    ],
    2020: [
      {
        id: 15,
        title: 'Smart India Hackathon',
        description: 'Winners – Smart India Hackathon',
        category: 'Competition',
      },
      {
        id: 16,
        title: 'ABU ROBOCON',
        description:
          'Shortlisted for Round 2(Video Presentation Round) for ABU ROBOCON 2020, Organised by Doordarshan India and IIT Delhi.',
        category: 'Competition',
      },
      {
        id: 17,
        title: "National Students' Space Challenge",
        description:
          "AIR 1 in SONAROUS in National Students' Space Challenge, organised by ISRO and IIT Kharagpur.",
        category: 'Competition',
      },
    ],
    2019: [
      {
        id: 18,
        title: 'Tata Crucible Hackathon',
        description: 'Finalists(3 teams) – Tata Crucible Hackathon',
        category: 'Competition',
      },
      {
        id: 19,
        title: 'E-Yantra Robotics Competition',
        description:
          '7 teams from Robotics Society VSSUT,Burla have qualified for the second stage of E-Yantra Robotics Competition.',
        category: 'Competition',
      },
      {
        id: 20,
        title: 'ASME E-Fest Asia Pacific',
        description:
          'Rank 4 – Student Designing competition, ASME E-Fest Asia Pacific',
        category: 'Competition',
      },
      {
        id: 21,
        title: 'ASME E-Fest Asia Pacific',
        description:
          'Rank 5 – Innovative Additive Manufacturing 3D challenge, ASME E-Fest Asia Pacific',
        category: 'Competition',
      },
    ],
    2018: [
      {
        id: 22,
        title: 'ROBOCON 2018',
        description: 'AIR-3 – MATLAB Innovation Award, ROBOCON 2018',
        category: 'Competition',
      },
      {
        id: 23,
        title: 'E-Yantra Robotics Competition',
        description:
          'AIR-2 – E-Yantra Robotics Competition by IIT Bombay and MHRD',
        category: 'Competition',
      },
      {
        id: 24,
        title: 'Smart India Hackathon',
        description: 'Top 10 – Smart India Hackathon',
        category: 'Competition',
      },
      {
        id: 25,
        title: 'Smart Odisha Hackathon',
        description: '2nd Prize – Smart Odisha Hackathon',
        category: 'Competition',
      },
      {
        id: 26,
        title: 'DRUSE',
        description: 'Zonal Finalists – DRUSE, DRDO',
        category: 'Competition',
      },
      {
        id: 27,
        title: 'Infosys Robotics Camp',
        description: '1st Runners-Up – Infosys Robotics Camp',
        category: 'Competition',
      },
      {
        id: 28,
        title: 'L&T Techgium',
        description: 'Finalists(2 teams) – National Final L&T Techgium',
        category: 'Competition',
      },
      {
        id: 29,
        title: "National Students' Space Challenge",
        description:
          "AIR-1 – National Students' Space Challenge, ISRO and IIT-KGP",
        category: 'Competition',
      },
      {
        id: 30,
        title: 'IIT Bombay TechFest',
        description: 'Rank-3 – Zonal Round, IIT Bombay TechFest',
        category: 'Competition',
      },
      {
        id: 31,
        title: 'IIT Bhubaneswar',
        description: 'Winners – Maze Solver, IIT Bhubaneswar',
        category: 'Competition',
      },
      {
        id: 32,
        title: 'Line Follower Event',
        description: 'Winners - Line Follower Event',
        category: 'Competition',
      },
      {
        id: 33,
        title: 'Hoverpod Event',
        description: 'Winners - Hoverpod Event',
        category: 'Competition',
      },
      {
        id: 34,
        title: 'Balance Bot Event',
        description: 'Winners - Balance Bot Event',
        category: 'Competition',
      },
      {
        id: 35,
        title: 'Image Processing Event',
        description: 'Winners and 1st Runner-Up - Image Processing Event',
        category: 'Competition',
      },
    ],
    2017: [
      {
        id: 36,
        title: 'ROBOCON Nationals',
        description: 'AIR-6 – ROBOCON Nationals (MIT Pune)',
        category: 'Competition',
      },
      {
        id: 37,
        title: 'E-Yantra Robotics Competition',
        description: 'AIR-2 – E-Yantra Robotics Competition (IIT Bombay)',
        category: 'Competition',
      },
    ],
    2016: [
      {
        id: 38,
        title: 'ROBOCON Nationals',
        description: 'AIR-20 – ROBOCON Nationals (MIT Pune)',
        category: 'Competition',
      },
      {
        id: 39,
        title: 'MATLAB Innovation Award',
        description: 'AIR-3 – MATLAB Innovation Award (MathWorks)',
        category: 'Competition',
      },
      {
        id: 40,
        title: 'E-Yantra',
        description: '3 Teams Shortlisted – E-Yantra (MHRD Funded)',
        category: 'Competition',
      },
    ],
    2015: [
      {
        id: 41,
        title: 'ROBOCON Nationals',
        description: 'AIR-26 – ROBOCON Nationals (MIT Pune)',
        category: 'Competition',
      },
      {
        id: 42,
        title: 'ROBOCON',
        description: 'AIR-27 – ROBOCON (Rank 1 in Odisha)',
        category: 'Competition',
      },
      {
        id: 43,
        title: 'E-Yantra',
        description: 'AIR-7 – E-Yantra (MHRD Funded)',
        category: 'Competition',
      },
      {
        id: 44,
        title: 'MathWorks Parrot Mini Drone Competition',
        description: '3rd Prize – MathWorks Parrot Mini Drone Competition',
        category: 'Competition',
      },
      {
        id: 45,
        title: 'TRED-O-QUEST',
        description: '1st Prize – TRED-O-QUEST (INNOVISION, NIT Rourkela)',
        category: 'Competition',
      },
      {
        id: 46,
        title: 'INNOVISION',
        description: '2nd Prize – INNOVISION (NIT Rourkela)',
        category: 'Competition',
      },
      {
        id: 47,
        title: 'ROBOVENTURE',
        description: '3rd Prize – ROBOVENTURE (INNOVISION, NIT Rourkela)',
        category: 'Competition',
      },
      {
        id: 48,
        title: 'NSSC Hoverpod',
        description: '3rd Prize – NSSC Hoverpod (IIT Kharagpur, ISRO Funded)',
        category: 'Competition',
      },
      {
        id: 49,
        title: 'Droid Blitz',
        description: 'Finalist – Droid Blitz (NSSC, IIT Kharagpur)',
        category: 'Competition',
      },
      {
        id: 50,
        title: 'Minefield',
        description: 'Best Design Award – Minefield (IIT Kharagpur)',
        category: 'Competition',
      },
      {
        id: 51,
        title: 'IIT Kharagpur',
        description: 'Best Design Bot – IIT Kharagpur',
        category: 'Competition',
      },
      {
        id: 52,
        title: 'Robotryst',
        description: '3rd Prize – Robotryst (IIT Delhi)',
        category: 'Competition',
      },
    ],
    2014: [
      {
        id: 53,
        title: 'Hoverpod',
        description: '1st Prize – Hoverpod (IIT Kharagpur)',
        category: 'Competition',
      },
      {
        id: 54,
        title: 'Aqua Robotics',
        description: '2nd Prize – Aqua Robotics (IIT Kharagpur)',
        category: 'Competition',
      },
      {
        id: 55,
        title: 'TRED-O-QUEST',
        description: '1st Prize – TRED-O-QUEST (INNOVISION, NIT Rourkela)',
        category: 'Competition',
      },
      {
        id: 56,
        title: 'INNOVISION',
        description: '2nd Prize – INNOVISION (NIT Rourkela)',
        category: 'Competition',
      },
      {
        id: 57,
        title: 'ROBOVENTURE',
        description: '3rd Prize – ROBOVENTURE (INNOVISION, NIT Rourkela)',
        category: 'Competition',
      },
    ],
    2013: [
      {
        id: 58,
        title: 'INNOVISION',
        description: '2nd Prize – INNOVISION (NIT Rourkela)',
        category: 'Competition',
      },
      {
        id: 59,
        title: 'INNOVISION',
        description: '3rd Prize – INNOVISION (NIT Rourkela)',
        category: 'Competition',
      },
    ],
    2012: [
      {
        id: 60,
        title: 'WASSEINAIR',
        description: '1st Prize – WASSEINAIR, IIT Bhubaneswar',
        category: 'Competition',
      },
      {
        id: 61,
        title: 'INNOVISION',
        description: '1st Prize – INNOVISION (NIT Rourkela)',
        category: 'Competition',
      },
      {
        id: 62,
        title: 'Hoverpod',
        description: '1st Prize – Hoverpod (IIT Kharagpur)',
        category: 'Competition',
      },
    ],
    2011: [
      {
        id: 63,
        title: 'WASSEINAIR',
        description: '1st Prize – WASSEINAIR, IIT Bhubaneswar',
        category: 'Competition',
      },
      {
        id: 64,
        title: 'ROBOCON Nationals',
        description:
          'AIR-4 – ROBOCON Nationals (MIT Pune) (Only college from Odisha to rank 4th in debut year)',
        category: 'Competition',
      },
    ],
    2008: [
      {
        id: 65,
        title: 'Kshitij',
        description: '1st Prize – Kshitij (IIT Kharagpur)',
        category: 'Competition',
      },
      {
        id: 66,
        title: 'Nexus',
        description: '2nd Prize – Nexus (IIT Bombay)',
        category: 'Competition',
      },
    ],
  }

  // Sort years in reverse order
  const sortedYears = Object.keys(achievementsByYear).sort((a, b) => b - a);

  // Generate meta description from achievements
  const metaDescription = `Explore VSSUT Robotics Society's achievements from ${sortedYears[sortedYears.length - 1]} to ${sortedYears[0]}, including competition wins, research patents, and innovative projects.`;

  // Generate structured data for achievements
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VSSUT Robotics Society",
    "url": "https://vssut-robotics-society.com",
    "description": metaDescription,
    "award": sortedYears.map(year => 
      achievementsByYear[year].map(achievement => ({
        "@type": "Award",
        "name": achievement.title,
        "description": achievement.description,
        "awardedFor": achievement.category,
        "dateReceived": year
      }))
    ).flat()
  };

  const imageData = generateImageMetadata(
    '/images/achievement1.jpg',
    'VSSUT Robotics Society Achievement',
    800,
    600
  );

  return (
    <>
      <SEO 
        title="Our Achievements"
        description={metaDescription}
        url="https://vssut-robotics-society.com/achievements"
      />
      <Helmet>
        <title>Our Achievements | VSSUT Robotics Society</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="VSSUT Robotics Society, achievements, robotics competitions, research patents, innovation awards, robotics research, student achievements" />
        <meta property="og:title" content="Our Achievements | VSSUT Robotics Society" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/achievement1.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Achievements | VSSUT Robotics Society" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/images/achievement1.jpg" />
        <link rel="canonical" href="https://vssut-robotics-society.com/achievements" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="achievements-page" role="main">
        <Navbar />
        <div className="achievements-container">
          <header>
            <h1 className="achievements-title">Our Achievements</h1>
            <h2 className="achievements-subtitle">TOP HIGHLIGHTS</h2>
          </header>
          
          <section className="achievements-timeline" aria-label="Achievements timeline">
            {sortedYears.map((year) => (
              <article key={year} className="year-section">
                {year === "2025" && (
                  <YearSlideshow 
                    images={slideshowImages} 
                    videos={slideshowVideos}
                    aria-label="2025 achievements slideshow"
                  />
                )}
                <div className="year-header">
                  <h2 className="year-title">{year}</h2>
                  <div className="year-indicator" aria-hidden="true"></div>
                </div>
                <div className="achievements-grid" role="list">
                  {achievementsByYear[year].map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className="achievement-card"
                      role="listitem"
                      itemScope
                      itemType="https://schema.org/Award"
                    >
                      <div className="achievement-header">
                        <h3 itemProp="name">{achievement.title}</h3>
                      </div>
                      <p className="achievement-description" itemProp="description">
                        {achievement.description}
                      </p>
                      <div className="achievement-footer">
                        <span 
                          className="achievement-category"
                          aria-label={`Category: ${achievement.category}`}
                          itemProp="awardedFor"
                        >
                          {achievement.category}
                        </span>
                        <meta itemProp="dateReceived" content={year} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Achievements; 