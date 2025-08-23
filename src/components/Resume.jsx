import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBriefcase, faBuilding, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import CardExperience from './CardExperience';
import CardEducation from './CardEducation';
export default function Resume() {
    let datas = [
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
        }
    ]

    return (
        <div className="container mx-auto md:px-20 mb-15 mt-8 px-3 border-purple-500">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <h1 className="text-center text-3xl font-bold">Work Experience</h1>
                    <div className="border-2 border-color-black w-18 rounded-md mx-auto mt-2"></div>
                </div>
                {datas.map((data, index) => (
                    <CardExperience data={data} key={index} />
                ))}
            </div>
            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12">
                    <h1 className="text-center text-3xl font-bold">Education</h1>
                    <div className="border-2 border-color-black w-18 rounded-md mx-auto mt-2"></div>
                </div>
                <CardEducation />
            </div>
            <div className="grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12">
                    <h1 className="text-center text-3xl font-bold">Training & Certification</h1>
                    <div className="border-2 border-color-black w-18 rounded-md mx-auto mt-2"></div>
                </div>
                <div className="md:col-span-5 col-span-12 md:col-start-2 mt-5">
                    <div className="w-full ps-7 pe-7 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-5 border-t-slate-900 flex">
                        <div className="w-full bg-gray-100 border border-gray-100 rounded rounded-lg ps-4 pe-4 p-1">
                            <h1 className='text-md font-bold'><FontAwesomeIcon icon={faBookOpen} /> Harisenin.com</h1>
                            <p className='text-sm'>UI/UX & Product Management</p>
                            <p className="mt-2">
                                <span className='bg-slate-900 text-white text-xs font-reguler me-2 px-1.5 py-0.5 rounded-xl'>
                                    Ongoging, 2025
                                </span>
                            </p>
                        </div>
                        <div className="w-full bg-gray-100 border border-gray-100 rounded rounded-lg ps-4 pe-4 p-1">
                            <h1 className='text-md font-bold'><FontAwesomeIcon icon={faBookOpen} /> Harisenin.com</h1>
                            <p className='text-sm'>UI/UX & Product Management</p>
                            <p className="mt-2">
                                <span className='bg-slate-900 text-white text-xs font-reguler me-2 px-1.5 py-0.5 rounded-xl'>
                                    Ongoging, 2025
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}