export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  bio: string[];
}

export const teamData: TeamMember[] = [
  {
    slug: "mohammed-rafic",
    name: "Mohammed Rafic",
    role: "Principal Designer",
    image: "/images/team/rafic.webp",
    linkedin: "https://www.linkedin.com/",
    bio: [
      "After working across early-stage startups, growing businesses, and corporate environments for years, I began to understand how strong systems and clear communication can completely change the outcome of a project. At the same time, I also saw where the design and construction sector often falls short — gaps in coordination, unclear documentation, uncontrolled spending, compromised quality, and timelines that drift without transparency.",
      "My approach is centered around creating spaces through a process that is organized, practical, and client-focused. I believe good design is not just about aesthetics, but about making the right decisions at the right stage — through proper planning, technical clarity, material understanding, and streamlined execution.",
      "I strongly value empathy in the design process. Every client has different priorities, budgets, and lifestyles, and the process should adapt accordingly. The goal is to help clients spend wisely while creating spaces that feel intentional, functional, and long-lasting.",
      "Through Full Circle Studio, I aim to build a more transparent and reliable design experience where quality, timelines, communication, and execution are given equal importance."
    ]
  }
];
