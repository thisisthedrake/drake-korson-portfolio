// Project data
const projects = [
  {
    id: 1,
    title: "Antrum Tradeshow Design and Build",
    description: "Experience design and engineering of travelling trade show booth",
    category: "Environment Design",
    tags: ["3D", "build", "engineering", "experience", "graphic design"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600&q=80",
    client: "FashionRetail Inc.",
    timeline: "3 months",
    role: "Lead UX Designer",
    overview: "This project involved a complete redesign of a major e-commerce platform that was experiencing high bounce rates and cart abandonment. The goal was to create a more intuitive, engaging shopping experience that would increase conversion rates and customer satisfaction.",
    research: "I conducted extensive user research including interviews with 25 target users, analysis of heatmaps and user session recordings, and competitive analysis of 5 leading e-commerce platforms. Key findings showed that users were frustrated with the checkout process and had difficulty finding product information.",
    process: "The design process began with user journey mapping and information architecture restructuring. I created wireframes for key user flows and developed an interactive prototype for user testing. After multiple iterations based on user feedback, I developed a comprehensive UI kit and design system to ensure consistency across the platform.",
    solution: "The final design featured a streamlined product browsing experience, improved product filtering, a simplified checkout process, and enhanced product pages with more accessible information. The redesign also included a new color scheme and typography that better aligned with the brand's identity.",
    results: [
      "42% increase in conversion rate",
      "35% reduction in cart abandonment",
      "28% increase in average order value",
      "58% increase in positive user feedback"
    ],
    reflection: "This project highlighted the importance of user research in identifying pain points and opportunities. The success of the redesign was largely due to the iterative approach and continual user testing throughout the process.",
    gallery: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A user-centered redesign of a banking application focused on simplifying financial management.",
    category: "UX/UI Design",
    tags: ["ux", "mobile", "fintech"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80",
    detailImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600&q=80",
    client: "NextGen Financial",
    timeline: "4 months",
    role: "UX Designer & Researcher",
    overview: "NextGen Financial needed a complete overhaul of their mobile banking application to better serve their increasingly digital-native customer base. The existing app had poor ratings and was losing users to competitor banks with more intuitive digital experiences.",
    research: "I led a comprehensive research phase that included competitive analysis, stakeholder interviews, and moderated usability testing with current app users. We identified key pain points in transaction history, money transfers, and account management features.",
    process: "Using insights from the research phase, I developed user personas and journey maps to guide our design decisions. I created wireframes and interactive prototypes that were iteratively tested with users. The design system was developed in collaboration with the brand team to ensure consistency with the bank's visual identity.",
    solution: "The redesigned app featured a dashboard with customizable widgets, simplified transaction flows, improved search and filtering capabilities, and enhanced security features. We also introduced personalized insights and financial wellness tools based on user spending patterns.",
    results: [
      "App store rating increased from 2.8 to 4.6 stars",
      "87% of users reported improved satisfaction",
      "User retention increased by 34%",
      "29% increase in daily active users"
    ],
    reflection: "This project taught me the importance of balancing security requirements with usability in financial applications. The collaborative approach with stakeholders from compliance, security, and marketing was crucial to the project's success.",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1563013544-08f23ac9a39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "Complete brand identity creation for a sustainable fashion startup entering the market.",
    category: "Brand Design",
    tags: ["branding", "art", "identity"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80",
    client: "EcoThread",
    timeline: "2 months",
    role: "Art Director & Brand Designer",
    overview: "EcoThread is a sustainable fashion startup focused on creating eco-friendly, ethically produced clothing. They needed a complete brand identity system that would communicate their values of sustainability, craftsmanship, and style to their target audience of environmentally conscious consumers.",
    process: "Starting with stakeholder workshops to define the brand's values and personality, I developed mood boards and concept directions. After several iterative rounds with the client, we refined the visual direction and expanded it into a comprehensive brand system.",
    solution: "The final brand identity featured a minimalist but warm aesthetic that balanced contemporary design with natural elements. I created a flexible logo system, custom typography treatment, a nature-inspired color palette, and guidelines for photography and brand voice.",
    gallery: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1523292267575-a6b7faafe520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
    ],
    featured: false
  },
  {
    id: 4,
    title: "Financial Dashboard Redesign",
    description: "Data visualization and interface design for a complex financial analytics platform.",
    category: "UI Design",
    tags: ["ui", "web", "fintech"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80",
    client: "FinAnalytics",
    timeline: "3 months",
    role: "UI Designer",
    overview: "FinAnalytics needed to redesign their financial dashboard to make complex data more accessible to their users, who range from financial analysts to business executives. The challenge was to simplify the interface while maintaining the depth of functionality.",
    process: "I worked closely with data scientists and financial experts to understand the data and user needs. After creating wireframes and user flows, I developed a modular dashboard system that could be customized for different user roles.",
    solution: "The redesigned dashboard featured customizable widgets, improved data visualization components, and a simplified navigation system. I also created a style guide and component library to ensure consistency across the platform.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
    ],
    featured: false
  },
  {
    id: 5,
    title: "Travel App UI Kit",
    description: "Premium UI kit for travel and booking applications with over 200 components.",
    category: "UI Design",
    tags: ["ui", "mobile", "web"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80",
    client: "Self-initiated",
    timeline: "6 weeks",
    role: "UI Designer",
    overview: "This self-initiated project aimed to create a comprehensive UI kit for travel and booking applications. The goal was to develop a flexible system that designers could use to quickly prototype and build consistent travel-related digital products.",
    process: "I researched common patterns in travel applications and identified key components and user flows. I then designed each component with variants and states, organized in a systematic library.",
    solution: "The final UI kit included over 200 components for both mobile and web platforms, covering everything from search and filtering to booking flows and user profiles. The kit was built with a focus on accessibility and customization.",
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
    ],
    featured: false
  },
  {
    id: 6,
    title: "Healthcare Portal",
    description: "Patient-centered design for a healthcare provider's online portal and appointment system.",
    category: "UX/UI Design",
    tags: ["ux", "web", "healthcare"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80",
    client: "MedCare Health",
    timeline: "5 months",
    role: "UX/UI Designer",
    overview: "MedCare Health needed to redesign their patient portal to improve the online experience for their patients. The goal was to simplify appointment scheduling, medical record access, and communication with healthcare providers.",
    process: "I conducted user interviews with patients and healthcare providers, created user flows, wireframes, and interactive prototypes. The design was tested extensively with real users to ensure it met accessibility standards and was intuitive for users of all ages.",
    solution: "The redesigned portal featured a simplified appointment booking system, clear access to medical records and test results, secure messaging with healthcare providers, and educational resources tailored to each patient's conditions.",
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
    ],
    featured: false
  }
];