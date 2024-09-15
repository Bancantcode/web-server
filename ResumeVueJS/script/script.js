const app = Vue.createApp({
    data() {
        return {
            name: "Bryan Aaron B. Santiago",
            email: "santiagobryan831@gmail.com",
            number: "09282977154",
            github: "github.com/Bancantcode",
            school: "Holy Angel University",
            schoolAddress: "#1 Holy Angel St, Angeles, 2009 Pampanga",
            course: "B.S in Information Technology with area specialization in Web Development",
            schoolYear: "July 2022-2026",
            honor: "Deans List",
            gpa: "1.30",
            section1: "Education",
            section2: "Projects",
            section3: "Certificates",
            section4: "Technical Skills",
            relevantCoursework: [
                "Dynamic Web Application and Development Tools",
                "Data Structure and Algorithms",
                "Object-Oriented Programming",
                "Information Assurance and Security",
                "Advance Database",
                "Web and Advertising Publishing Concepts",
                "Web Server and Client Services"
            ],
            projects: [
                { 
                    name: "Responsive CRUD Coffee Website", 
                    description: "Designed and implemented a fully functional CRUD website that ensures seamless user experience for placing and managing orders",
                    made: "Made using HTML, CSS, JAVASCRIPT, PHP, MYSQL"
                },
                {
                    name: "SOGA AI Art", 
                    description: "Created a website that showcase the beauty of AI generated photos",
                    made: "Made using NEXTJS, SASS, JAVASCRIPT, GSAP"
                },
                {
                    name: "Early Stage Venture Capital Fund", 
                    description: "An early stage venture capital fund that sources and invests in technology companies run by young innovators",
                    made: "Made using REACTJS, TAILWINDCSS, GSAP"
                },
                {
                    name: "Digital Clock, Stopwatch, To Do List", 
                    description: "Designed a user-friendly Digital Clock, Stopwatch and To Do List application for efficient task management",
                    made: "Made using React.js and CSS"
                }
            ],
            certificates: [
                "SEO Rank & Rise: The Beginner’s Blueprint to Web Winning (Code Geeks)",
                "The Complete 2024 Web Development Bootcamp (Udemy)",
                "Legacy Javascript Algorithms and Data Structures (freecodecamp)",
                "Responsive Web Design (freecodecamp)",
                "Get Started with Figma (Coursera)"
            ],
            skillset: [
                "Javascript",
                "HTML",
                "CSS",
                "SASS",
                "TAILWINDCSS",
                "JQUERY",
                "REACT.JS",
                "NEXT.JS",
                "PYTHON",
                "JAVA",
                "PHP",
                "GSAP",
                "NODE.JS",
                "EXPRESS.JS",
                "MYSQL",
                "MONGODB",
                "FIGMA",
                "Web Development",
                "Wireframing",
                "UI/UX Design",
                "Branding"
            ],
        }
    }
});

app.mount('#app');

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)