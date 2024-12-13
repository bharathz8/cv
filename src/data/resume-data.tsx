import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bharath Kumar G",
  initials: "G",
  location: "Bengaluru, Karnataka",
  locationLink: "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9537902,77.3012781,10z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?sca_esv=ee0ce238400f6c7c&sca_upv=1&output=search&q=bangalore&source=lnms&ved=1t:200715&ictx=111&entry=tts",
  about:
    "Meticulous Full Stack Engineer crafting high-performance software solutions.",
  summary: (
    <>
     Dedicated Full Stack Developer with expertise in crafting dynamic, user-friendly web applications. Proficient in both front-end and back-end development, I deliver seamless, scalable solutions that enhance user experience and meet complex technical requirements.
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQG324re2IEBgg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723185136744?e=1739404800&v=beta&t=45hrK_uSi7GsC7QA5IWhDdbRG3NdYHEo0pGc_z-GCJM",
  personalWebsiteUrl: "https://bharathz.xyz",
  contact: {
    email: "bharathkumargwork8@gmail.com",
    tel: "+918618913622",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bharathz8/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bharath-kumar-g-bk8/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Kingluffyz",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "The Oxford College Of Science",
      degree: "Bachelor's computer application (BCA)",
      start: "2021",
      end: "2024",
    },
  ],


  work: [
    {
      company: "Prinston Smart Engineers",
      link: "https://prinstonsmart.com/",
      badges: [
        "Python",
        "Machine Learning"
      ],
      title: "Machine Learning Intern",
      start: "2024",
      end: "2024",
      description: (
        <>
          Completed a Machine Learning internship at Prinston Smart Engineers, focusing on predictive models and medical imaging.
          <ul className="list-inside list-disc">
            <li>
            Car Evaluation Model: Achieved 90% prediction accuracy using decision trees, random forests, and SVMs
            </li>
            <li>
              Medical Imaging Projects: Increased detection accuracy by 75% for eye cataracts and 85% for brain tumors
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelancer",
      link: "",
      badges: ["Remote", "React", "smart contracts", "web3", "Node"],
      title: "full stack devloper & Admin",
      start: "2022",
      end: "2023",
      description: (
        <>
          Worked as a Junior Developer and Admin at Crypto3dPunks, DragonFam, CryberianFT, and EternalSeals, contributing to smart contract development and NFT management.
          <ul className="list-inside list-disc">
            <li>
            Smart Contracts: Developed and deployed over 20 smart contracts on Ethereum and Solana, ensuring 100% functionality and
            security
            </li>
            <li>
            NFT Generation: Created and managed 100,000+ unique NFTs for clients, enhancing digital asset quality.
            </li>
          </ul>
        </>
      ),
    },
  ],

  skills: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node",
    "Express",
    "MongoDB",
    "Postgres",
    "Restful APIs",
    "Git",
    "Github",
    "Windows",
    "Linux",
    "SDLC",
    "Soft SKills"
  ],

  projects: [
    {
      title: "PathGPT",
      techStack: ["React", "Gemini API", "state Management"],
      description:
        "PathGPT is an AI platform that suggests personalized career paths or courses based on user inputs, offering tailored recommendations for educational and professional decisions.",
      link: {
        label: "PathGPT",
        href: "https://path-gpt.vercel.app/",
      },
    },
    {
      title: "web builder",
      techStack: [
        "TypeScript",
        "React",
        "Gemini API",
        "Node",
        "Express",
        "Web Container",
        "hugging Face"
      ],
      description:
        "SiteCraftor is an AI-powered platform that automates website creation, allowing users to quickly build professional websites with ease. It streamlines the design and deployment process, making website building accessible to everyone.",
      link: {
        label: "web builder",
        href: "https://github.com/bharathz8/website-builder",
      },
    },
    {
      title: "cryptoViz",
      techStack: ["React", "CoinGecko API", "Tailwind CSS", "State Management"],
      description:
        "CryptoViz is a platform that provides real-time statistics and insights on various cryptocurrencies, helping users stay updated on market trends. It offers an easy-to-use interface for tracking coin prices, volume, and other key metrics.",
      link: {
        label: "Site Craftor",
        href: "https://github.com/bharathz8/cryptoviz",
      },
    },
  ],
} as const;
