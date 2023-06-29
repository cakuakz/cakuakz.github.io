import React, {useState} from "react";
import projectData from "../data/projects"

function ProjectCard() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const [dataProject] = React.useState(projectData)

    return (
        <div className="grid grid-cols-3 mt-[103px] justify-items-center mb-[282px]">
        {dataProject.map((item, i) => (
        <div className="">    
            <div className="bg-[#F7F9FE] saturate-0 pb-[25px] rounded-[20px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:saturate-100">
                    <img src={item.image} alt="project1" className="w-[391px] h-[269px] rounded-t-[20px]"/>
                    <div className="flex justify-between px-[24px] items-center mt-[32px]">
                        <h1 className="font-semibold text-[32px] w-[276px] flex-1">{item.title}</h1>
                        <span className="arrow-sided transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => toggle(i)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="currentColor"><path d="m14.829 11.948l1.414-1.414L12 6.29l-4.243 4.243l1.415 1.414L11 10.12v7.537h2V10.12l1.829 1.828Z"/><path fill-rule="evenodd" d="M19.778 4.222c-4.296-4.296-11.26-4.296-15.556 0c-4.296 4.296-4.296 11.26 0 15.556c4.296 4.296 11.26 4.296 15.556 0c4.296-4.296 4.296-11.26 0-15.556Zm-1.414 1.414A9 9 0 1 0 5.636 18.364A9 9 0 0 0 18.364 5.636Z" clip-rule="evenodd"/></g></svg>
                        </span>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>
                        <p>{item.description}</p>
                    </div>      
            </div>
        </div>
        ))}
        </div>
    )
}

export default ProjectCard;