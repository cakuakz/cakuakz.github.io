import React, {useState} from "react";
import Slider from "react-slick";
import projectData from "../data/projects"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ProjectCard() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    const [dataProject] = React.useState(projectData)

    return (
        <div className="mt-[103px] justify-items-center mb-[200px]">
            <Slider {...settings}>
            {dataProject.map((item, i) => (
                <div className="group mt-[80px]">        
                    <div className="bg-white hover:bg-[#F7F9FE] saturate-0 pb-[25px] rounded-[20px] hover:rounded-[20px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:saturate-100">
                        <img src={item.image} alt="project1" className="w-[391px] h-[269px] rounded-t-[20px]"/>
                        <div className="card-title flex justify-between px-[24px] items-center mt-[32px] opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100">
                            <h1 className="font-semibold text-[32px] w-[276px] flex-1">{item.title}</h1>
                            <span className="arrow-sided transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:rotate-180" onClick={() => toggle(i)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="currentColor"><path d="m14.829 11.948l1.414-1.414L12 6.29l-4.243 4.243l1.415 1.414L11 10.12v7.537h2V10.12l1.829 1.828Z"/><path fill-rule="evenodd" d="M19.778 4.222c-4.296-4.296-11.26-4.296-15.556 0c-4.296 4.296-4.296 11.26 0 15.556c4.296 4.296 11.26 4.296 15.556 0c4.296-4.296 4.296-11.26 0-15.556Zm-1.414 1.414A9 9 0 1 0 5.636 18.364A9 9 0 0 0 18.364 5.636Z" clip-rule="evenodd"/></g></svg>
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <p>{item.description}</p>
                        </div>
                        <a href={item.link} className={selected === i ? 'link show' : 'link'}>
                            See More
                        </a>      
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}

export default ProjectCard;