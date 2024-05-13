import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion"

const HomeSection = () => {
    return (
        <motion.div  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} className="grid grid-cols-12 gap-4 lg:ml-20">
            <motion.div animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} className="hidden col-span-12 lg:col-span-5 lg:flex lg:justify-end pr-0 order-last">
                <Image src="/images/Home.svg" alt={"f"} width={600} height={600} />
            </motion.div>
            <div className="lg:hidden col-span-12 lg:col-span-5 flex justify-center pr-0 ">
                <Image
                    src="/images/Mobile-Home.svg"
                    alt={"f"}
                    width={400}
                    height={400}
                />
            </div>
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center items-center lg:items-start pl-5 lg:pl-0 ">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold text-center lg:text-left">
                    Hi There <span className="text-[#C652EE]">____</span>{" "}
                </h1>
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold text-center lg:text-left">
                    I&apos;m{" "}
                    <span className="text-[#A07DD4]">
                        <TypeAnimation
                            sequence={[
                                "Web Developer",
                                1000,
                                "Web Designer",
                                1000,
                                "App Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                        />
                    </span>
                </h1>
                <h3 className="text-[#C5C4CA] text-center lg:text-left">
                    React Native / React / Angular / Graphql / ....
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <motion.button  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="w-full sm:w-auto px-6 py-2 rounded-lg border-2 border-[#C652EE] bg-[#C652EE]">
                        Download CV
                    </motion.button>
                    <motion.button  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className="w-full sm:w-auto px-6 py-2 rounded-lg border-2 border-[#C652EE]">
                        Hire Me
                    </motion.button>
                </div>
                <div className="pt-12">
                    <div className="hidden lg:block">
                        <h1 className="text-[#8172B7]">|</h1>
                        <h1 className="text-[#8172B7] py-2">|</h1>
                        <h1 className="text-[#8172B7]">|</h1>
                    </div>

                    <div className="flex place-content-start lg:flex-col flex-row lg:space-y-4 lg:space-x-0 space-x-10 py-2">
                        {/* <Link href="email_link" target="_blank" rel="noreferrer">
                            <Image
                                src="/images/Email-Icon.svg"
                                alt={""}
                                width={20}
                                height={20}
                            />
                        </Link> */}
                        <Link href="https://www.linkedin.com/in/apeksha-sood/" target="_blank" rel="noreferrer">
                            <Image
                                src="/images/LinkedIn-Icon.svg"
                                alt={""}
                                width={20}
                                height={20}
                            />
                        </Link>
                        {/* <Link href="git_link" target="_blank" rel="noreferrer">
                            <Image
                                src="/images/Git-Icon.svg"
                                alt={""}
                                width={20}
                                height={20}
                            />
                        </Link> */}
                        <Link href="https://www.behance.net/apeksha13" target="_blank" rel="noreferrer">
                            <Image
                                src="/images/Behance-Icon.svg"
                                alt={""}
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HomeSection;
