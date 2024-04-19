import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLink = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn
                    <FaLinkedin size={38} className="" />
                </>
            ),
            href: "https://www.linkedin.com/in/sakshi-chavan-057716251/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    GitHub
                    <FaGithubSquare size={38} className="" />
                </>
            ),
            href: "https://github.com/sakshichavan24",

        },
        {
            id: 3,
            child: (
                <>
                    Mail
                    <BiMailSend size={38} className="" />
                </>
            ),
            href: "mailto:chavansakshi197@gmail.com",

        },
        {
            id: 4,
            child: (
                <>
                    Resume
                    <BsFillPersonLinesFill size={38} className="" />
                </>
            ),
            href: "/Resume.sakshi.pdf",
            style: "rounded-br-md",
            Dataview: true,

        },
    ];
    return (
        <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul >

                {
                    links.map(({ id, child, href, style, DataView }) => (


                        <li key={id} className={"flex justify-between items-center w-40 h-17 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-slate-500" + " " + style}>
                            <a
                                href={href}
                                className="flex gap-4 justify-between items-center w-full text-white my-3 text-xl"
                                DataView={DataView}
                                target="_blank"
                            >
                                {child}

                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default SocialLink;
