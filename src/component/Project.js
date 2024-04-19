import React from "react";
import imges from "../assetes/Image..jpg";
import textanlyzer from "../assetes/textanalyzer.png"
import gifgen from "../assetes/gifgen.jpg"
const Project = () => {
    const project = [
        {
            id: 1,
            src: gifgen,
            style: 'px-20 pt-5',
            href: "https://sakshichavan24.github.io/gifgenerate/"

        },
        {
            id: 2,
            src: textanlyzer,
            style: 'px-20 pt-5 rounded-md',
            href: "https://sakshichavan24.github.io/textutils/"

        },
        // {
        //     id: 3,
        //     src: imges,
        //     style: "",
        //     href: ''
        // },
        // {
        //     id: 4,
        //     src: imges,
        //     style: "",
        //     href: ''
        // },
    ];
    return (
        <div
            name="projects"
            className="text-white bg-gradient-to-b from-black to-gray-800 w-full
        md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-7">
                    <p className="text-5xl font-bold inline border-b-4 border-gray-400">
                        Projects
                    </p>
                    <p className="py-6 text-xl">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-12 sm:px-0 pb-2">

                    {
                        project.map(({ id, src, style, href }) => (


                            <div key={id} className="shadow-lg shadow-gray-600 rounded-lg ">
                                <img
                                    src={src}
                                    alt=""
                                    className={`rounded-md duration-200 hover:scale-105  ${style}`}
                                />
                                <div className="flex items-center justify-center">
                                    <a href={href} target="_blank">
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                                            Demo
                                        </button>

                                    </a>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Code
                                    </button>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Project;
