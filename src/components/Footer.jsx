

 import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
 const Footer = () => {
    return (
        <footer className="flex justify-center flex-col text-white px-8 py-16 gap-10 bg-[#e87726] sm:flex-row sm:justify-between md:px-20">

            <div className="flex flex-col gap-10">
                <h1 className=" font-bold text-4xl sm:max-w-[30rem]">Always loaded and profitable</h1>
                <a href="tel:+1234567890" className="text-orange-200 text-center bg-black rounded-lg p-4 font-bold text-xl sm:max-w-[26rem] sm:text-2xl md:text-3xl">Call Now (786) 785-9800</a>
                <h1 className='text-2xl sm:text-3xl sm:text-nowrap font-bold font-serif bg-[#f9ddc9] p-[0.7rem] rounded-full self-start'>
                    <span className='text-blue-900'>E</span><span className='text-orange-500'>Z</span><span className='text-blue-900'>one</span> <span className='text-orange-500'>trucking</span><span className='text-blue-900'>assist</span>
                </h1>
                <div className="flex flex-col items-start ">
    <p className="text-white font-bold">A Service By:</p>
    <div className="bg-orange-50 px-4 py-2 rounded-full shadow-md border border-gray-300">
        <p className="text-purple-500 font-bold ">Horizon Freights LLC</p>
    </div>
</div>

                {/* <div className="bg-opacity-10 bg-black p-[0.7rem] rounded text-center font-medium sm:max-w-48 cursor-pointer transition duration-150 ease-in-out active:scale-90">
                    AFFILIATE PROGRAM
                </div> */}
            </div>

            <div className="flex flex-col gap-8 text-center sm:text-left">
                <h1 className="font-extrabold text-4xl max-w-lg leading-tight text-white-400">Contacts</h1>
                
                <div className="flex items-center gap-4">
                    <div className="bg-black p-3 rounded-full">
                        <FaPhone className="text-orange-200 text-xl" />
                    </div>
                    <a href="tel:+1234567890" className="text-lg text-white">+1 (786) 785-9800</a>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="bg-black p-3 rounded-full">
                        <FaEnvelope className="text-orange-200 text-xl" />
                    </div>
                    <a href="mailto:sales@truckingassist.com" className="text-lg text-white">sales@truckingassist.com</a>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="bg-black p-3 rounded-full">
                        <FaMapMarkerAlt className="text-orange-200 text-xl" />
                    </div>
                    <div className="text-lg text-white">
                        <p>16 Wall Street</p>
                        <p>New York City - 10005</p>
                        <p>NY, USA</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="bg-black p-3 rounded-full">
                        <FaClock className="text-orange-200 text-xl" />
                    </div>
                    <div className="text-lg text-white">
                        <p>Mon - Fri: 7am - 5pm</p>
                        <p>Dispatchers: 24/7</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer