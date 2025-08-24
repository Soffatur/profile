import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faCertificate } from '@fortawesome/free-solid-svg-icons';

export default function CardCertificate(props) {
    return (
        <>        
            {props.certificates.map((group, index) => (
                <div className={`col-span-12 ${index %2 == 0 ? 'md:col-start-2' : ''} ${props.certificates.length %2 !== 0 && index == props.certificates.length - 1 ? 'md:col-span-10' : 'md:col-span-5'} mb-1 flex`} key={index}>
                    <div className="w-full ps-7 pe-7 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-t-5 border-t-slate-900">
                        {group.map((cer, idx) => (
                            <div className="w-full bg-gray-100 border border-gray-100 rounded rounded-lg ps-4 pe-4 p-1 mb-2" key={idx}>
                                <h1 className='text-base font-bold'><FontAwesomeIcon icon={(cer.type == 'training' ? faBookOpen : faCertificate)} size='lg' /> {cer.title}</h1>
                                <p className='text-xs'>{cer.desc}</p>
                                <p className="mt-2">
                                    <span className='bg-slate-900 text-white text-xs me-2 px-1.5 py-0.5 rounded-xl'>
                                        {cer.year}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}