
import PaymentCard from "./PaymentCard";

const services = [
    { title: "IFTA Reporting", description: "If your vehicle: -is used to transport people or property; -has three or two axles as well as an actual or registered gross vehicles weight that exceeds 26,000 Ibs (11,797 kgs) - or if in combination the actual or registered gross vehicles weight is more than 26,000 Ibs. (11,797 kgs). You must submit the IFTA quarterly fuel report.", img: "public/card1.webp" },
    { title: "Trucking Accounting", description: " Trucking accounting company to keep you and your truck on the road. While you are out there on the road, we give all the necessary support and assistance to get the job done the right way, time and time again.", img: "public/card2.webp" },
    { title: "Document Management& Paperwork", description: " We offer an extensive range of solutions for truckers and trucking companies.  Including dispatch services dedicated to providing you invaluable support.", img: "public/card3.webp" },
    { title: "Freight Factoring", description: "  As with any important business decision, whether you decide to use a truck factoring service depends on your business model, scale of operations, and how much risk you want to assume.", img: "public/card4.webp" },
    { title: "Freight Rate Negotiation", description: "    Our services go far beyond simple average rate negotiation,  and we help you position your operation and your brand at the forefront of the market. We’ll take care of everything. All you need to do is drive.", img: "public/card5.webp" },
    { title: "Dispatching – Trucking Services", description: "Truck Dispatching:  Keeping Your Business Moving So You Can Focus on Driving. Here at Logity Dispatch, we are proud to be the truck dispatcher company you can rely on.", img: "public/card6.webp" },
    { title: "Company Formation", description: "  We can help you create the company, register your trailers and vehicles, and get all the necessary documents and paperwork to get you up and running. We’re happy to support you, whatever stage in the process you are.", img: "public/card7.webp" },
    { title: "Truckers Accounting", description: " Driving your truck, achieving great results for the customers you work with, and providing your logistics expertise to long-term clients – these are some of your passions. Trucking accounting is probably lower down in the list of things you enjoy.", img: "public/card.webp" },
    { title: "Trucking Invoice Service", description: " Your trucking services offer great advantages to your clients. They have specific needs related to the transportation and delivery of goods, and you have the skills and equipment required to fulfill those needs. But you need to be supported too – you need the steady stream of revenue that keeps you on the road and your business growing. ", img: "public/card9.webp" },
    { title: "Truck Document Management", description: "The successful management of trucking requires striking a balance. While trucking is largely about driving, and your clients love the results you achieve for them in this capacity, there is much more going on behind the scenes.", img:"public/card10.webp" },
    { title: "Document Dispatch Services", description: " Document dispatch services understand that hauling products from point A to point B is not the end of the day for truck drivers. Truck drivers are faced with hours of administrative paperwork long after their route is complete.", img:"public/card11.webp" },
];

const PaymentPlan = ({ pricingPage }) => {
    return (
        <div className="flex flex-col gap-10 sm:gap-16 py-12">
            <h1 className="text-gray-800 text-4xl sm:text-5xl font-bold self-center text-center mb-10 sm:mb-20">Plans & Pricing</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                {services.slice(0, 6).map((service, index) => (
               <div 
               key={index} 
               className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
           >
               <img src={service.img} alt={service.title} className="rounded-lg w-full h-40 object-cover mb-4" />
               <h2 className="text-lg font-bold text-gray-900">{service.title}</h2>
               <p className="text-gray-600">{service.description}</p>
           </div>
           
                ))}
            </div>

            <div className="flex flex-col gap-12 sm:flex-row items-center md:px-6 lg:px-20">
                <PaymentCard h1='Percentage' h2='5%' h3='per load' h4='(10% for box trucks)' p1='Pay as you go' p2='Loads of your choice' p3='Proactive engagement' opacity={50} />
                <PaymentCard h1='Fixed' h2='$399' h3='per week' p1='Weekly Billing' p2='High priority Availability' p3='Dispute Management' banner='Most Popular' />
                <PaymentCard h1='Monthly prepaid' h2='$1,119' h3='per month' p1='Dedicated Dispatcher' p2='24/7 Support' p3='Automated Billing' opacity={75} banner='Best Value' />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                {services.slice(6, 11).map((service, index) => (
                  <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                  <img src={service.img} alt={service.title} className="rounded-lg w-full h-40 object-cover mb-4" />
                  <h2 className="text-lg font-bold text-gray-900">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
              </div>
              
                ))}
            </div>
        </div>
    );
}

export default PaymentPlan;
