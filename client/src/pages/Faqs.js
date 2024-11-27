import React from "react";
import { useNavigate } from "react-router-dom";
import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "What is the mission of the NGO run by IIIT Allahabad students?",
      content:
        "The mission of our NGO is to empower underprivileged youth through education and skill-building programs. We aim to provide young people with the tools they need to succeed in life and break the cycle of poverty.",
    },
    {
      title: "Who are the people behind the NGO?",
      content:
        "Our NGO is run by a team of passionate and dedicated IIIT Allahabad students who are committed to making a difference in their community. Our team members come from diverse backgrounds and bring a range of skills and experiences to our work.",
    },
    {
      title: "How can I get involved with the NGO and contribute to its cause?",
      content: `There are many ways to get involved with our NGO, from volunteering your time to donating funds or resources. You can find more information on our "Get Involved" page, or by contacting us directly `,
    },
    {
      title: "What kind of activities and projects does the NGO undertake?",
      content:
        "Our NGO undertakes a variety of activities and projects to support our mission, including after-school tutoring, vocational training programs, and community outreach initiatives. We also collaborate with other organizations and stakeholders to maximize our impact.",
    },
    {
      title: "How does the NGO raise funds for its activities?",
      content:
        "We raise funds through a variety of channels, including donations from individuals and organizations, grants, and fundraising events. We are committed to transparency and accountability in our fundraising efforts.",
    },
    {
      title: "How does the NGO measure the impact of its work?",
      content:
        "We measure the impact of our work through a variety of metrics, including student academic performance, job placement rates, and feedback from program participants and their families. We are committed to continuous improvement and regularly evaluate our programs to ensure that we are making the greatest possible difference.",
    },
    {
      title:
        "How does the NGO collaborate with other organizations and stakeholders?",
      content:
        "We collaborate with a range of organizations and stakeholders, including local businesses, schools, and government agencies. We believe that partnerships are essential to achieving our mission, and we are always looking for new ways to work with others to make a difference.",
    },
    {
      title: "What is the NGO's approach to transparency and accountability?",
      content:
        "We are committed to transparency and accountability in all aspects of our work. We regularly report on our activities and finances, and we welcome feedback and input from our stakeholders. We believe that openness and honesty are essential to building trust and achieving our goals.",
    },
  ],
};

const styles = {
  bgColor: "#F8F4E9",
  rowTitleColor: "black",
  rowContentColor: "#636363",
  arrowColor: "black",
};

const config = {
  animate: true,
  tabFocus: true,
};

export default function Faqs({ user }) {

  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate("/donate");
    } else {
      navigate("/login");
    }
  };

  return (
    <section id="faqs">
      {/* <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div> */}
      <div className="flex flex-row p-6 md:p-10 lg:p-14 bg-[#306F5E] text-white text-center text-lg md:text-2xl lg:text-3xl tracking-wide">
        <p className="basis-1/2 m-auto">Let's Help Other With Your Charity</p>
        <div className="basis-1/2 m-auto">
          <button
            className="py-2 px-4 md:py-3 md:px-6 text-center text-base md:text-xl leading-snug hover:opacity-75 bg-[#F7D770] text-[#2C3734]"
            onClick={handleClick}
          >
            Donate Us
          </button>
        </div>
      </div>

      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          FAQs
        </h1>
        <div className="mt-7">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </section>
  );
}
