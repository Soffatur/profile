import { faLaptopCode, faCode, faChartDiagram, faDiagramProject, faShareNodes, faLanguage } from '@fortawesome/free-solid-svg-icons';
import CardExperience from '../components/CardExperience';
import CardEducation from '../components/CardEducation';
import CardCertificate from '../components/CardCertificate';
import CardSkill from '../components/CardSkill';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Resume() {
    let experiences = [
        {
            title: "System Analyst & Fullstack Developer (Official Title : Staff IT)",
            company: "PT. Arga Fasad Indonesia",
            date: "April 2024 - Present",
            description: [
                'Designed, developed, and maintained internal applications using Laravel, MySQL, TailwindCSS, and Bootstrap.',
                'Managed deployment, infrastructure, and server configuration with Docker and Nginx.',
                'Coordinated with multiple divisions to analyze business needs, create documentation, and train end-users.',
                'Acted as a bridge between business requirements and technical implementation, delivering end-to-end solutions.',
                'Developing internal microservices using Golang, implementing gRPC communication and clean architecture to enhance system scalability.'
            ]
        },
        {
            title: "Fullstack Developer (Official Title : Programmer)",
            company: "PT. Majapahit Teknologi",
            date: "March 2021 - July 2023",
            description: [
                "Develop web-based applications and REST APIs.",
                "Accustomed to working with the waterfall methodology and agile scrum method.",
                "Collaborated closely with frontend teams for efficient REST API integration.",
                "Coordinate with teams and clients to translate functional requirements into technical solutions.",
                "Responsible as Tech Leader in BISMA ERP project, directing technical implementation and developer team management."
            ]
        },
        {
            title: "Software Developer - Internship",
            company: "PT. Solusi Bangun Indonesia Tbk.",
            date: "January 2020 - March 2020",
            description: [
                "Built a web-based internship registration system with department selection, major eligibility, and quota management using PHP, MySQL, and Bootstrap.",
                "Designed and optimized system workflows, database structures, and UI/UX based on HR requirements.",
                "Performed end-to-end testing to ensure reliability and alignment with business needs."
            ]
        }
    ]

    const certificates = [
        { type: 'training', title: "Harisenin.com", desc: "UI/UX & Product Management", year: "Ongoing, 2025" },
        { type: 'training', title: "GreatLearning", desc: "Project Management Course", year: "2022" },
        { type: 'training', title: "GreatLearning", desc: "Product Management Course", year: "2022" },
        { type: 'training', title: "Coda", desc: "Advanced Crash Course (Remote Working, Agile Development, Git and Project Deliveries)", year: "2022" },
        { type: 'training', title: "Udemy", desc: "Ethereum Blockchain Developer Bootcamp With Solidity", year: "2022" },
        { type: 'certificate', title: "BNSP", desc: "Programmer", year: "2019" },
        { type: 'certificate', title: "Brain-O-Meter, Bamboomedia", desc: "Web Dinamis (PHP & MYSQL)", year: "2018" },

    ];

    const skills = [
        { 'icon': faCode, title: "Software Development & Infrastructure", items: ['Golang', 'PHP (Laravel)', 'Node.js (Expres.js)', 'REST API', 'MySQL, PostgreSQL, Redis', 'Docker', 'Nginx', 'VPS Management', 'Version Control (Git, Gitlab, Github)', 'Postman' ] },
        { 'icon': faLaptopCode, title: "System Design & Microservices", items: ['Microservice Architecture', 'gRPC', 'API Gateway', 'Domain-Driven Design (DDD)', 'Clean Architecture'] },
        { 'icon': faChartDiagram, title: "UI/UX & Diagramming (Support Skill)", items: ['Figma', 'Balsamiq (Wireframing)', 'Miro', 'Draw.io (Flowcharting, Activity Diagram)'] },
        { 'icon': faDiagramProject, title: "Project Management & Collaboration (Support Skill)", items: ['Trello', 'Jira', 'Notion', 'Slack', 'User Story', 'Agile & Scrum understanding', 'Market Research', 'Feature Prioritization', 'Product Requirement Document (PRD)'] },
        { 'icon': faShareNodes, title: "Soft Skill", items: ['Communication', 'Problem Solving', 'Initiative', 'Collaboration', 'Critical Thinking', 'Adaptability', 'Empathy', 'Time Mamagement'] },
        { 'icon': faLanguage, title: "Language", items: ['Indonesian (Native)', 'English(Improving for Profesional Use)'] },
    ];

    const cerGroup = [];
    for (let i = 0; i < certificates.length; i += 2) {
        cerGroup.push(certificates.slice(i, i + 2));
    }

    return (
        <>
        <Navbar />
        <div className="container mx-auto md:px-20 mb-15 mt-8 px-3 border-purple-500">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 mb-3">
                    <h1 className="text-center text-3xl font-bold">Work Experience</h1>
                    <p className='text-center mt-1'>Professional journey and key contributions in software and system development</p>
                </div>
                <CardExperience data={experiences} />
            </div>
            <div className="flex flex-wrap justify-center mt-8 gap-4">
                <div className="basis-full mb-3">
                    <h1 className="text-center text-3xl font-bold">Skill & Expertise</h1>
                    <p className='text-center mt-1'>Bridging Software Development, Infrastructure, and Product Thinking</p>
                </div>
                <CardSkill data={skills} />
            </div>
            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12 mb-3">
                    <h1 className="text-center text-3xl font-bold">Education</h1>
                    <p className='text-center mt-1'>Academic background supporting analytical and technical growth.</p>
                </div>
                <CardEducation />
            </div>
            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12 mb-3">
                    <h1 className="text-center text-3xl font-bold">Training & Certification</h1>
                    <p className='text-center mt-1'>Continuous learning in technology, infrastructure, and product management.</p>
                </div>
                <CardCertificate certificates={cerGroup} />
            </div>
        </div>
        <Footer />
        </>
    );
}