export const resume = {
  name: "Monika Sahu",
  title: "Software Developer",
  summary:
    "Driven software engineer with 6+ years of experience delivering client-focused applications. Skilled in communication, problem-solving, and translating business needs into technical solutions.",
  contact: {
    email: "sahu21.monika@gmail.com",
    phone: "+31 619405060",
    linkedin: "https://linkedin.com/in/monika21sahu",
    portfolio: "https://sahu21monika.github.io/info/",
  },
  skills: [
    "JavaScript", "TypeScript", "React.js", "Next.js", "Redux",
    "Java", "MySQL", "SQL", "C/C++", "Git", "Python",
    "Data Structures", "Algorithms", "Research and Development",
    "Kony (Quantum) Visualizer", "Kony (Quantum) Fabric",
    "Microservices", "Micro App Architecture",
    "Accessibility (A11y)", "Internationalization (i18n)", "RTL Support",
  ],
  experience: [
    {
      role: "Senior Product Engineer",
      company: "Temenos India",
      location: "Hyderabad",
      period: "July 2021 – April 2025",
      highlights: [
        "Introduced Open Banking App2App feature in Digital Banking Applications (Mobile and Web).",
        "Optimized login performance through code optimization, restructuring, and R&D.",
        "Improvised code management via Multiple Identity Services merge using Python scripts and Git.",
        "Decomposed a heavy monolithic application into a Micro App architecture for better maintainability and scalability.",
        "Built Next Gen UI Components based on Redux Architecture as Independent Business Modules.",
        "Led, trained, and mentored software engineers in development and debugging.",
      ],
    },
    {
      role: "Software Development Engineer",
      company: "Kony Inc (Temenos)",
      location: "Hyderabad",
      period: "Aug 2019 – June 2021",
      highlights: [
        "Reintegrated with faster APIs (Microservices and Temenos T24) for MFA, Dashboard, Campaign Management, and User Management.",
        "Developed Java services for Approval Matrix & Event Registrations.",
        "Wrote Procedures and Triggers for the local database (SQL, RDBMS).",
        "Introduced accessibility (A11y) and RTL features with i18n internationalization in Digital Banking products.",
      ],
    },
    {
      role: "Associate Engineer",
      company: "Kony Inc",
      location: "Hyderabad",
      period: "Aug 2018 – July 2019",
      highlights: [
        "Revamped web app to be fully responsive, enhancing the Infinity Banking base product.",
        "Designed sleek screens for new account opening modules.",
        "Crafted visually appealing UI widgets as versatile, reusable components.",
      ],
    },
  ],
  education: [
    {
      degree: "Software Engineering for Data Science",
      institution: "IIIT Hyderabad",
      period: "July 2023 – July 2024",
    },
    {
      degree: "Bachelor of Engineering (Computer Science)",
      institution: "Rungta College of Engineering & Technology, Bhilai",
      period: "Aug 2015 – Aug 2019",
    },
  ],
  awards: [
    "Award for delivering pixel-perfect UI screens",
    "Award for delivering high-resolution Next-Gen components",
  ],
  languages: ["English", "Hindi"],
};

export function buildSystemPrompt() {
  const exp = resume.experience
    .map(
      (e) =>
        `${e.role} at ${e.company}, ${e.location} (${e.period}):\n` +
        e.highlights.map((h) => `  - ${h}`).join("\n")
    )
    .join("\n\n");

  const edu = resume.education
    .map((e) => `- ${e.degree} — ${e.institution} (${e.period})`)
    .join("\n");

  return `You are an AI assistant acting as a virtual career coach for ${resume.name}, a ${resume.title} with 6+ years of experience.

Help recruiters and hiring managers learn about ${resume.name}'s background in a friendly, professional, and concise way.

RULES:
1. Only answer based on the resume data below. Do not invent details.
2. If asked something not in the resume, say you don't have that info and suggest contacting Monika directly at ${resume.contact.email}.
3. Keep answers concise — recruiters are busy. Use bullet points when listing multiple things.
4. Be warm and enthusiastic but stay factual.

--- RESUME ---
Name: ${resume.name}
Title: ${resume.title}
Summary: ${resume.summary}
Email: ${resume.contact.email} | LinkedIn: ${resume.contact.linkedin}
Skills: ${resume.skills.join(", ")}

Work Experience:
${exp}

Education:
${edu}

Awards: ${resume.awards.join("; ")}
Languages: ${resume.languages.join(", ")}
--- END ---`;
}
