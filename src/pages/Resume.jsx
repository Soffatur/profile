import { faCode, faChartDiagram, faDiagramProject, faShareNodes, faLanguage } from '@fortawesome/free-solid-svg-icons';
import CardExperience from '../components/CardExperience';
import CardEducation from '../components/CardEducation';
import CardCertificate from '../components/CardCertificate';
import CardSkill from '../components/CardSkill';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Resume() {
    let experiences = [
        {
            title: "Staff IT",
            company: "PT. Arga Fasad Indonesia",
            date: "April 2024 - Present",
            description: [
                "Analyzed system requirements for the Finance, Marketing, and HRGA divisions, and created activity diagrams for process flows.",
                "Designed and developed Laravel-based internal applications according to user requirements.",
                "Designed simple UIs and wireframes to support system usability.",
                "Produced technical documentation and conducted system outreach and training for end-users."
            ]
        },
        {
            title: "Programmer",
            company: "PT. Majapahit Teknologi",
            date: "March 2021 - July 2023",
            description: [
                "Develop web-based applications and REST APIs.",
                "Designing databases and backend logic for various internal and external client systems.",
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
        { 'icon': faCode, title: "Web Development", items: ['HTML', 'CSS', 'Bootstrap', 'Tailwindcss', 'JavaScript', 'jQuery', 'PHP (Laravel)', 'Node.js (Express.js)', 'REST API', 'MySQL', 'PostgreSQL', 'Version Control System (GIT)'] },
        { 'icon': faChartDiagram, title: "UI/UX & Diagramming", items: ['Figma', 'Balsamiq (Wireframing)', 'Miro', 'Draw.io (Flowcharting, Activity Diagram)'] },
        { 'icon': faDiagramProject, title: "Project Management & Collaboration", items: ['Trello', 'Jira', 'Notion', 'Slack'] },
        { 'icon': faShareNodes, title: "Soft Skill", items: ['Communication', 'Problem Solving', 'Collaboration', 'Time Mamagement', 'Adaptability', 'Empathy'] },
        { 'icon': faLanguage, title: "Language", items: ['Indonesian (Native)', 'English(Basic)'] },
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
                    <div className="border-2 border-color-black w-18 rounded-md mx-auto mt-2"></div>
                </div>
                <CardExperience data={experiences} />
            </div>
            <div className="flex flex-wrap justify-center mt-8 gap-4">
                <div className="basis-full mb-3">
                    <h1 className="text-center text-3xl font-bold">Skill & Expertise</h1>
                    <div className="border-2 border-color-black w-18 rounded-md mx-auto mt-2"></div>
                </div>
                <CardSkill data={skills} />
            </div>
            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12 mb-3">
                    <h1 className="text-center text-3xl font-bold">Education</h1>
                    <div className="border-2 border-color-black w-18 rounded-md mx-auto mt-2"></div>
                </div>
                <CardEducation />
            </div>
            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12 mb-3">
                    <h1 className="text-center text-3xl font-bold">Training & Certification</h1>
                    <div className="border-2 border-color-black w-18 rounded-md mx-auto mt-2"></div>
                </div>
                <CardCertificate certificates={cerGroup} />
            </div>
        </div>
        <Footer />
        </>
    );
}