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
  },
  {
    name: "Data Structures and Algorithms",
    instructor: "Dr. Alice",
    description: "Comprehensive course on data structures and algorithms. Learn how to design efficient algorithms and analyze their time and space complexity. Topics covered include arrays, linked lists, sorting algorithms, and more. Join us and sharpen your problem-solving skills!",
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
  },
  {
    name: "Introduction to Machine Learning",
    instructor: "Prof. Sarah",
    description: "Fundamentals of machine learning and building simple models. This course covers supervised and unsupervised learning techniques, model evaluation, and more. Join us and kickstart your journey into the exciting field of machine learning!",
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
  },
];

export default CoursesData;
