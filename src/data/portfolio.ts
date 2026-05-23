import nitrone1 from "@/assets/nitrone-1.jpg";
import nitrone2 from "@/assets/nitrone-2.jpg";
import nitrone3 from "@/assets/nitrone-3.jpg";
import nitrone4 from "@/assets/nitrone-4.jpg";
import nitrone5 from "@/assets/nitrone-5.jpg";
import saif1 from "@/assets/saif-1.jpg";
import da1 from "@/assets/da-1.jpg";
import da2 from "@/assets/da-2.jpg";
import da3 from "@/assets/da-3.jpg";
import da4 from "@/assets/da-4.jpg";
import da5 from "@/assets/da-5.jpg";
import da6 from "@/assets/da-6.jpg";
import da7 from "@/assets/da-7.jpg";
import da8 from "@/assets/da-8.jpg";
import da9 from "@/assets/da-9.jpg";
import da10 from "@/assets/da-10.jpg";

const dataAnalyticsGallery = [
  { type: "image" as const, src: da1, caption: "Olympic Dataset Analysis Dashboard — Overview" },
  { type: "image" as const, src: da2, caption: "Olympic Dashboard — Athletes view" },
  { type: "image" as const, src: da3, caption: "Olympic Dashboard — Historical medals by year" },
  { type: "image" as const, src: da4, caption: "Super Store Sales — Power BI dashboard" },
  { type: "image" as const, src: da5, caption: "Bike Sales Data — Excel dashboard" },
  { type: "image" as const, src: da6, caption: "Customer count by age group & gender" },
  { type: "image" as const, src: da7, caption: "Total spend by age group" },
  { type: "image" as const, src: da8, caption: "Top states by total purchase amount" },
  { type: "image" as const, src: da9, caption: "Top 10 best-selling products" },
  { type: "image" as const, src: da10, caption: "Customer distribution by gender" },
];

export const experiences = [
  {
    id: "saif-power-plant",
    title: "Chemist",
    company: "Saif Power Plant",
    location: "Sahiwal, Pakistan",
    duration: "Oct 2024 – Present",
    summary: "Performing physicochemical analyses of industrial water systems and ensuring quality compliance in a major power generation facility.",
    responsibilities: [
      "Performed physicochemical analyses of cooling, boiler, and feedwater using titration, spectrophotometry, pH, and conductivity measurements",
      "Operated ion-exchange water treatment systems and resin regeneration using HCl and NaOH",
      "Ensured SOP and ISO quality compliance with proper lab documentation",
      "Determined fuel calorific value using a bomb calorimeter",
      "Analyzed fuel oils with Spectroil M spectrometry",
      "Assisted in chemical dosing and treatment control",
    ],
    achievements: [
      "Maintained 100% compliance with ISO quality standards",
      "Optimized water treatment processes for improved efficiency",
      "Contributed to safety protocols and environmental monitoring",
    ],
    gallery: [
      { type: "image", src: saif1, caption: "On-site at Saif Power Plant" },
      { type: "video", src: "/saif/saif-1.mp4", caption: "Spectroil M operation" },
      { type: "video", src: "/saif/saif-2.mp4", caption: "Lab & analysis work" },
      { type: "video", src: "/saif/saif-3.mp4", caption: "Diesel checking facility" },
      { type: "video", src: "/saif/saif-4.mp4", caption: "Rainy day at plant" },
      { type: "video", src: "/saif/saif-5.mp4", caption: "Fuel testing" },
      { type: "video", src: "/saif/saif-6.mp4", caption: "Inside the facility" },
      { type: "video", src: "/saif/saif-7.mp4", caption: "Sulphuric acid (H2SO4) unloading" },
    ],
  },
  {
    id: "nitrone",
    title: "Founder",
    company: "Nitrone",
    location: "Faisalabad, Pakistan",
    duration: "Oct 2023 – May 2024",
    summary: "Founded and developed a chemistry-based sports drink, applying scientific formulation and product development principles.",
    responsibilities: [
      "Founded and developed Nitrone, a sports drink using applied chemistry principles",
      "Optimized electrolyte balance, hydration efficiency, and flavor stability",
      "Used Design of Experiments (DOE) for formulation testing",
      "Led product development, ingredient analysis, and prototype validation",
    ],
    achievements: [
      "Successfully developed a market-ready sports drink formulation",
      "Applied DOE methodology to optimize product quality",
      "Managed end-to-end product development lifecycle",
    ],
    gallery: [
      { type: "image", src: nitrone4, caption: "Nitrone product concept & branding" },
      { type: "image", src: nitrone5, caption: "Selected as Top 10 Startup — Regional Plan9 Faisalabad" },
      { type: "image", src: nitrone3, caption: "3rd Position — Zindigi Prize UAF Business Ideas Competition 2023" },
      { type: "image", src: nitrone2, caption: "Nitrone team at the awards ceremony" },
      { type: "image", src: nitrone1, caption: "Receiving the Shield of Acknowledgement" },
    ],
  },
  {
    id: "my-nutrition-store",
    title: "Intern",
    company: "My Nutrition Store",
    location: "Faisalabad, Pakistan",
    duration: "Jun 2023 – Aug 2023",
    summary: "Internship at a pharmaceutical and wellness company specializing in multivitamins and wellness products, focused on quality control and pharma operations.",
    responsibilities: [
      "Worked on quality control of medicines, multivitamins, and wellness products",
      "Assisted with raw material inspection and finished-product checks",
      "Supported documentation aligned with pharmaceutical SOPs and GMP practices",
      "Helped with packaging quality, labeling, and batch verification",
      "Observed and learned end-to-end pharma operations of a wellness brand",
    ],
    achievements: [
      "Gained hands-on exposure to pharmaceutical QC workflows",
      "Contributed to maintaining consistent product quality across batches",
    ],
  },
  {
    id: "data-analytics-programming",
    title: "Data Analytics & Programming",
    company: "Self-Directed Practice & Google Certification",
    location: "Remote",
    duration: "2024 – Present",
    summary: "Applying data analytics, visualization, and programming to real datasets — building dashboards in Power BI, Excel, and Python to extract insights.",
    responsibilities: [
      "Applied mathematical and statistical models using Python with pandas, NumPy, SciPy, and scikit-learn to achieve these results",
      "Built interactive dashboards in Power BI and Excel for sales, sports, and customer datasets",
      "Performed exploratory data analysis using Python (pandas, matplotlib, seaborn)",
      "Cleaned, transformed, and visualized large datasets to uncover trends",
      "Communicated insights through clear charts, KPIs, and storytelling",
    ],
    achievements: [
      "Completed the Google Data Analytics Professional Certificate",
      "Delivered multiple end-to-end analytics projects with publishable dashboards",
    ],
    gallery: dataAnalyticsGallery,
  },
];

export const education = [
  {
    degree: "Bachelor of Science (BS) in Chemistry",
    institution: "Government College University Faisalabad",
    duration: "Nov 2020 – Nov 2024",
    gpa: "3.53/4.00",
    highlights: [
      "Laboratory & Research Skills",
      "Physical Chemistry & Chemical Kinetics",
      "Advanced Analytical Chemistry",
      "Inorganic & Materials Chemistry",
      "Organic Synthesis & Reaction Mechanisms",
      "Applied Product Development",
    ],
  },
  {
    degree: "Higher Secondary School Certificate (Pre-Medical)",
    institution: "Superior Group of Colleges, Jaranwala",
    duration: "Jun 2018 – Sep 2020",
    gpa: null,
    highlights: [],
  },
];

export const projects = [
  {
    id: "nitrone-sports-drink",
    title: "Nitrone Sports Drink Development",
    tagline: "Chemistry-based product development for athletic hydration",
    description: "A chemistry-based product development project focused on hydration, electrolyte balance, stability, and formulation optimization.",
    objectives: [
      "Develop an effective sports hydration formula using chemistry principles",
      "Optimize electrolyte balance for maximum absorption",
      "Ensure flavor stability and shelf life",
      "Create a market-competitive product",
    ],
    role: "Founder & Lead Formulation Chemist",
    methodology: [
      "Conducted literature review on sports nutrition and electrolyte chemistry",
      "Applied Design of Experiments (DOE) for systematic formulation testing",
      "Performed stability testing under various conditions",
      "Iterated on flavor profiles using sensory analysis",
      "Validated prototypes through controlled testing",
    ],
    results: [
      "Successfully developed a stable, effective sports drink formulation",
      "Optimized electrolyte ratios for enhanced hydration",
      "Achieved consistent flavor stability across batches",
    ],
    links: [
      { label: "Instagram", url: "https://www.instagram.com/nitronbooster/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/nitrone/" },
    ],
    gallery: [
      { src: nitrone4, caption: "Nitrone product concept & branding" },
      { src: nitrone5, caption: "Selected as Top 10 Startup — Regional Plan9 Faisalabad" },
      { src: nitrone3, caption: "3rd Position — Zindigi Prize UAF Business Ideas Competition 2023" },
      { src: nitrone2, caption: "Nitrone team at the awards ceremony" },
      { src: nitrone1, caption: "Receiving the Shield of Acknowledgement" },
    ],
  },
  {
    id: "water-quality-analysis",
    title: "Industrial Water Quality Analysis",
    tagline: "Water treatment & process monitoring at Saif Power Plant",
    description: "A professional/technical project showing work on water quality testing, treatment systems, and process monitoring in an industrial environment.",
    objectives: [
      "Monitor and maintain water quality standards for power generation",
      "Optimize ion-exchange treatment processes",
      "Ensure compliance with environmental and safety regulations",
    ],
    role: "Plant Chemist & Quality Analyst",
    methodology: [
      "Systematic sampling of cooling, boiler, and feedwater systems",
      "Physicochemical analysis using titration, spectrophotometry, pH and conductivity meters",
      "Ion-exchange resin regeneration and performance monitoring",
      "Fuel analysis using bomb calorimetry and Spectroil M",
      "SOP-based documentation and ISO compliance tracking",
    ],
    results: [
      "Maintained water quality within strict operational parameters",
      "Contributed to plant efficiency through optimized water treatment",
      "Ensured zero non-compliance incidents during tenure",
    ],
  },
  {
    id: "analytical-chemistry-portfolio",
    title: "Analytical Chemistry & Laboratory Research",
    tagline: "Instrumentation, analysis, and scientific reporting",
    description: "A research-focused section highlighting laboratory techniques, instrumentation, chemical analysis, titration, UV-Vis, AAS, HPLC, sample preparation, and scientific reporting.",
    objectives: [
      "Master analytical instrumentation techniques",
      "Develop robust sample preparation methodologies",
      "Produce accurate, reproducible analytical results",
      "Build comprehensive scientific reporting skills",
    ],
    role: "Research Student & Lab Analyst",
    methodology: [
      "Hands-on training with UV-Vis Spectroscopy, AAS, and HPLC",
      "Volumetric and gravimetric analysis techniques",
      "Sample preparation for various matrices",
      "Statistical data analysis and quality metrics",
      "Scientific report writing and presentation",
    ],
    results: [
      "Proficiency in multiple analytical instrumentation techniques",
      "Strong foundation in quality-controlled laboratory practices",
      "Published lab reports with reproducible methodologies",
    ],
  },
];

export type SkillLevel = "Beginner" | "Medium" | "Expert";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export const skillCategories = [
  {
    title: "Analytical Techniques",
    icon: "microscope",
    skills: [
      { name: "Chemical Synthesis", level: "Expert" as SkillLevel },
      { name: "UV-Vis Spectroscopy", level: "Medium" as SkillLevel },
      { name: "Chromatography (HPLC)", level: "Medium" as SkillLevel },
      { name: "Spectroil M", level: "Medium" as SkillLevel },
      { name: "Titration Methods", level: "Expert" as SkillLevel },
      { name: "Atomic Absorption (AAS)", level: "Medium" as SkillLevel },
    ],
  },
  {
    title: "Research & Industrial",
    icon: "industry",
    skills: [
      { name: "QA/QC", level: "Expert" as SkillLevel },
      { name: "Design of Experiment (DoE)", level: "Medium" as SkillLevel },
      { name: "Chemical Dosing & Monitoring", level: "Expert" as SkillLevel },
      { name: "Technical Documentation", level: "Expert" as SkillLevel },
      { name: "Data Analysis & Visualization", level: "Medium" as SkillLevel },
      { name: "Process Optimization", level: "Medium" as SkillLevel },
    ],
  },
  {
    title: "Digital & Professional",
    icon: "computer",
    skills: [
      { name: "Microsoft Office Suite", level: "Expert" as SkillLevel },
      { name: "Advanced Excel", level: "Expert" as SkillLevel },
      { name: "Data Processing", level: "Medium" as SkillLevel },
      { name: "Research Software", level: "Beginner" as SkillLevel },
      { name: "Python", level: "Beginner" as SkillLevel },
      { name: "LaTeX", level: "Medium" as SkillLevel },
    ],
  },
];

export const certifications = [
  {
    id: "plan9-faisalabad",
    title: "Regional Plan 9 Faisalabad Cohort 6",
    highlight: "1st Position",
    icon: "trophy",
    image: nitrone5,
    description: "Selected as Top 10 Startup at the Regional Plan9 Faisalabad Cohort 6 — a milestone recognition for the Nitrone Sports Drink venture.",
  },
  {
    title: "Amal Career-Prep Fellowship",
    highlight: "Fellow",
    icon: "award",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    highlight: "Certified",
    icon: "certificate",
    id: "google-data-analytics",
    description: "Completed the Google Data Analytics Professional Certificate, covering data cleaning, analysis, visualization, SQL, R, and dashboarding. Below are sample dashboards and analyses produced during and after the program.",
    gallery: dataAnalyticsGallery,
  },
  {
    id: "zindagi-business-idea",
    title: "Zindagi Business Idea Competition",
    highlight: "3rd Place Winner",
    icon: "medal",
    image: nitrone3,
    description: "Awarded 3rd Place at the Zindagi Business Idea Competition for pitching the Nitrone Sports Drink concept.",
  },
  {
    title: "Rotary Youth Leadership Awards",
    highlight: "Awardee",
    icon: "star",
  },
];
