import React from 'react'

const Skills = ({ skill }) => {
    return (
        <div className="container py-16 md:py-20 bg-gray-50" id="skills">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Here's what I'm good at
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here's what I rate myself
            </h3>

            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                {skill.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="flex items-end justify-between">
                                <h4 className="font-body font-semibold uppercase text-black">
                                    {item.technology}
                                </h4>
                                <h3 className="font-body text-3xl font-bold text-primary">{item.percentage}</h3>
                            </div>
                            <div className="mt-2 h-3 w-full rounded-full bg-lila">
                                <div className="h-3 rounded-full bg-primary" style={{ "width": item.percentage }}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills