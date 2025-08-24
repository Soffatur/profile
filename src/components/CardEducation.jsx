import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function CardEducation() {
    return (
        <>
            <div className="md:col-span-5 col-span-12 md:col-start-2 mb-2">
                <div className="h-full max-w-full ps-7 pe-7 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-5 border-t-slate-900 flex">
                    <div className="flex flex-col justify-center">
                        <span className="block w-1 rounded h-full bg-black mx-auto"></span>
                    </div>
                    <div className="pl-4 flex-1 text-sm">
                        <h1 className='text-lg font-bold'><FontAwesomeIcon icon={faBookOpen} /> Bachelor's Degree</h1>
                        <h3 className='text-md font-bold'>Informatics Engineering</h3>
                        <p className='text-sm'>Muhammadiyah University of Purwokerto (UMP)</p>
                        <p className="mt-2">
                            <span className='bg-gray-300 text-xs font-reguler me-2 px-1.5 py-0.5 rounded-xl'>
                                September 2017 - February 2021
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:col-span-5 col-span-12 mb-2">
                <div className="h-full max-w-full ps-7 pe-7 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-5 border-t-slate-900 flex">
                    <div className="flex flex-col justify-center">
                        <span className="block w-1 rounded h-full bg-black mx-auto"></span>
                    </div>
                    <div className="pl-4 flex-1 text-sm">
                        During college, I studied web programming, systems analysis, project management, and mobile web. I also joined the Muhammadiyah Student Association (IMM). In my final semester, I freelanced with a lecturer to create a coronavirus distribution system application.
                    </div>
                </div>
            </div>
        </>
    );
}