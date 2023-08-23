import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const ArticlesList = [
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ut enim ad minim veniam, quis nostrud exercitation.Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  },
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  },
  {
    title: "How to build a home.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/Contemporary-Queenslanders.svg"
  }
]

export default function Articles() {
  return (
    <>
      <section className='bg-accent pt-[80px] pb-10'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center'>Articles and Inspiration</h1>
        </div>
      </section>
      <section className="max-w-[1250px] mx-auto py-[60px]">
        <div className="flex flex-wrap sm:flex-nowrap gap-10 px-5 sm:px-0">
          {ArticlesList.map((item, index) => (
            <div className="w-full sm:w-[390px] h-[513px] border border-primary rounded-[20px] overflow-hidden shadow-secondShadow">
              <div className="w-full h-[290px] relative">
                <Image src={`${process.env.APP_S3_BUCKET}/assets/Contemporary-Queenslanders.webp`} fill={true} alt="How to build a home" className="object-cover"/>
              </div>
              <div className="px-[30px] py-5">
                <h2 className="text-tertiary text-[24px] font-[800] text-center">{item.title}</h2>
                <p className="text-dark text-[16px] text-center line-clamp-4 mb-2">{item.description}</p>
                <div className="flex justify-center">
                  <button type="button" className="bg-warning h-10 rounded-[20px] px-[15px] flex items-center justify-center font-[500] text-[15px] w-[180px] shadow-mainShadow">View Article&nbsp;&nbsp;&nbsp;&nbsp;<FaChevronRight/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
