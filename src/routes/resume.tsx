import { For, Show } from "solid-js";

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
  topTechnologies?: Array<string>;
};

const ExperienceLayout = (props: Experience) => (
  <section class={`flex gap-3 ${props.class}`}>
    <figure class="w-12 h-12 min-w-12 mt-1">
      <img src={props.logo} alt={props.company} class="h-auto w-12" />
    </figure>
    <div class="flex flex-col">
      <h3 class="text-lg font-bold">{props.title}</h3>
      <p class="flex items-center gap-2 mb-1">
        {props.company}{" "}
        <span class="text-sm">
          <i>
            ({props.startDate} - {props.endDate})
          </i>
        </span>
      </p>
      <Show when={props.topTechnologies}>
        <p class="italic text-sm ml-3.5">
          Top Technologies: {props.topTechnologies!.join(", ")}
        </p>
      </Show>
      <ul class="list-disc ml-4 text-sm">
        {props.points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </div>
  </section>
);

const experiences: Experience[] = [
  {
    title: "Technical Co-Founder | Head of Engineering",
    company: "Ponder.ly",
    logo: "https://media.licdn.com/dms/image/D560BAQEnJLMmpoW2BQ/company-logo_200_200/0/1696595198111/ponder_ly_logo?e=1717632000&v=beta&t=IUHUMZ_4yscHlNFRisTC0JvtiVZE7Oh6qkDC8rvPUNk",
    startDate: "July 2022",
    endDate: "Present",
    topTechnologies: [
      "React",
      "Typescript",
      "Solidjs",
      "Neo4j",
      "Remix",
      "Redis",
      "Postgres",
      "GraphQL",
      "Node",
      "Tailwind",
      "DaisyUI",
    ],
    points: [
      "Planned & executed the technical vision for the company.",
      "Built integrations with various APIs, including OpenAI, Perplexity, and Hubspot.",
      "Used turborepo to build reusable components used in each of our applications",
      "Benchmarked and improved the performance of our apps for better user experiences, including initial javascript load times.",
      "Developed GraphQL API for our applications and integrated with various databases including Neo4j, Postgres, and Redis.",
      "Created tools for clients to do their own market research, such as form builders, analysis tools, and data visualization.",
      "Trained custom models in OpenAI with user feedback to improve the quality of our products.",
    ],
  },
  {
    title: "Senior Fullstack Engineer",
    company: "Demiplane",
    logo: "https://media.licdn.com/dms/image/C4E0BAQG33EckPVamKw/company-logo_200_200/0/1630627371270/demiplane_logo?e=1717632000&v=beta&t=xZ6ReAbG3J7OGRZqBjo3wX87RUC66N6YBNWnPiVWk4c",
    startDate: "March 2022",
    endDate: "March 2024",
    topTechnologies: [
      "React",
      "Typescript",
      "MUI",
      "Nextjs",
      "GraphQL",
      "DynamoDB",
      "Postgres",
      "Hasura",
      "Redis",
      "AWS",
      "Serverless Framework",
      "Node",
      "Express",
    ],
    points: [
      "Built custom framework on top of React for rendering and managing state powered by our no-code visual editor.",
      "Helped build developer tools for internal teams to debug the character tools and understand current gameengine",
      "Wrote documentation for the character tools and game engine to help other teams understand how to use the tools.",
      "Provided multiple performance improvements & quality of life improvements to our internal suite of tools and character platform",
      "Took ownership over trainings on different technologies and best practices for the team.",
      "Collaborated with company CTO and management to architect and develop character tool solutions.",
    ],
  },
  {
    topTechnologies: [
      "React",
      "Typescript",
      "MUI",
      "Nextjs",
      "GraphQL",
      "Postgres",
      "Redis",
      "PHP",
      "AWS",
      "Azure",
      "GCP",
      "JQuery",
      "Go",
    ],
    title: "Founder | Head of Engineering",
    company: "Neddaxs LLC",
    logo: "https://media.licdn.com/dms/image/C560BAQGciGCiZagckQ/company-logo_100_100/0/1643230706360/neddaxs_logo?e=1717632000&v=beta&t=vMrAD8Ts_9gTSbdvus6ThxdwFtG2aegVfJ2rHtR3DhY",
    startDate: "June 2020",
    endDate: "October 2023",
    points: [
      "Executed the vision of more than 15 companies to bring their start-up ideas to fruition through custom software solutions.",
      "Advised other technical founders in beginning their own successful startups; this included conducted training sessions, rewriting legacy software, and building new marketing websites.",
      "Increased company profits to millions by making scaling easier and organizing product development based off of the lean startup methodology.",
      "Contributed to several open source projects, including being a core maintainer of prpc and creating a typesafe chained i18n library for Solidjs",
      "Partnered with UVU's Entrepreneurship Program to scope out MVPs and built MVPs for their members",
    ],
  },
  {
    topTechnologies: ["React", "Typescript", "MUI", "Nextjs"],
    title: "Senior Frontend Developer",
    company: "Toptal",
    logo: "https://media.licdn.com/dms/image/C560BAQEJlZg66jWL4w/company-logo_200_200/0/1630634412834/toptal_logo?e=1717632000&v=beta&t=fQrHqy6gFrsSjY8KFhEJXfzjt29klxMwQOG-z7Zl_co",
    startDate: "June 2021",
    endDate: "September 2022",
    points: [
      'Vetted and Qualified through their "top 3% of talent" onboarding process',
      "Set up automated emailing with templates to the clients.",
      "Migrated ecommerce company from angular to react, ensuring tests passed with updated UX.",
    ],
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
    topTechnologies: ["React", "Typescript", "MUI", "Postgres", "Azure"],
    title: "Lead Fullstack Developer",
    company: "Webaholics",
    logo: "https://media.licdn.com/dms/image/C510BAQEumRI6xBZymw/company-logo_200_200/0/1631375170071?e=1717632000&v=beta&t=dagpTuUdS1PSVRVILks1etktiijqV_FjZCqRVoiNBps",
    startDate: "March 2021",
    endDate: "January 2022",
    points: [
      "Migrated legacy platform to modern tech stack and trained the team on the new stack.",
      "Led a team of 5 engineers to migrate a legacy application",
      "Colaborated with CEO and partner company to design the platform and build out platform that could scale to multiple companies",
      "Oversaw integrations with multiple sales channels, including Amazon, eBay, WooCommerce, Walmart, and other major marketplaces. Handling millions of dollars in transactions",
      "Facilitated e-commerce drop shipping and integrated seamlessly with multiple sales channels, including Amazon, eBay, WooCommerce, Walmart, and other major marketplaces.",
      "Oversaw custom integrations with vendor systems to meet the unique needs of our clients.",
      "Set up continuous deployments with Azure, including staging, A/B testing, and container swapping for instance deployments to production.",
    ],
  },
  {
    title: "Fullstack Team Lead",
    company: "Solo",
    logo: "https://media.licdn.com/dms/image/C560BAQFvjcMV8MWhrQ/company-logo_200_200/0/1676043993211/solo_backoffice_logo?e=1717632000&v=beta&t=VlOFNfmVTsu2CmVvLzY3To0eC_nUaxqxSE73SHJeEC0",
    startDate: "June 2019",
    endDate: "December 2020",
    topTechnologies: [
      "React",
      "Typescript",
      "Postgres",
      "Node",
      "Express",
      "GCP",
      "CakePHP",
      "JQuery",
      "Zapier",
    ],
    points: [
      "Planned and developed the organization of solar jurisdictions",
      "Developed CAD tools that reduced SLA for 80% of CAD jobs by 90%",
      "Presented Typescript to the team and led the migration from Javascript to Typescript.",
      "Mentored and trained new engineers on the team.",
      "Migrated the codebase from jQuery/CakePHP to React/Express, and the database from MySQL to Postgres.",
      "Played a key role in building integrations with Zapier and writing tests for the API. Built tools that significantly reduced the SLA CAD jobs",
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
  "React",
  "Node",
  "Express",
  "Postgres",
  "Remix",
  "Nextjs",
  "Solidjs",
  "Tailwind",
  "MUI",
  "OpenAI",
  "Neo4j",
  "Bun",
  "Redis",
  "DynamoDB",
  "AWS",
  "GCP",
  "Azure",
  "Python",
  "Go",
  "Rust",
  "Monorepos",
];

export default function Resume() {
  return (
    <div class="p-4 flex flex-col">
      <header class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold text-center">Tanner Scadden</h1>
        <span class="text-xs text-center">
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
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Tanner-Scadden"
            class="underline text-blue-500"
          >
            https://github.com/Tanner-Scadden
          </a>
        </span>
      </header>
      <Divider />
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl font-bold text-center">Skills</h2>
        <ul class="flex flex-wrap justify-around ml-5 list-disc">
          {skills.map((skill) => (
            <li class="text-sm w-1/3">{skill}</li>
          ))}
        </ul>
      </div>
      <Divider />
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl font-bold text-center">Experience</h2>

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
