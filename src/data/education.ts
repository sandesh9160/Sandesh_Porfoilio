export interface Education {
  degree: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
  logoUrl?: string;
  highlights: string[];
}

export const educationList: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University College of Science, Saifabad",
    university: "Osmania University, Hyderabad",
    period: "Nov 2022 — Nov 2024",
    cgpa: "CGPA: 8.0 / 10",
    logoUrl: "/saifabad.png",
    highlights: [
      "Specialized in Advanced Python, Full-Stack Architecture, Database Management Systems, and Web Technologies.",
      "Graduated in November 2024 with 8.0 CGPA distinction.",
    ],
  },
  {
    degree: "Bachelor of Science (MPCS)",
    institution: "BJR Government Degree College",
    university: "Osmania University, Hyderabad",
    period: "Oct 2019 — Aug 2022",
    cgpa: "CGPA: 7.96 / 10",
    logoUrl: "/bjr.jpeg",
    highlights: [
      "Majored in Mathematics, Physics, and Computer Science (MPCS) with first-class honors.",
      "Graduated in August 2022 with 7.96 CGPA.",
    ],
  },
];
