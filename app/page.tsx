import Image from "next/image";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Past_Projects from "@/components/Utils/ProjectsCard";
import ScrollButtonHome from "@/components/Utils/ScrollButtonHome";
import MapComponent from "@/components/Utils/MapComponent";

export default function Home() {
  return (
    <>
      <Navbar page="home" />
      <section className="h-[900px] overflow-hidden relative">
        <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Renovations.webp`} fill={true} priority={true} alt="Maiker House Project Footer Logo" className="absolute top-0 object-cover h-[inherit]"/>
        <div className="z-10 relative max-w-[1250px] mx-auto mt-[150px] sm:mt-[200px]">
          <div className="w-full sm:w-[600px] px-5 sm:px-0">
            <h1 className="font-[800] mb-10 text-[30px] sm:text-[38px]">High quality contemporary renovation builder to bring your home to life</h1>
            <p className="font-[500] text-[18px] mb-10">Maiker Constructions designs and builds custom home renovations and additions projects. We specialize in timber construction and the modernisation of character homes, offering a comprehensive landscape and hardscape solution.</p>
            <ScrollButtonHome targetSectionId="footer"/>
            <div className="w-full">
              <Image src="/Home_MBA_ProudMember.webp" width={516} height={137} alt="Master Builders Queensland - Proud Member" className="w-auto"/>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="py-5 sm:py-[60px] max-w-[1250px] mx-auto">
          <div className="flex flex-wrap justify-center px-5 sm:px-0">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[25px] sm:text-[38px]">
              Discover Why Maiker Constructions Is Your Best Choice
            </h2>
            <p className="text-center text-dark text-[16px] mb-[30px] w-full sm:w-4/5">
              Maiker Constructions recognise that every project is unique, requiring client specific solutions to deliver not only thoughtful and innovative spaces, but responsive, practical construction in a process we endeavour to make as stress-free as possible. 
            </p>
          </div>
          <div className='flex flex-wrap sm:flex-nowrap gap-x-10'>
            <div className='w-full sm:w-8/12'>
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Discover-Maiker-Construction.webp`} width={820} height={767} alt="Discover Maiker Constructions" className="object-cover h-[250px] sm:h-[767px]"/>
            </div>
            <div className='w-full sm:w-3/12 px-5 sm:px-0'>
              <div className="mb-2 flex flex-wrap justify-center mt-10 sm:mt-0">
                <h2 className='text-tertiary font-[700] mb-2 text-center text-[24px]'>25 Years Experience</h2>
                <p className='text-dark mb-5 font-[500] text-center w-full sm:w-[85%] text-[16px]'>
                  25 years' expertise in project management and the residential design and construction of renovations and additions home construction projects in Brisbane, Queensland.
                </p>
              </div>
              <div className="mb-2 flex flex-wrap justify-center">
                <h2 className='text-tertiary font-[700] mb-2 text-center text-[24px]'>Design & Construction</h2>
                <p className='text-dark mb-5 font-[500] text-center w-full sm:w-[85%] text-[16px]'>
                  All inclusive design and construction services offering seamless integration and cost-effectiveness ensuring the vision of the project is executed efficiently and creatively.
                </p>
              </div>
              <div className="mb-2 flex flex-wrap justify-center">
                <h2 className='text-tertiary font-[700] mb-2 text-center text-[24px]'>Quality Homes</h2>
                <p className='text-dark mb-5 font-[500] text-center w-full sm:w-[85%] text-[16px]'>
                  Our construction services deliver exceptional quality combining skilled craftsmanship, premium materials, and attention to detail to ensure aesthetically pleasing results.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-[150px] h-[94px] relative">
                  <Image src="/MBA_ProudMember_Blue.svg" width={149} height={94} alt="Master Builders Queensland - Proud Member"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-0 sm:py-[80px] bg-accent">
          <div className="max-w-[1250px] mx-auto px-5 sm:px-0">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[38px]">
              Project Types
            </h2>
            <p className="text-center text-dark text-[16px] mb-[30px]">
              Maker Constructions designs and builds home renovations and additions projects.  We specialize in timber construction and modernizing character homes including providing a complete landscape and hardscape soluctions.
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap h-full sm:h-[438px] gap-x-1">
            <div className="relative w-full h-[283px] sm:w-1/5 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">Home Renovations</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Renovation.webp`} alt="Home Renovations" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-full h-[283px] sm:w-1/5 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">Home Extensions & Additions</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Home-Extensions-and-Additions.webp`} alt="Home Extensions & Additions" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-full h-[283px] sm:w-1/5 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">Contemporary Queenslander&rsquo;s</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Contemporary-Queenslanders.webp`} alt="Contemporary Queenslander's" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-full h-[283px] sm:w-1/5 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">Kitchens & Bathrooms</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Kitchens-and-Bathrooms.webp`} alt="Kitchens & Bathrooms" className="object-cover" fill={true}/>
              </div>
            </div>
            <div className="relative w-full h-[283px] sm:w-1/5 sm:h-auto">
              <h2 className="text-[25px] font-[800] rotate-0 sm:-rotate-90 absolute top-[unset] sm:top-full left-0 w-full sm:w-[438px] text-center origin-top-left z-10 bottom-[10px] sm:bottom-0">Landscapes & Hardscapes</h2>
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-[#0000004d] z-[5]"></div>
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Landscapes-and-Hardscapes.webp`} alt="Landscapes & Hardscapes" className="object-cover" fill={true}/>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-5 sm:py-[60px] max-w-[1250px] mx-auto">
          <div className="flex flex-wrap justify-center px-5 sm:px-0">
            <h2 className="text-primary font-[800] text-center mb-5 text-[38px] w-full">
              Services
            </h2>
            <h3 className="text-tertiary font-[800] text-center mb-5 text-[25px]">
              All Inclusive Home Design and Construction
            </h3>
            <p className="text-center text-dark text-[16px] mb-[30px]">
              Maiker Constructions provides an all inclusive service and single point of contact.  We manage the design process, approvals and construction of your new home.  We even work with your architect or home designer. 
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap mb-10">
            <div className="w-full sm:w-1/2 mb-2.5 sm:mb-0">
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Full-Design-and-Construction-Service.webp`} width={620} height={391} alt="Full Design and Construction Service" className="object-cover w-auto"/>
            </div>
            <div className="w-full sm:w-1/2 px-[50px] flex flex-col justify-center items-center">
              <h3 className="text-tertiary font-[800] text-[25px] text-center mb-5">Full Design & Construction Service</h3>
              <p className="text-dark text-center mb-5">All inclusive design and construction services offering seamless integration and cost-effectiveness ensuring the vision of the project is executed efficiently and creatively.</p>
              <Link href="/design">
                <button className="bg-warning w-[200px] h-[42px] rounded-[20px] flex justify-center items-center text-[16px] font-[500] shadow-mainShadow">
                  Design My Home <FaChevronRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap">
            <div className="w-full sm:w-1/2 px-[50px] flex flex-col justify-center items-center mb-2.5 sm:mb-0">
              <h3 className="text-tertiary font-[800] text-[25px] text-center mb-5">Quote Your Architect’s Plans</h3>
              <p className="text-dark text-center mb-5">We work with your architect or building designer.  Let Maiker Constructions provide costing and support for your project during the design phase to ensure your project is on budget.</p>
              <Link href="/quote">
                <button className="bg-warning w-[200px] h-[42px] rounded-[20px] flex justify-center items-center text-[16px] font-[500] shadow-mainShadow">
                  Quote My Plans <FaChevronRight />
                </button>
              </Link>
            </div>
            <div className="w-full sm:w-1/2">
              <Image src={`${process.env.APP_S3_BUCKET}/assets/Quote-My-Plans.webp`} width={620} height={391} alt="Quote Your Architect's Plans" className="object-cover w-auto"/>
            </div>
          </div>
        </section> */}
        <section className="py-2.5 sm:py-[60px]">
          <div className="max-w-[1250px] mx-auto">
            <h2 className="text-primary font-[800] text-center mb-[30px] text-[38px]">
              Past Projects
            </h2>
            <Past_Projects />
            <div className="flex justify-end">
              <Link href="/projects" className="text-warning text-[20px] font-[500] flex items-center">
                More Projects <FaChevronRight />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-2.5 sm:py-[60px] bg-accent">
          <div className="max-w-[1250px] mx-auto">
            <div className="flex flex-wrap justify-center mb-10 px-5 sm:px-0">
              <h2 className="text-primary font-[800] text-center text-[38px] w-full mb-10">
                Where We Service
              </h2>
              <p className="text-center text-dark text-[16px] mb-[30px]">
                Maiker Constructions builds in the below areas of the Brisbane and the South East section of Queensland.
              </p>
            </div>
            <div className="w-full h-[319px] sm:h-[600px] relative">
              <MapComponent />
              {/* <Image src={`${process.env.APP_S3_BUCKET}/assets/Where-We-Service.webp`} fill={true} alt="Where We Service" className="object-cover shadow-secondShadow"/> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
