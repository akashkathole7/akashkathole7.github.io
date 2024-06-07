// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'akashkathole7', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['akashkathole7/Mix-nMatch-creative-image-generation', 'akashkathole7/Colorize-Image-Converter'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the External Projects section, keep it empty.
      projects: [
        {
          title: 'Prenatal Care through Innovative Technology',
          description:
            'insufficient antenatal care that expectant mothers frequently receive, compounded by gender-related prejudice within the medical system. This results in adverse health consequences for both mothers and their newborns and contributes to the occurrence of gender-specific terminations. There is an urgent need for a mechanism that guarantees timely and fair delivery of antenatal care',
          imageUrl:
            'https://ananda.ai/wp-content/uploads/2022/08/Prenatal-care.jpg',
          link: 'https://dasia2015.hocoos.com/',
        },
        {
          title: 'Wake Word Detection',
          description:
            'A wake word detection engine is a binary classifier that recognizes pre-defined phrases. During training, the detection engine learns the desired wake word and how to differentiate it, so when integrated into software listens to the environment to detect that keyword.',
          imageUrl:
            'https://www.cnet.com/a/img/resize/707409fe1b03c2de6d1cbd8ac5b77b22c96ca211/hub/2024/01/17/7dbaaee7-4ac7-4a99-bed0-18c42d1f7688/rabbitr1cms.jpg?auto=webp&fit=crop&height=675&width=1200',
          link: 'https://dasia2015.hocoos.com/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Akash Kathole',
    description: '⚡  Machine Learning Engineer | Open Source Advocate | Python | TensorFlow | PyTorch ⚡',
    imageURL: '',
  },
  social: {
    linkedin: 'akash-kathole',
    twitter: 'akashkathole74',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'artificialintelligence15', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'akashkathole74',
    dev: '',
    stackoverflow: '17599238/akash-kathole', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.akashkathole.com',
    phone: '8999079598',
    email: 'akashkathole@outlook.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the Download Resume button.
  },
  skills: [
    'Python',
    'Scikit-learn',
    'Pytorch',
    'Tensorflow',
    'MLflow',
    'Prefect Orion',
    'Model Versioning',
    'Model monitoring',
    'Model Deployment',
    'Feature Engineering',
    'data pipelines',
    'experiment tracking',
    'continuous integration and continious delivery(CI/CD)',
    'Natural Language Processing(NLP)',
    'Computer Vision',
    'AWS',
    'GCP',
    'Linux',
    'Airflow',
  ],
  experiences: [
    {
      company: 'SIL',
      position: 'Machine Learning Engineer',
      from: 'April 2024',
      to: 'Present',
      companyLink: 'https://siluniversity.com/',
    },
    {
      company: 'Persistent Systems',
      position: 'Martian Programme',
      from: 'June 2023',
      to: 'November 2023',
      companyLink: 'https://www.persistent.com/',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning Pipelines with Azure ML Studio',
      body: 'Coursera Course Certificate',
      year: 'Dec 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/WFRHNJNZWFVH',
    },
    {
      name: 'Professional Google cloud devops Engineer',
      body: 'Coursera',
      year: 'Dec 2022',
      link: 'https://coursera.org/share/f1a14bea6913bafff42cffaa1fa8d157',
    },
    {
      name: 'Machine Learning from -Basic to Advanced',
      body: 'Udemy',
      year: 'Dec 2021',
      link: 'https://www.udemy.com/certificate/UC-01e684de-0c7e-4a84-b963-bc37dffdf8b7/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email',
    },
  ],
  educations: [
    {
      institution: 'Pimpri Chinchawad Education Trust-NCER',
      degree: 'B.Tech(Artificial Intelligence)',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Sant Gajanan Maharaj Jr College',
      degree: 'HSC',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Harlalka English High School',
      degree: 'SSC',
      from: '2017',
      to: '2018',
    },
  
  ],
  publications: [
    {
      title: 'Integrating MLOps and EEG Techniques for Enhanced Crime Detection and Prevention',
      conferenceName: 'Malque Publication',
      journalName: 'Multidisciplinary Science Journal',
      authors: 'Akash Kathole, Sagar Shinde, Lalitkumar Wadhwa',
      link: 'https://malque.pub/ojs/index.php/msj/article/view/721',
      description:
        'MLOps and EEG techniques have the potential to revolutionize crime detection by enabling law enforcement to identify suspects, track vehicles, and monitor crime-prone prone areas more effectively, as well as detect deceptive or abnormal behavior. It is important to ensure that these techniques are used in a fair,transparent, and ethical manner',
    },
    {
      title: 'Breaking the silence: Innovation in wake word activation',
      conferenceName: 'Malque Publication',
      journalName: 'Multidisciplinary Science Journal',
      authors: 'Akash Kathole, Sagar Shinde, Lalitkumar Wadhwa, Armaan Suhel Shaikha',
      link: 'https://malque.pub/ojs/index.php/msj/article/view/899',
      description:
        'developed various methods for trigger term detection,including rule-based based approaches and machine learning algorithms like support vector machines, hidden Markovmodels, and deep neural networks. However, ambient noise, pronunciation variations, and accents can all impact the accuracy of trigger term detection. As voice-voiccontrolled systems become more widely used.',
    },
      {
      title: 'Abortion Detection and Monitoring for Empowering Equality through the  Integration of Biometric and Artificial Intelligence',
      conferenceName: '2nd International Conference on Nonlinear Dynamics and Applications (ICNDA 2024)',
      journalName: 'Multidisciplinary Science Journal',
      authors: 'Akash Kathole, Sagar Shinde, Ankita Sarnaik, Mehek Talmale, Kausin Sayed',
      link: 'https://malque.pub/ojs/index.php/msj/article/view/899',
      description:
        'insufficient antenatal care that expectant mothers frequently receive, compounded by gender-related prejudice within the medical system. This results in adverse health consequences for both mothers and their newborns and contributes to the occurrence of gender-specific terminations. There is an urgent need for a mechanism that guarantees timely and fair delivery of antenatal care',
    },
    {
      title: 'Advancements in Data Ingestion and Processing using Hadoop',
      conferenceName: '5th ICCIP-2023',
      journalName: 'SSRN 4666485',
      authors: 'Akash Kathole, Sagar Shinde, Ankita Sarnaik, Mehek Talmale, Kausin Sayed',
      link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4666485',
      description:
        'Hadoop, a freely available framework for managing extensive datasets, has revolutionized the approach to handling large-scale data. As the volume, diversity, and velocity of data continue to experience exponential growth, conventional techniques for data management have revealed their limitations. This research explores innovative approaches in data intake and processing utilizing Hadoop to address the obstacles presented by big data.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'akashkathole74', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to procyon theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `@<a 
      class="text-primary" href="https://github.com/akashkathole7/gitprofile"
      target="_blank"
      rel="noreferrer"
    >akash kathole</a>  ❤️`,

  enablePWA: true,
};

export default CONFIG;
