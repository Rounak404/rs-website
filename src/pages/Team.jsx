import React, { useState } from 'react';
import MemberCard from '../components/MemberCard';
import '../styles/Team.css';
import { FaGithub, FaLinkedin , FaInstagram } from 'react-icons/fa';



const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const yearFilters = ['Final Years', 'Pre Final Years', 'Sophomores'];

  const getYearGroup = (filter) => {
    switch (filter) {
      case 'Sophomores': return ['2'];
      case 'Pre Final Years': return ['3'];
      case 'Final Years': return ['4'];
      default: return [];
    }
  };

  const teamMembers = [
    //Sophomores
    {
      id: 3,
      name: 'Abhay Kumar Sahani',
      role: '',
      branch: 'Civil Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Abhay.jpg',
      github: 'https://github.com/redabhay',
      linkedin:
        'https://www.linkedin.com/in/abhay-sahani-9073b4296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 32,
      name: 'Abinash Dash',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Abinash.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/abinash-dash-a513751b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 46,
      name: 'Aditya Pradhan',
      role: '',
      branch: 'Mechanical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/AdityaP.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/aditya-padhan-a37467358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 34,
      name: 'Aditya Swarup Khuntia',
      role: '',
      branch: 'E & TC Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Aditya.jpg',
      github: 'https://github.com/Aditya-Swarup26',
      linkedin:
        'https://www.linkedin.com/in/aditya-swarup-khuntia-1b3a64311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 18,
      name: 'Anibes Mohanty',
      role: '',
      branch: 'Electrical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Anibes.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 54,
      name: 'Ankita Priyadarsini Nayak',
      role: '',
      branch: 'Chemical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Ankita.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/ankita-priyadarsini-nayak-777342319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 45,
      name: 'Ansika Priyadarshini Mishra',
      role: '',
      branch: 'Mechanical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Ansika.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/ansika-priyadarshini-mishra-712877365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 21,
      name: 'Anshik Meher',
      role: '',
      branch: 'Electrical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Anshik.jpg',
      github: 'https://github.com/anshik347',
      linkedin:
        'https://www.linkedin.com/in/anshik-meher-218996333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:
        'https://www.instagram.com/ansh_ik348?igsh=MTI2ZDR4aW4zeHE1dg==',
    },
    {
      id: 4,
      name: 'Anushka Priyadarshini',
      role: '',
      branch: 'Civil Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Anushka Priyadarshini.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 28,
      name: 'Aradhya Rath',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      // projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Aradhya.jpg',
      github: 'https://github.com/ara-ve',
      linkedin: '',
      instagram: '',
    },
    {
      id: 30,
      name: 'Arpita Majumdar',
      role: '',
      branch: 'Computer Science and Engg.(AI & ML)',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Arpita.jpg',
      github: 'https://github.com/Arpita-09-ai',
      linkedin: 'https://www.linkedin.com/in/arpita-majumder-03399b283',
      instagram: '',
    },
    {
      id: 6,
      name: 'Aryan Rajguru',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      bio: ' Professional Ctrl+C , Ctrl+V Engineer',
      image: '/teamimages/AryanR.jpg',
      github: 'https://github.com/Aryan-R-18',
      linkedin: 'https://www.linkedin.com/in/aryan-rajguru-a1333230a/',
      instagram: 'https://www.instagram.com/vln_aryan_18/',
    },
    {
      id: 23,
      name: 'Aryaman Singh',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Aryaman.webp',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 26,
      name: 'Bikash Barik',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Bikash.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 49,
      name: 'Chandini Suhagini',
      role: '',
      branch: 'MME',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Chandini.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 14,
      name: 'Chinnari Harsha Vardhan',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Harsha.jpg',
      github: 'https://github.com/chinnariharshavardhan',
      linkedin: 'https://www.linkedin.com/in/harsha-vardhan-chinnari-578729330',
      instagram:
        'https://www.instagram.com/pro_harsha49?igsh=MW0wdncyMG9iM2F0bQ==&utm_source=ig_contact_invite',
    },
    {
      id: 7,
      name: 'Debidutta Sahoo',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Debidutta.jpg',
      github: 'https://github.com/Deb-269',
      linkedin: 'www.linkedin.com/in/debidutta-sahoo-64455a336',
      instagram: 'https://www.instagram.com/debb.rxy?igsh=Ymp1NWpkYTk2eWph',
    },
    {
      id: 27,
      name: 'Dibyajyoti Samal',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Dibya.jpeg',
      github: 'https://github.com/scs-flick',
      linkedin:
        'https://www.linkedin.com/in/dibyajyoti-samal-52a433213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: '',
    },
    {
      id: 1,
      name: 'Dibyaseni Sethi',
      role: '',
      branch: 'Civil Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/DibyaSeni.jpeg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 22,
      name: 'Gayatrirani Samantaray',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Gayatrirani.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/gayatrirani-samantaray-69a128362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/_gayatrirani_/',
    },
    {
      id: 40,
      name: 'Hari Shah',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Hari.jpg',
      github: 'https://github.com/hhis1',
      linkedin: 'http://www.linkedin.com/in/hari-shah-2b8797343',
      instagram: '',
    },
    {
      id: 55,
      name: 'Jyotiraditya Biswal',
      role: '',
      branch: 'Chemical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Jyoti.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 44,
      name: 'Kamal Muduli',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Kamal.jpg',
      github: 'https://github.com/kamal345z',
      linkedin:
        'https://www.linkedin.com/in/kamal-kumar-muduli-5a6683307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 41,
      name: 'Mahasangram Kar',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: [],
      bio: 'Kabhi Win Hota He... To Kabhi Learn Hota He ...',
      image: '/teamimages/Mahasangram.jpg',
      github: '',
      linkedin: 'https://www.linkedin.com/in/mahasangram-kar-52b11232b',
      instagram: '',
    },
    {
      id: 33,
      name: 'Manas Babu',
      role: 'ASSISTANT COORDINATOR',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Manas.jpeg',
      github: '',
      linkedin: 'https://in.linkedin.com/in/manas-babu-247a27359',
      instagram: '',
    },
    {
      id: 42,
      name: 'Mantosh Barik',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Mantosh.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/mantosh-kumar-barik-a02827276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 11,
      name: 'Nityananda Giri',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/NityanandaGiri.jpg',
      github: 'https://github.com/Nitin119-web',
      linkedin:
        'https://www.linkedin.com/in/nityananda-giri-716151361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/nitinn.__01/',
    },
    {
      id: 2,
      name: 'Peeyush Priyadarshan Rana',
      role: '',
      branch: 'Civil Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Peeyush.jpg',
      github: '',
      linkedin: '',
      instagram:
        'https://www.instagram.com/_peeyush__rana_?igsh=OXh6aGRiMnAzeXhw',
    },
    {
      id: 13,
      name: 'Pratyush Parida',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Pratyush.jpg',
      github: 'https://github.com/Pratyush1104',
      linkedin:
        'https://www.linkedin.com/in/pratyush-parida-16a8a7315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 36,
      name: 'Pritam Swain',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Pritam.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/pritam-swain-180289327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 8,
      name: 'Remit Kumar Patra',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      bio: "Existence is pain, unless you're solving problems like a caffeinated Meeseeks",
      image: '/teamimages/Remit2.jpg',
      github: 'https://github.com/NotRemit',
      linkedin: 'https://www.linkedin.com/in/remit-patra',
      instagram: '',
    },
    {
      id: 20,
      name: 'Roshan Dang',
      role: '',
      branch: 'Electrical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Roshan2.jpg',
      github: '',
      linkedin: '',
      instagram:
        'https://www.instagram.com/roshan_x_69?igsh=MWk2dWJrNDVibWxuZg==',
    },
    {
      id: 47,
      name: 'Roshan Kumar',
      role: '',
      branch: 'Mechanical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Roshan.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 37,
      name: 'Rounak Senapati',
      role: '',
      branch: 'Computer Science and Engg.(AI & ML)',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Too restless to exist, too curious to stop',
      image: '/teamimages/Rounak.jpg',
      github: 'https://github.com/rouna-k',
      linkedin:
        'https://www.linkedin.com/in/rounak-senapati-60416b2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 31,
      name: 'Rudra Narayan Panda',
      role: '',
      branch: 'E & TC Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/rudra.jpg',
      github: 'https://github.com/Rudra0Panda',
      linkedin:
        'https://www.linkedin.com/in/rudra-narayan-panda-62a770303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 35,
      name: 'Sai Satyaprakash Parida',
      role: '',
      branch: 'E & TC Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Sai.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/sai-satyaprakash-parida-b9599834a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 24,
      name: 'Samagnya Dash',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Turning caffeine into questionable life choices😔✋.',
      image: '/teamimages/Samagnya.jpg',
      github: 'https://github.com/Samagnyadash30',
      linkedin:
        'https://www.linkedin.com/in/samagnya-dash-ab2773212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/_.samagnya_dash._/',
    },
    {
      id: 52,
      name: 'Santosh Panda',
      role: '',
      branch: 'Production Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Santosh.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 10,
      name: 'Sayeda Saba Amtul Hallim',
      role: 'ASSISTANT COORDINATOR',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'In between chaos and deadlines',
      image: '/teamimages/Saba.jpg',
      github: 'https://github.com/SayedaSaba',
      linkedin:
        'https://www.linkedin.com/in/sayeda-saba-amtul-hallim-827386315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/sayeda._/',
    },
    {
      id: 43,
      name: 'Shimadri Yashwant',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Shimadri.jpg',
      github: 'https://github.com/Yaswant2006',
      linkedin:
        'https://www.linkedin.com/in/simhadri-yaswant-a4b267342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 16,
      name: 'Shradha Suman Mohapatra',
      role: '',
      branch: 'Electrical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Shradha.jpeg',
      github: 'https://github.com/Shradha-Suman-Mohapatra',
      linkedin: '',
      instagram: 'https://www.instagram.com/_itz.shradha.here_/',
    },
    {
      id: 39,
      name: 'Sidhartha Kumar Nayak',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Sidhartha.jpg',
      github: 'https://github.com/itsSidshub?tab=repositories',
      linkedin:
        'https://www.linkedin.com/in/sidhartha-kumar-nayak-042432357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:
        'https://www.instagram.com/imsidhartha27?igsh=MWxlaTZxb2IwYjNraQ==',
    },
    {
      id: 15,
      name: 'Somya Tridarsini Dash',
      role: '',
      branch: 'Electrical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Somya.jpg',
      github: 'https://github.com/SomyaTDash',
      linkedin: 'https://www.linkedin.com/in/somyatridarsinidash',
      instagram: 'https://www.instagram.com/_somyatridarsini_/',
    },
    {
      id: 51,
      name: 'Soumit Kumar Mohanta',
      role: '',
      branch: 'Production Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Soumit.jpg',
      github: 'https://github.com/soumit2024',
      linkedin:
        'https://www.linkedin.com/in/soumit-kumar-mohanta-a74261349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap',
      instagram: '',
    },
    {
      id: 38,
      name: 'Soumya Ranjan Behera',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Soumya.png',
      github: 'https://github.com/SoumyaRanjanBehera-git',
      linkedin:
        'https://www.linkedin.com/in/soumya-ranjan-behera-7a1264355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 25,
      name: 'Sriyanshu Sekhar Pradhan',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Sriyanshu.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 50,
      name: 'Stuti Agarwal',
      role: '',
      branch: 'Production Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Stuti.jpg',
      github: 'https://github.com/StutiAgarwall',
      linkedin:
        'https://www.linkedin.com/in/stuti-agarwal-1b7252340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 29,
      name: 'Suhani Sabat',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Suhani.jpg',
      github: 'https://github.com/suhani-sabat?tab=achievements',
      linkedin: 'https://www.linkedin.com/in/suhani-sabat-5b96a5316',
      instagram: '',
    },
    {
      id: 5,
      name: 'Suman Dash',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: [],
      skills: [],
      bio: ' Mujhe Farak Nahi Ye Zamana Kya Kehta Hai',
      image: '/teamimages/SumanD.jpg',
      github: 'https://github.com/sumandashw16',
      linkedin:
        'https://www.linkedin.com/in/suman-dash-219163319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:
        'https://www.instagram.com/suman_dash_w16?igsh=NXQzd3dzdncyaDh2',
    },
    {
      id: 17,
      name: 'Suman Rath',
      role: '',
      branch: 'Electrical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/SumanR.png',
      github: 'https://github.com/SiniLemon',
      linkedin: '',
      instagram: 'https://www.instagram.com/suman_27506?igsh=Mmx0MXo4ZzhjbDd4',
    },
    {
      id: 19,
      name: 'Sunil Sahu',
      role: '',
      branch: 'Electrical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Sunil.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 48,
      name: 'Supriya Patra',
      role: '',
      branch: 'MME',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/SupriyaP.png',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 9,
      name: 'Swagatika Bhairab Sahu',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Swagatika.png',
      github: 'https://github.com/swagatikabhairab',
      linkedin: 'www.linkedin.com/in/swagatika-bhairab-sahu-59a34a34a',
      instagram:
        'https://www.instagram.com/_sswagatikka?utm_source=qr&igsh=enYzM2RseWpuM2Zu',
    },
    {
      id: 12,
      name: 'Swaraj Soubhagya Khandai',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Swaraj.jpg',
      github: '',
      linkedin: '',
      instagram: 'https://www.instagram.com/_9swaraj?igsh=ajZha3AzYzA0dm1x',
    },
    {
      id: 53,
      name: 'Trisha Samal',
      role: '',
      branch: 'Production Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      // skills: ['Python', 'ROS', 'Computer Vision'],
      // bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Trisha.jpg',
      github: 'https://github.com/trishglitch1',
      linkedin: '',
      instagram: '',
    },

    //pre-final year

    {
      id: 59,
      name: 'Aditi Panda',
      role: '',
      branch: 'Computer Science and Engineering',
      year: '3',
      bio: 'specializes in Data Science and Data Analysis',
      image: '/prefinal/Aditi.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/aditi-panda-6987552ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 67,
      name: 'Ambika Prasad Dora',
      role: '',
      branch: 'Electrical Engineering ',
      year: '3',
      bio: 'specializes in Arduino and Structural',
      image: '/prefinal/Bunu.jpg',
      github: 'https://github.com/ambika-0007',
      linkedin: 'https://www.linkedin.com/in/ambika-prasad-dora-1557b028a',
      instagram: '',
    },
    {
      id: 98,
      name: 'Anwesha Das',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Anwesha.jpg',
      github: 'https://github.com/Anweshaadas',
      linkedin:
        'https://www.linkedin.com/in/anwesha-dash-b11a32284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      id: 61,
      name: 'Arnav Nayak ',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Arnav.jpg',
      github: 'https://github.com/ImArnavNayak0',
      linkedin:
        'https://www.linkedin.com/in/arnav-nayak-46b966319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 95,
      name: 'Banishree Sharma',
      role: '',
      branch: 'Metallurgical and materials Engineering',
      year: '3',
      bio: 'specializes in Arduino and Structural',
      image: '/prefinal/Banishree.jpg',
      github: 'https://github.com/Bani39',
      linkedin: 'www.linkedin.com/in/banishree-sharma-06554b308',
    },
    {
      id: 58,
      name: 'Biswajit Mallik',
      role: '',
      branch: 'Information Technology',
      year: '3',
      bio: 'specializes in Python and OpenCV',
      image: '/prefinal/Biswajit.jpg',
      github: 'https://github.com/Bit-Mik',
      linkedin:
        'https://www.linkedin.com/in/biswajit-mallik-b4k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 96,
      name: 'Dhiraj Agarwal',
      role: '',
      branch: 'Electrical Engineering',
      year: '3',
      bio: 'specializes in Arduino and Structural',
      image: '/prefinal/Dhiraj.jpg',
      github: 'https://github.com/Coder-Dhiraj',
      linkedin:
        'https://www.linkedin.com/in/dhiraj-agrawal-25b93530a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      id: 71,
      name: 'Gantyada Vasudev ',
      role: 'COORDINATOR',
      branch: 'Civil Engineering ',
      year: '3',
      bio: 'specializes in Arduino and Structural',
      image: '/prefinal/Vasudev.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/vasudev-gantyada-4ab91a292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 62,
      name: 'Himansu Sekhar Baral',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Himanshu.jpg',
      github: 'https://github.com/HIMANSUsekharBaral',
      linkedin:
        'https://www.linkedin.com/in/himansu-sekhar-baral-0674852aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 90,
      name: 'Jateen Kumar Sahu',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Jateen.jpg',
      github: 'https://github.com/jateen2k3',
      linkedin:
        'https://www.linkedin.com/in/jateen-kumar-sahu-1b9710296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 65,
      name: 'Kothakota Vidhya Sai',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Vidya.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/vidhya-sai-kothakota-493a39229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 56,
      name: 'Prerana Priyadarsini Das',
      role: 'COORDINATOR',
      branch: 'Information Technology',
      year: '3',
      bio: 'Specializes in Data Science and Data Analysis',
      image: '/prefinal/prerana.jpg',
      github: 'https://github.com/preranadas2003',
      linkedin:
        'https://www.linkedin.com/in/preranapriyadarsinidas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 68,
      name: 'P Rituparna Ram',
      role: '',
      branch: 'Electrical Engineering ',
      year: '3',
      bio: 'specializes in Arduino and Python',
      image: '/prefinal/Rituparna.jpg',
      github: '',
      linkedin: '',
      instagram: '',
    },
    {
      id: 57,
      name: 'Pattanaik Ayushman Alok',
      role: '',
      branch: 'Information Technology',
      year: '3',
      bio: 'specializes in Web Development and OpenCV',
      image: '/prefinal/Ayushman.jpg',
      github: 'https://github.com/Losthero1640',
      linkedin:
        'https://www.linkedin.com/in/pattanaik-ayushman-alok-b66a90273/',
      // instagram: 'https://www.instagram.com/https://www.instagram.com/_.ayushman._00/'
    },
    {
      id: 94,
      name: 'Rasabihari Meher',
      role: '',
      branch: 'Electrical Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Rasabihari.jpg',
      github: 'https://github.com/Rasabihari-Meher',
      linkedin: 'www.linkedin.com/in/rasbihari-meher-3559aa2b3',
    },
    {
      id: 63,
      name: 'Reetika Acharya',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Reetika.jpg',
      github: 'https://github.com/Reetika-A',
      linkedin:
        'https://www.linkedin.com/in/reetika-acharya-9a2012311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 69,
      name: 'Saswatee Satapathy',
      role: '',
      branch: 'Mechanical Engineering',
      year: '3',
      bio: 'specializes in Arduino and CAD',
      image: '/prefinal/Saswatee.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/saswatee-satapathy-253873293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 66,
      name: 'Sai Priyadarshini Swain ',
      role: '',
      branch: 'Electrical Engineering ',
      year: '3',
      bio: 'specializes in Arduino and Structural',
      image: '/prefinal/Sai.jpg',
      github: 'https://github.com/Saiiee12',
      linkedin: 'https://www.linkedin.com/in/sai-priyadarshini-swain-18490a311',
      instagram: '',
    },
    {
      id: 97,
      name: 'Shreya Dash',
      role: '',
      branch: 'Chemical Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Shreya.jpg',
      github: 'https://github.com/Shreya-Dash',
      linkedin: 'https://www.linkedin.com/in/shreya-dash-aab7b6340',
    },
    {
      id: 64,
      name: 'Suryakanta balabantaray ',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Bunty.jpg',
      github: '',
      linkedin: 'https://www.linkedin.com/in/suryakanta-balabantaray-90a941324',
      instagram: '',
    },
    {
      id: 60,
      name: 'Sumanta Kumar Dutta',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '3',
      bio: 'specializes in Arduino and Electronics',
      image: '/prefinal/Sumanta.jpg',
      github: 'https://github.com/SumantaDutta5',
      linkedin: 'www.linkedin.com/in/sumanta-kumar-dutta-41a834293',
      instagram: '',
    },
    {
      id: 70,
      name: 'Sourav Padhy',
      role: '',
      branch: 'Civil Engineering ',
      year: '3',
      bio: 'specializes in Arduino and Python',
      image: '/prefinal/Sourav.jpeg',
      github: 'https://github.com/souravpadhy',
      linkedin: 'https://www.linkedin.com/in/sourav-padhy-0b0515292/',
      instagram: '',
    },

    //final year
    {
      id: 74,
      name: 'Aklant Kumar Sahu',
      role: '',
      branch: 'Electronics And Telecommunication Engineering ',
      year: '4',
      image: '/Final/Aklant.jpg',
      github: '',
      linkedin: 'https://www.linkedin.com/in/aklant-sahu-3a0421257',
      instagram: '',
    },
    {
      id: 80,
      name: 'Amlan Ku. Sahu',
      role: 'GRAPHICS DESIGNING',
      branch: 'Metallurgical and Materials Engineering',
      year: '4',
      image: '/Final/Amlan.jpg',
      github: 'https://github.com/Amlan77',
      linkedin:
        'https://www.linkedin.com/in/amlan-kumar-sahu-172121251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 86,
      name: 'Ashutosh Panigrahi',
      role: '',
      branch: 'Inforrmation Technology ',
      year: '4',
      image: '/Final/Asutosh.JPG',
      github: 'https://github.com/ashutosh1869',
      linkedin: 'https://www.linkedin.com/in/ashutosh-panigrahi-7701a01b2/',
      instagram: '',
    },
    {
      id: 84,
      name: 'Chinmaya Kumar Behera',
      role: '',
      branch: 'Information Technology ',
      year: '4',
      image: '/Final/Chinmay.jpg',
      github: 'https://github.com/Achyuta121',
      linkedin:
        ' https://www.linkedin.com/in/chinmaya-kumar-behera-736561276/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3BuuomIc7nRsu1s9ZlfrXjAw%3D%3D',
      instagram: '',
    },
    {
      id: 73,
      name: 'Debashish Budek',
      role: '',
      branch: 'Metallurgical and Materials Engineering ',
      year: '4',
      image: '/Final/Debasish.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/debashish-budek-0531b5290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 91,
      name: 'Divyanshu Gupta ',
      role: '',
      branch: 'ELECTRONICS AND TELECOMMUNICATION ENGINEERING',
      year: '4',
      image: '/Final/Divyanshu.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/divyanshu-gupta-a61188285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 77,
      name: 'Indrajit Pani',
      role: '',
      branch: 'Electrical and Electronics Engineering ',
      year: '4',
      image: '/Final/Indrajit.jpg',
      github: '',
      linkedin: 'https://www.linkedin.com/inm/indrajit-pani-3a5683249',
      instagram: '',
    },
    {
      id: 93,
      name: 'Parthasarathi Swain',
      role: '',
      branch: 'Electrical Engineering ',
      year: '4',
      image: '/Final/Partha.jpg',
      github: 'https://github.com/Partha45677',
      linkedin:
        'https://www.linkedin.com/in/parthasarthi-swain-86b1862a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 87,
      name: 'Lipsamayee Mahanta',
      role: '',
      branch: 'Information Technology',
      year: '4',
      image: '/Final/Lipsamayee.jpg',
      github: 'https://github.com/Lipsa01',
      linkedin: 'https://www.linkedin.com/in/lipsa7mayee/',
      instagram: '',
    },
    {
      id: 92,
      name: 'Saleena Das',
      role: '',
      branch: 'Information Technology',
      year: '4',
      image: '/Final/saleena.jpg',
      github: '',
      linkedin: 'https://www.linkedin.com/in/saleena-das-a57866202/',
      instagram: '',
    },
    {
      id: 79,
      name: 'Satyashree Dash',
      role: 'GRAPHICS DESIGNING',
      branch: 'Electrical Engineering ',
      year: '4',
      image: '/Final/Satyashree.png',
      github: '',
      linkedin: 'www.linkedin.com/in/satya71',
      instagram: '',
    },
    {
      id: 89,
      name: 'Shanti Sworup Biswal',
      role: 'RESEARCH AND PLANNING',
      branch: 'Metallurgical and Materials Engineering',
      year: '4',
      image: '/Final/Shanti.jpg',
      github: 'https://github.com/Shantisworup07',
      linkedin: 'https://www.linkedin.com/in/shantisworup07/',
      instagram: '',
    },
    {
      id: 83,
      name: 'Shreeti Mohapatra',
      role: '',
      branch: 'Information Technology ',
      year: '4',
      image: '/Final/Shreeti.jpeg',
      github: 'https://github.com/shivah12',
      linkedin: 'https://www.linkedin.com/in/shreeti-mohapatra-ba8715252/',
      instagram: '',
    },
    {
      id: 85,
      name: 'Sibananda Bishoyi ',
      role: '',
      branch: 'Electrical and Electronics Engineering ',
      year: '4',
      image: '/Final/Sibananda.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/sibananda-bishoyi-b7688a309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 81,
      name: 'Smruti Srabani Sahoo',
      role: 'CONTENT WRITING',
      branch: 'Electrical Engineering  ',
      year: '4',
      image: '/Final/Smruti.jpg',
      github: '',
      linkedin: 'https://www.linkedin.com/in/smruti-srabani-sahoo-98120824a',
      instagram: '',
    },
    {
      id: 76,
      name: 'Soham Dhal',
      role: '',
      branch: 'Electronics And Telecommunication Engineering ',
      year: '4',
      image: '/Final/Soham.jpg',
      github: 'https://github.com/Sohamdhal',
      linkedin:
        'https://www.linkedin.com/in/soham-dhal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 75,
      name: 'Sonalika Mohanty ',
      role: '',
      branch: 'Mechanical Engineering',
      year: '4',
      image: '/Final/Sonalika.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/sonalika-mohanty-664933258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },
    {
      id: 78,
      name: 'Soumyajit Pattanaik',
      role: 'RESEARCH AND PLANNING',
      branch: 'Electrical Engineering ',
      year: '4',
      image: '/Final/Soumyajit.webp',
      github: 'GitHub.com/RockOnJeet',
      linkedin: 'https://www.linkedin.com/in/soumyajit-pattanaik',
      instagram: '',
    },
    {
      id: 99,
      name: 'Spandan Tripathy',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '4',
      image: '/Final/Spandan.jpg',
      github: '',
      linkedin: 'https://www.linkedin.com/in/spandan-tripathy-746a842a8/',
    },
    {
      id: 88,
      name: 'Subham Mishra',
      role: 'VIDEOGRAPHY',
      branch: 'Electronics And Telecommunication Engineering ',
      year: '4',
      image: '/Final/Subham.JPG',
      github: 'https://github.com/subhamctc3007',
      linkedin: 'https://www.linkedin.com/in/subham-mishra-576b001b2/',
      instagram: '',
    },
    {
      id: 72,
      name: 'T ACHYUTA PATRO ',
      role: '',
      branch: 'Electronics And Telecommunication Engineering ',
      year: '4',
      image: '/Final/Achyuta.jpg',
      github: 'https://github.com/Achyuta121',
      linkedin: 'https://www.linkedin.com/in/tachyutapatro',
      instagram: '',
    },
    {
      id: 82,
      name: 'Tarini prasad Dash ',
      role: 'CONTENT WRITING',
      branch: 'Electrical Engineering ',
      year: '4',
      image: '/Final/Tarini.jpg',
      github: '',
      linkedin:
        'https://www.linkedin.com/in/tarini-prasad-dash-808629279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: '',
    },

    // last id is 99 for anyone developing start from 100 next
  ]

  const filteredMembers = activeFilter
    ? teamMembers.filter(member => getYearGroup(activeFilter).includes(member.year))
    : teamMembers;

  return (
  <div className="team-page">
    <div className="container">
      <h1 className="section-title">Our Team</h1>

      {selectedMember ? (
        <div className="member-detail">
          <button className="back-btn" onClick={() => setSelectedMember(null)}>
            &larr; Back to Team
          </button>
          <div className="detail-content">
            <img 
              src={selectedMember.image} 
              alt={selectedMember.name} 
              className="detail-image"
            />
            <div className="detail-info">
              <h2>{selectedMember.name}</h2>
              <p className="role">{selectedMember.role}</p>

              <div className="detail-section">
                <h3>About</h3>
                <p>{selectedMember.bio}</p>
              </div>

              <div className="detail-section">
                <h3>Academic Information</h3>
                <p><strong>Branch:</strong> {selectedMember.branch}</p>
                <p><strong>Year:</strong> {selectedMember.year}</p>
              </div>

              

              <div className="detail-section">
                <h3>Connect</h3>
                <div className="social-links">
                  {selectedMember.github && (
                    <a 
                      href={selectedMember.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-link"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {selectedMember.linkedin && (
                    <a 
                      href={selectedMember.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-link"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {/* {selectedMember.instagram && (
                    <a 
                      href={selectedMember.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-link"
                    >
                      <FaInstagram size={24} />
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="filter-buttons">
            {yearFilters.map(filter => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)} 
                className={activeFilter === filter ? 'active-filter' : ''}
              >
                {filter}
              </button>
            ))}
            <button 
              onClick={() => setActiveFilter(null)} 
              className={!activeFilter ? 'active-filter' : ''}
            >
              All
            </button>
          </div>

          <div className="team-grid">
           {(activeFilter 
              ? filteredMembers 
              : [...teamMembers].sort((a, b) => {
                  const order = { '4': 0, '3': 1, '2': 2 }; // Priority: Final -> Pre-Final -> Sophomore
                  return order[a.year] - order[b.year];
                })
            ).map(member => (
    <         MemberCard 
                key={member.id} 
               member={member} 
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  </div>
);

};

export default Team;

