import React from "react";
import TeamCard from "../components/TeamCard";

// name, photo, email, linkedin;
const team = [
  {
    name: "Shivam Katiyar",
    img_url:
      "https://media.licdn.com/dms/image/C5603AQEpSJ_mrm8lvQ/profile-displayphoto-shrink_800_800/0/1662026586573?e=1687996800&v=beta&t=mWsY7aqHjlHMVREZonffpzPXpyonRCPpwNy_mLpJ0N8",
    email: "iit2020151@iiita.ac.in",
    linkedin: "https://www.linkedin.com/in/shivam-katiyar-582211228/",
  },
  {
    name: "Nitya Gupta",
    img_url:
      "https://media.licdn.com/dms/image/C4D03AQHigGu2EdNiHw/profile-displayphoto-shrink_800_800/0/1634015048651?e=1687996800&v=beta&t=RDk23Tn_BX1dgqQW8ZKSIEjnspCLA6ElB0VwJNlIZKc",
    email: "iec2021071@iiita.ac.in",
    linkedin: "https://www.linkedin.com/in/nityagupta6/",
  },
  {
    name: "Suket Bhola",
    img_url:
      "https://media.licdn.com/dms/image/C5603AQEssro70PVpMw/profile-displayphoto-shrink_400_400/0/1650952012093?e=1687996800&v=beta&t=i4BtZAUglH5OUo_Ppc6N3bvhJhZ0nXT2egn1b-5MQYQ",
    email: "iit2020081@iiita.ac.in",
    linkedin: "https://www.linkedin.com/in/suket-bhola-40434811a/",
  },
  {
    name: "Samarth Goel",
    email: "iit2020264@iiita.ac.in",
    linkedin: "https://www.linkedin.com/in/samarth-goel-28793a200/",
    img_url:
      "https://media.licdn.com/dms/image/C4D03AQFbjMQS2NLUcQ/profile-displayphoto-shrink_400_400/0/1645381718316?e=1687996800&v=beta&t=gleFcw6v5v5zvc_jPW1sBaxwfCk5bJ4warY6iPdyoMI",
  },
  {
    name: "Shivam Katiyar",
    img_url:
      "https://media.licdn.com/dms/image/C5603AQEpSJ_mrm8lvQ/profile-displayphoto-shrink_800_800/0/1662026586573?e=1687996800&v=beta&t=mWsY7aqHjlHMVREZonffpzPXpyonRCPpwNy_mLpJ0N8",
    email: "iit2020151@iiita.ac.in",
    linkedin: "https://www.linkedin.com/in/shivam-katiyar-582211228/",
  },
  {
    name: "Kajal Kaushal",
    img_url:
      "https://media.licdn.com/dms/image/C4D03AQHigGu2EdNiHw/profile-displayphoto-shrink_800_800/0/1634015048651?e=1687996800&v=beta&t=RDk23Tn_BX1dgqQW8ZKSIEjnspCLA6ElB0VwJNlIZKc",
    email: "iit2020127@iiita.ac.in",
    linkedin: "https://www.linkedin.com/in/kajal-kaushal-a-devotee/",
  },
  {
    name: "Suket Bhola",
    img_url:
      "https://media.licdn.com/dms/image/C5603AQEssro70PVpMw/profile-displayphoto-shrink_400_400/0/1650952012093?e=1687996800&v=beta&t=i4BtZAUglH5OUo_Ppc6N3bvhJhZ0nXT2egn1b-5MQYQ",
    email: "iit2020081@iiita.ac.in",
    linkedin: "https://www.linkedin.com/in/suket-bhola-40434811a/",
  },
  {
    name: "Samarth Goel",
    email: "iit2020264@iiita.ac.in",
    linkedin: "https://www.linkedin.com/in/samarth-goel-28793a200/",
    img_url:
      "https://media.licdn.com/dms/image/C4D03AQFbjMQS2NLUcQ/profile-displayphoto-shrink_400_400/0/1645381718316?e=1687996800&v=beta&t=gleFcw6v5v5zvc_jPW1sBaxwfCk5bJ4warY6iPdyoMI",
  },
];

export default function Team() {
  return (
    <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
      <h1 className="mt-32 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
        Our Team
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 justify-center items-center mt-7">
        {team.map((item, _index) => (
          <div key={_index}>
            <TeamCard member={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
