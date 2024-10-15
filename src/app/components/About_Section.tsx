"use client"
import React from "react";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="w-full max-w-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF] mix-blend-normal min-h-screen ">
      <section className="mt-0">
        {/* About Me Section */}
        <div className="flex flex-col items-center text-center px-4 py-16 space-y-12">
          <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
            ABOUT ME
          </button>

          <p className="max-w-2xl text-[20px] sm:text-[16px] lg:text-[20px] leading-[138.68%] text-[#050505]">
            Hello! I'm Uzair kaim khani,Computer Science is the study of computers, computational systems, and how they can be used to solve complex problems. It covers a wide range of topics, including software development, algorithms, data structures, artificial intelligence, machine learning, cybersecurity, and human-computer interaction.

As a field, Computer Science aims to understand the principles behind computation and the design of efficient, scalable systems. It drives innovation across industries, powering advancements in everything from healthcare and education to entertainment and scientific research. Our mission is to push the boundaries of what is possible with technology, fostering creativity, critical thinking, and problem-solving skills.
          </p>

          <Image
            src="/images/image.png"
            alt="svg"
            width={128}
            height={128}
            className="sm:w-36 sm:h-36 lg:w-32 lg:h-32 object-contain"
          />
        </div>
      </section>
      {/* Sections: Experience, Passion and Interests */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-4 py-16 space-y-8 lg:space-y-0">
        {/* Experience Section */}
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Experience
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
           Computer Science involves hands-on proficiency in programming languages like Python or Java, and developing software applications. It includes knowledge of algorithms, data structures, and system design for building efficient and scalable systems. Professionals often work on real-world projects, applying problem-solving skills to create technological solutions. Experience may also include working with artificial intelligence, machine learning, or cybersecurity. Collaboration in teams and managing projects is key to delivering successful software products.
          </p>
        </div>

        {/* Passion and Interests Section */}
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Passion and Interests
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
          Passion for Computer Science often stems from a curiosity about how technology works and a drive to solve complex problems. Interests may include coding, creating innovative software, exploring artificial intelligence, or improving cybersecurity. Many are drawn to the field by the challenge of designing efficient algorithms and building scalable systems. There's also a deep interest in staying current with emerging technologies, such as machine learning and cloud computing. Ultimately, the passion lies in using technology to create impactful solutions and drive innovation.
          </p>
        </div>
      </div>
      {/* Hobbies and Motivation Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-4 py-16 space-y-8 lg:space-y-0">
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Hobbies and Motivation
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
          Hobbies for those in Computer Science often include coding personal projects, contributing to open-source communities, and participating in hackathons. Some enjoy solving coding challenges, experimenting with new technologies, or building apps and games. Motivation comes from a desire to constantly learn, solve real-world problems, and push the boundaries of what technology can achieve. The thrill of optimizing code, automating tasks, or creating innovative solutions fuels their passion. Many are driven by the potential to make a positive impact through technology.
          </p>
        </div>
      </div>
    </div>
  );
}
