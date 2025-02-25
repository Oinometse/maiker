import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import contactUs from '../../public/Contact-Us.webp'

export default function Contact() {
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <div className="px-5 sm:px-0">
            <h1 className='text-primary font-[800] text-center mb-10'>Contact Us</h1>
            <p className='text-dark text-center mb-10 text-[16px]'>
              Ready to take the next step? Contact us to discuss your home construction project or to arrange a site inspection.
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-x-10">
            <div className="w-full h-[319px] sm:w-[820px] sm:h-[528px] relative border border-[#C9C9C9] mb-5 sm:mb-0">
              {/* <Image src={`${process.env.APP_S3_BUCKET}/assets/Contact-Us.webp`} fill={true} priority={true} sizes="(max-width: 820px) 100vw" alt="Contact Us" className="object-cover h-[319px] sm:h-[528px]"/> */}
              <Image src={contactUs} alt="Contact Us" fill sizes="(max-width: 820px) 100vw" quality={100} priority={true} className="object-cover"/>
            </div>
            <div className="w-fit px-5 sm:px-0">
              <div className="mb-[60px]">
                <h3 className="text-tertiary text-[18px] font-[800]">Contact</h3>
                <div className="mt-5">
                  <div className="flex gap-x-1 items-center mb-4"> 
                    <span className="w-[25px] h-[25px] bg-dark rounded-full flex justify-center items-center">
                      <FaPhone color="#ffffff" size="12" style={{ transform: 'scaleX(-1)' }} />
                    </span>
                    <p className="text-dark  text-[16px]">(07) 3705 1421</p>
                  </div>
                  <div className="flex gap-x-1 items-center"> 
                    <span className="w-[25px] h-[25px] bg-dark rounded-full flex justify-center items-center">
                      <FaEnvelope color="#ffffff" size="12"/>
                    </span>
                    <a href="mailto:admin@maiker.com.au">
                      <p className="text-dark text-[16px]">admin@maiker.com.au</p>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-tertiary text-[18px] font-[800]">Business</h3>
              <div className="mt-5">
                <p className="mb-5 text-dark text-[16px]">Avecco Pty Ltd t/a Maiker Constructions</p>
                <p className="text-dark text-[16px]">ABN:36 123 456 789 QBCC: <a href="https://www.onlineservices.qbcc.qld.gov.au/OnlineLicenceSearch/VisualElements/ShowDetailResultContent.aspx?LicNO=&licCat=LIC&name=avecco&firstName=&searchType=Contractor&FromPage=SearchContr" target="_blank">1263544</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
