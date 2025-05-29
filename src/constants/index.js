export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Andre was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Andre\'s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He\'s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can\'t say enough good things about Andre. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Andre was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Worldednet - Comprehensive Event Management Platform',
    desc: 'Worldednet is a sophisticated event management and ticketing platform designed to handle large-scale events with ease. Featuring advanced ticket management, Stripe payment integration, and comprehensive user/admin dashboards, it provides a complete solution for event organizers and attendees.',
    subdesc:
      'Built with TypeScript, Next.js, and modern web technologies, Worldednet includes complex emailing systems, membership management, QR code ticket generation and scanning, real-time analytics, and robust security features. Designed to handle high-traffic events and provide seamless user experiences.',
    href: 'https://worldednet.com',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Pittura Group - Digital Platform',
    desc: 'Developed a comprehensive digital platform for Pittura Group, a leading IT development company. The project involved creating a modern, responsive website that showcases their portfolio of custom software solutions and development services.',
    subdesc:
      'Built with a focus on performance and user experience, the platform features a custom content management system, service showcases, and client success stories. Implemented modern web technologies to ensure fast load times and seamless navigation across all devices.',
    href: 'https://pitturagroup.com',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#1A1A2E',
      border: '0.2px solid #2D2D5A',
      boxShadow: '0px 0px 60px 0px rgba(45, 45, 90, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/framer.png', // Using framer icon as placeholder
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/tailwindcss.png', // Using tailwind icon as placeholder for MongoDB
      },
    ],
  },
  {
    title: 'Libertarian Party - Website Redevelopment & Optimization',
    desc: 'Led the complete redevelopment of the Libertarian Party\'s official website, coordinating with large cross-functional teams including marketing, design, and content specialists. Successfully transformed the platform to handle over 500,000 monthly users while maintaining exceptional performance and security standards.',
    subdesc:
      'Implemented comprehensive speed optimization techniques, extensive database cleanup and restructuring, real-time monitoring systems, and scalable architecture. Coordinated with marketing teams for content strategy, design teams for UI/UX improvements, and handled high-traffic political campaigns with zero downtime during critical election periods.',
    href: 'https://lp.org',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Rescue The Republic - Massive Political Rally Platform',
    desc: 'Managed the complete digital infrastructure for "Rescue The Republic," a groundbreaking political rally that made viewing history. Responsible for everything from website development to live streaming architecture, delivering an unprecedented digital experience that reached millions of viewers worldwide.',
    subdesc:
      'Achieved remarkable results: 4M+ streams across all platforms, 100K streams directly on the website, #1 trending on X Politics, became the most viewed rally on X ever, and ranked in TOP 50 most viewed private live streams ever. Built robust streaming infrastructure, real-time analytics, multi-platform distribution, and scalable architecture to handle massive concurrent viewership during this historic political event.',
    href: 'https://rescuetherepublic.com',
    texture: '/textures/project/project4.jpeg',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Libertarian Party',
    pos: 'Senior Developer',
    duration: 'April 2023 - April 2025',
    title: "I am currently working alongside the Libertarian Party of the united states as their main IT developer. My responsibilities include developing 6 projects varying across Political Rally's, Candidate website templates, Ticketing platform for events, Mobile application for Party Members. Handling events of over 100,000 attendees, and high-risk websites prone to very heavy cyber-attacks. Not once has any project gone down.",
    icon: '/assets/libertarian-party.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'La WAB',
    pos: 'Lead Developer',
    duration: 'December 2023 - January 2025',
    title: "As Lead Developer at La WAB France, I was responsible for spearheading innovative software solutions and guiding cross functional teams to execute impactful digital strategies.",
    icon: '/assets/lawab.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Emoteyes',
    pos: 'Web3 Developer',
    duration: 'January 2022 - June 2022',
    title: "As a web3 developer, my primary focus was on creating a unique and valuable NFT collection and building a website that showcased its features. I worked with blockchain technology and smart contracts to ensure the security and authenticity of the NFTs. I collaborated with artists and designers to create visually stunning and creative NFTs that were appealing to collectors.",
    icon: '/assets/emoteyes.svg',
    animation: 'salute',
  },
];
