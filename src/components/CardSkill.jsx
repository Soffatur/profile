import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardSkill(props) {
    return (
        <>
            {props.data.map((skill, index) => (
                <div key={index} className="mb-2 basis-full md:basis-[calc(33.333%-0.75rem)] max-w-full sm:max-w-[calc(50%-0.5rem)] md:max-w-[calc(33.333%-0.75rem)] ps-7 pe-7 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-5 border-t-slate-900">
                    <div className='text-center'><FontAwesomeIcon icon={skill.icon} size='xl' className='pt-4.5 pb-4.5 p-4 bg-slate-900 rounded-full text-white' /></div>
                    <h1 className="text-center mt-1 text-xl font-bold mb-4">{skill.title}</h1>
                    <div className="w-full flex flex-wrap mb-2">
                        {skill.items.map((item, idx) => (
                            <span className="bg-slate-900 text-white text-[11px] mb-2 me-2 px-2.5 py-0.5 rounded-xl" key={idx}>{item}</span> 
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}