import { For } from "solid-js";

const Divider = () => {
  return <div class="border-b pt-4 mb-4 border-gray-400" />;
};

type Experience = {
  title: string;
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
  points: Array<string>;
  class?: string;
};

const ExperienceLayout = (props: Experience) => (
  <section class={`flex gap-3 ${props.class}`}>
    <figure class="w-12 h-12 min-w-12 mt-1">
      <img src={props.logo} alt={props.company} class="h-auto w-12" />
    </figure>
    <div class="flex flex-col">
      <h3 class="text-xl font-bold">{props.title}</h3>
      <p class="text-lg flex items-center gap-2">
        {props.company}{" "}
        <span class="text-sm">
          <i>
            ({props.startDate} - {props.endDate})
          </i>
        </span>
      </p>
      <ul class="list-disc ml-4">
        {props.points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </div>
  </section>
);

const experiences: Experience[] = [
  {
    title: "Technical Co-Founder",
    company: "Ponder.ly",
    logo: "https://media.licdn.com/dms/image/D560BAQEnJLMmpoW2BQ/company-logo_200_200/0/1696595198111/ponder_ly_logo?e=1717632000&v=beta&t=IUHUMZ_4yscHlNFRisTC0JvtiVZE7Oh6qkDC8rvPUNk",
    startDate: "July 2022",
    endDate: "Present",
    points: [
      "Plan and developing web applications and AI services, including meeting with customers to understand problems they faced with understanding their ICP and connecting with their customers.",
      "Organize company operations through Clickup and Hubspot. Focused on the lean startup methodology.",
      "Leveraging Solidjs, React/Remix, Neo4j, Redis, and Hono to develop applications for B2B and B2B2C customers.",
      "Working with Perplexity and OpenAI to perform automated tasks and allow users to talk to their data and gain insights about themselves.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Demiplane",
    logo: "https://media.licdn.com/dms/image/C4E0BAQG33EckPVamKw/company-logo_200_200/0/1630627371270/demiplane_logo?e=1717632000&v=beta&t=xZ6ReAbG3J7OGRZqBjo3wX87RUC66N6YBNWnPiVWk4c",
    startDate: "March 2022",
    endDate: "March 2024",
    points: [
      "Collaborated with company CTO and management to architect and develop character tool solutions.",
      "Met with head of characters to understand needs of the team and develop the no-code visual editor, game engine, and custom framework.",
      "Worked with project director to improve the performance of the framework, and improve typesafety, and accessibility issues.",
      "Used various tools such as Serverless framework, Dynamodb, Postgres, Hasura, Redis, Nextjs, React, Typescript, GraphQL, and URQL.",
    ],
  },
  {
    class: "mt-24",
    title: "Founder",
    company: "Neddaxs LLC",
    logo: "https://media.licdn.com/dms/image/C560BAQGciGCiZagckQ/company-logo_100_100/0/1643230706360/neddaxs_logo?e=1717632000&v=beta&t=vMrAD8Ts_9gTSbdvus6ThxdwFtG2aegVfJ2rHtR3DhY",
    startDate: "June 2020",
    endDate: "October 2023",
    points: [
      "Executed the vision of more than 15 companies to bring their start-up ideas to fruition through custom software solutions.",
      "Advised other technical founders in beginning their own successful startups; this included conducted training sessions, rewritting legacy software, and building new marketing websites.",
      "Increased company profits to millions by making scaling easier and organizing product development based off of the lean startup metholodgy.",
      "Contributed to several open source projects, including being a core maintainer of prpc and creating a typesafe chained i18n library for Solidjs",
    ],
  },
  {
    title: "React Developer",
    company: "Toptal",
    logo: "https://media.licdn.com/dms/image/C560BAQEJlZg66jWL4w/company-logo_200_200/0/1630634412834/toptal_logo?e=1717632000&v=beta&t=fQrHqy6gFrsSjY8KFhEJXfzjt29klxMwQOG-z7Zl_co",
    startDate: "June 2021",
    endDate: "September 2022",
    points: [],
  },
  {
    title: "Wildrift ADC",
    company: "Sentinels",
    logo: "https://media.licdn.com/dms/image/C560BAQEVkcojqA82xg/company-logo_200_200/0/1630650425202?e=1717632000&v=beta&t=dyJHboZul7WT9xKT14fXpLUQheHlJB0L-79jbm3m5iM",
    startDate: "August 2021",
    endDate: "July 2022",
    points: [
      "Lead the team to a 2nd place finish in the Season 1 North America Championship and a top 16 finish in The 2022 World Tournament.",
      "Consistently ranked among the top 50 players in the leaderboards.",
      "Achieved MVP awards multiple times throughout the pro league.",
      "Frequently consulted during review sessions to notice areas of improvement as well as identify other team's strategies",
    ],
  },
  {
    title: "Lead Engineer",
    company: "Webaholics",
    logo: "https://media.licdn.com/dms/image/C510BAQEumRI6xBZymw/company-logo_200_200/0/1631375170071?e=1717632000&v=beta&t=dagpTuUdS1PSVRVILks1etktiijqV_FjZCqRVoiNBps",
    startDate: "March 2021",
    endDate: "Janurary 2022",
    points: [
      "Led a team of 5 engineers to migrate a legacy application to a modern SAAS platform.",
      "Implemented a modern tech stack consisting of React, Express, and Postgres.",
      "Facilitated e-commerce drop shipping and integrated seamlessly with multiple sales channels, including Amazon, eBay, WooCommerce, Walmart, and other major marketplaces.",
      "Oversaw custom integrations with vendor systems to meet the unique needs of our clients.",
      "Set up continuous deployments with Azure, including staging, A/B testing, and container swapping for instance deployments to production.",
    ],
  },
  {
    class: "mt-48",
    title: "Junior Developer to Team Lead",
    company: "Solo",
    logo: "https://media.licdn.com/dms/image/C560BAQFvjcMV8MWhrQ/company-logo_200_200/0/1676043993211/solo_backoffice_logo?e=1717632000&v=beta&t=VlOFNfmVTsu2CmVvLzY3To0eC_nUaxqxSE73SHJeEC0",
    startDate: "June 2019",
    endDate: "December 2020",
    points: [
      "Oversaw the development of critical features such as Open API, Reports, and CAD.",
      "Mentored and trained new engineers on the team.",
      "Migrated the codebase from jQuery/CakePHP to React/Express, and the database from MySQL to Postgres.",
      "Played a key role in building integrations with Zapier and writing tests for the API. Built tools that significantly reduced the SLA CAD jobs",
      "Improved the accuracy and productivity of the Solar Proposals and CAD departments through organizing solar jurisdictions and requirements, HTML Canvas, and custom software",
    ],
  },
  {
    title: "Arena of Valor Support - Team Captain",
    company: "Allegiance",
    logo: "https://pbs.twimg.com/profile_images/879130091254460416/iHiWfxr6_400x400.jpg",
    startDate: "Febraury 2018",
    endDate: "December 2018",
    points: [
      "Won the MVP award for Season 1.",
      "Partnered with Twitch and Tencent to promote the game and esports scene in North America.",
      "Won multiple championships and qualified for the world championships twice.",
      "Placed top 8 and top 16 in consecutive years at the world championships.",
    ],
  },
];

const skills = [
  "Typescript",
  "Javascript",
  "Web APIs",
  "Node",
  "Bun",
  "React",
  "Solidjs",
  "Express",
  "Postgres",
  "Neo4j",
  "OpenAI",
  "Redis",
  "DynamoDB",
  "Remix",
  "Nextjs",
  "AWS",
  "GCP",
  "Azure",
];

export default function Resume() {
  return (
    <div class="p-4 flex flex-col">
      <header class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Tanner Scadden</h1>
        <span>
          Tampa Bay, FL |{" "}
          <a href="mailto:tanner@scaddenfamily.com" class="underline">
            tanner@scaddenfamily.com
          </a>{" "}
          |{" "}
          <a href="tel:+13852313361" class="underline">
            385-231-3361
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/tanner-scadden"
            class="underline text-blue-500"
          >
            https://linkedin.com/in/tanner-scadden
          </a>
        </span>
      </header>
      <Divider />
      <section class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold">Summary</h2>
        <p>
          Over 5 years of experience as a software engineer. Thrives when
          solving technical problems and leading teams, both as a developer team
          lead and esports team captain. Customer obsessed. Enjoys mentoring and
          training team members on technology. Specializes in Typescript.
        </p>
      </section>
      <Divider />
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl font-bold">Experience</h2>
        <span class="flex flex-wrap gap-2 mb-5">
          {skills.map((skill) => (
            <span class="border-2 border-r-gray-200 px-2 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </span>
        <For each={experiences}>
          {(experience) => (
            <>
              <ExperienceLayout {...experience} />
              <Divider />
            </>
          )}
        </For>
      </div>
    </div>
  );
}
