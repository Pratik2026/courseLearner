const CoursesData = [
  {
    name: "Introduction to React Native",
    instructor: "Aman Singh",
    description:
      "Learn the basics of React Native development and build your first mobile app. Not only will you learn the fundamentals of React Native, but you will also understand how to build and deploy your app to the app stores. Join us and start your journey into mobile development!",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/image1.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: {
      week1: {
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      week2: {
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    },
    students: {
      student1: {
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      student2: {
        name: "Bob Smith",
        email: "bob@example.com",
      },
    },
    rating: 4.2,
    enrolled: true,
    completed: false,
    dueDate: "15/8/24",
    likes: 420,
    isLiked: true,
  },
  {
    name: "Advanced JavaScript",
    instructor: "Jane Doe",
    description:
      "Deep dive into advanced JavaScript concepts and best practices. This course is designed for experienced JavaScript developers who want to enhance their skills and write more efficient and maintainable code. Topics covered include higher-order functions, closures, asynchronous JavaScript, and more. Join us and take your JavaScript skills to the next level!",
    enrollmentStatus: "Closed",
    thumbnail: "https://example.com/image2.png",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: {
      week1: {
        topic: "Advanced Functions",
        content: "Higher-order functions, closures, and callbacks.",
      },
      week2: {
        topic: "Asynchronous JavaScript",
        content: "Promises, async/await, and handling asynchronous operations.",
      },
    },
    students: {
      student1: {
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      student2: {
        name: "Dave Wilson",
        email: "dave@example.com",
      },
    },
    rating: 4.9,
    enrolled: false,
    likes: 700,
    isLiked: false,
  },
  {
    name: "Data Structures and Algorithms",
    instructor: "Dr. Alice",
    description:
      "Comprehensive course on data structures and algorithms. Learn how to design efficient algorithms and analyze their time and space complexity. Topics covered include arrays, linked lists, sorting algorithms, and more. Join us and sharpen your problem-solving skills!",
    enrollmentStatus: "In Progress",
    thumbnail: "https://example.com/image3.png",
    duration: "10 weeks",
    schedule: "Fridays, 3:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: {
      week1: {
        topic: "Introduction to Data Structures",
        content: "Overview of arrays, linked lists, and other data structures.",
      },
      week2: {
        topic: "Sorting Algorithms",
        content: "Quick sort, merge sort, and other sorting techniques.",
      },
    },
    students: {
      student1: {
        name: "Eve Adams",
        email: "eve@example.com",
      },
      student2: {
        name: "Frank Martin",
        email: "frank@example.com",
      },
      student3: {
        name: "Heidi Klum",
        email: "heidi@example.com",
      },
    },
    rating: 4.7,
    enrolled: false,
    likes: 934,
    isLiked: true,
  },
  {
    name: "Introduction to Machine Learning",
    instructor: "Prof. Sarah",
    description:
      "Fundamentals of machine learning and building simple models. This course covers supervised and unsupervised learning techniques, model evaluation, and more. Join us and kickstart your journey into the exciting field of machine learning!",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/image4.png",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge", "Basic statistics knowledge"],
    syllabus: {
      week1: {
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning concepts and applications.",
      },
      week2: {
        topic: "Supervised Learning",
        content:
          "Linear regression, logistic regression, and other supervised learning techniques.",
      },
    },
    students: {
      student1: {
        name: "Grace Hopper",
        email: "grace@example.com",
      },
    },
    rating: 4.6,
    enrolled: true,
    completed: false,
    dueDate: "17/10/24",
    likes: 600,
    isLiked: true,
  },
  {
    name: "Introduction to Cybersecurity",
    instructor: "Mr. Smith",
    description:
      "Basics of cybersecurity, including network security and cryptography. This course provides an overview of common security threats and how to protect against them. Join us and learn how to secure your digital assets!",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/image5.png",
    duration: "8 weeks",
    schedule: "Wednesdays and Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic computer science knowledge"],
    syllabus: {
      week1: {
        topic: "Introduction to Cybersecurity",
        content:
          "Overview of cybersecurity concepts and the importance of security.",
      },
      week2: {
        topic: "Network Security",
        content: "Understanding network security, protocols, and threats.",
      },
    },
    students: {
      student1: {
        name: "Ivan Ivanov",
        email: "ivan@example.com",
      },
      student2: {
        name: "Julia Roberts",
        email: "julia@example.com",
      },
    },
    rating: 4.5,
    enrolled: true,
    completed: false,
    dueDate: "17/10/24",
    likes: 587,
    isLiked: false,
  },
  {
    name: "Data Science Fundamentals",
    instructor: "Dr. Emily Johnson",
    description:
      "Explore the foundational concepts of data science, including data analysis, visualization, and machine learning. This course is suitable for beginners and covers essential topics to kickstart your journey in data science.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/image3.png",
    duration: "10 weeks",
    schedule: "Fridays, 3:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge", "Statistics basics"],
    syllabus: {
      week1: {
        topic: "Introduction to Data Science",
        content:
          "Overview of data science, applications, and career opportunities.",
      },
      week2: {
        topic: "Data Analysis with Python",
        content:
          "Using Python libraries like Pandas and NumPy for data analysis.",
      },
    },
    students: {
      student1: {
        name: "Emma Watson",
        email: "emma@example.com",
      },
      student2: {
        name: "Daniel Craig",
        email: "daniel@example.com",
      },
    },
    rating: 4.8,
    enrolled: true,
    completed: false,
    dueDate: "17/10/24",
    likes: 250,
    isLiked: true,
  },
  {
    name: "Web Development Bootcamp",
    instructor: "Elena Gilbert",
    description:
      "A comprehensive bootcamp covering front-end and back-end web development. Learn HTML, CSS, JavaScript, Node.js, Express, MongoDB, and more. Build real-world projects and become a full-stack web developer!",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/image6.png",
    duration: "16 weeks",
    schedule: "Mondays, Wednesdays, and Fridays, 6:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML and CSS knowledge"],
    syllabus: {
      week1: {
        topic: "Introduction to Web Development",
        content: "Overview of web development, tools, and technologies.",
      },
      week2: {
        topic: "HTML and CSS Basics",
        content: "Learning the fundamentals of HTML and CSS.",
      },
    },
    students: {
      student1: {
        name: "John Snow",
        email: "john@example.com",
      },
      student2: {
        name: "Sansa Stark",
        email: "sansa@example.com",
      },
    },
    rating: 4.9,
    enrolled: true,
    completed: false,
    dueDate: "17/10/24",
    likes: 800,
    isLiked: false,
  },
  {
    name: "Cloud Computing with AWS",
    instructor: "Professor Xavier",
    description:
      "Learn the fundamentals of cloud computing using Amazon Web Services (AWS). This course covers core AWS services, including EC2, S3, RDS, and more. Join us and start your journey into cloud computing!",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/image7.png",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic IT knowledge"],
    syllabus: {
      week1: {
        topic: "Introduction to Cloud Computing",
        content: "Overview of cloud computing concepts and AWS services.",
      },
      week2: {
        topic: "AWS EC2 and S3",
        content: "Introduction to EC2 instances and S3 storage.",
      },
    },
    students: {
      student1: {
        name: "Peter Parker",
        email: "peter@example.com",
      },
      student2: {
        name: "Mary Jane",
        email: "mary@example.com",
      },
    },
    rating: 4.7,
    enrolled: false,
    likes: 950,
    isLiked: false,
  },
  {
    name: "Blockchain Basics",
    instructor: "Vitalik Buterin",
    description:
      "Explore the foundational concepts of blockchain technology and cryptocurrencies. This course covers the basics of blockchain, smart contracts, and decentralized applications. Join us and dive into the world of blockchain!",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/image8.png",
    duration: "6 weeks",
    schedule: "Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of computer science"],
    syllabus: {
      week1: {
        topic: "Introduction to Blockchain",
        content: "Overview of blockchain technology and its applications.",
      },
      week2: {
        topic: "Smart Contracts",
        content: "Understanding smart contracts and their use cases.",
      },
    },
    students: {
      student1: {
        name: "Tony Stark",
        email: "tony@example.com",
      },
      student2: {
        name: "Bruce Banner",
        email: "bruce@example.com",
      },
    },
    rating: 4.5,
    enrolled: false,
    likes: 650,
    isLiked: true,
  },
  {
    name: "Artificial Intelligence for Beginners",
    instructor: "Andrew Ng",
    description:
      "An introductory course to the world of artificial intelligence. Learn about neural networks, machine learning algorithms, and AI applications. Join us and start your AI journey!",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/image9.png",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: {
      week1: {
        topic: "Introduction to Artificial Intelligence",
        content: "Overview of AI concepts and history.",
      },
      week2: {
        topic: "Machine Learning Basics",
        content: "Understanding machine learning and its algorithms.",
      },
    },
    students: {
      student1: {
        name: "Clark Kent",
        email: "clark@example.com",
      },
      student2: {
        name: "Diana Prince",
        email: "diana@example.com",
      },
    },
    rating: 4.8,
    enrolled: true,
    completed: false,
    dueDate: "10/11/24",
    likes: 720,
    isLiked: false,
  },
  {
    name: "Game Development with Unity",
    instructor: "John Carmack",
    description:
      "Learn the fundamentals of game development using Unity. This course covers the basics of game design, scripting, and deploying games. Join us and start creating your own games!",
    enrollmentStatus: "In Progress",
    thumbnail: "https://example.com/image10.png",
    duration: "14 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: {
      week1: {
        topic: "Introduction to Game Development",
        content: "Overview of game development concepts and Unity interface.",
      },
      week2: {
        topic: "Scripting in Unity",
        content: "Learning C# scripting for Unity.",
      },
    },
    students: {
      student1: {
        name: "Lara Croft",
        email: "lara@example.com",
      },
      student2: {
        name: "Nathan Drake",
        email: "nathan@example.com",
      },
    },
    rating: 4.6,
    enrolled: true,
    completed: false,
    dueDate: "13/9/24",
    likes: 810,
    isLiked: true,
  },
];

export default CoursesData;
