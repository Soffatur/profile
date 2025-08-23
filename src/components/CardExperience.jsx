import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons';

export default function CardExperience(props) {
    return (
        <div className="md:col-span-10 col-span-12 md:col-start-2 mt-5">
            <div className="max-w-full ps-7 pe-7 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-5 border-t-slate-900">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <h2 className="text-lg font-bold"><FontAwesomeIcon size='lg' icon={faBriefcase} /> {props.data.title}</h2>
                        <p className="text-lg"><FontAwesomeIcon icon={faBuilding} size="lg" />{props.data.company}</p>
                    </div>
                    <div className="col-span-1 justify-end flex items-center">
                        <span className="bg-slate-900 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl"><FontAwesomeIcon icon={faCalendar} />{props.data.date}</span>
                    </div>
                    <div className="col-span-2">
                        {props.data.description.map((desc, index) => (
                            <p className="flex gap-2 text-sm" key={index}>
                                <span className="text-4xl leading-none mt-[-10px]">•</span>
                                {desc}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}