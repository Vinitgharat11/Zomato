import { useState } from "react"




const According = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <section >
            <div className="accordion mb-7 ">
                <div className="accordion-item w-[65rem]">
                    <h2 className="accordion-header  ">
                        <button className="accordion-button w-[44rem] h-14 flex ml-10 pt-3 font-Poppins" type="button" onClick={handleToggle}>
                         {props.title}
                        </button>
                    </h2>
                    {isOpen && 
                    <div className="accordion-collapse px-10 ">
                        <div className="accordion-body">
                            {props.contain}
                        </div>
                    </div>
}
                </div>
            </div>


        </section>
    )
}
export default According