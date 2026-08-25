// ========================================
// NexaTech - TypeScript Fundamentals
// ========================================


// Basic Types

let companyName: string = "NexaTech";
let employeeCount: number = 12;
let isActive: boolean = true;


// Arrays

const services: string[] = [
    "Web Development",
    "Cloud Solutions",
    "Data & AI"
];

const projectProgress: number[] = [
    100,
    70,
    20
];


// Object Type

type ProjectStatus =
    "Completed" |
    "In Progress" |
    "Pending";


interface Project {
    name: string;
    status: ProjectStatus;
    progress: number;
    client?: string;
}


// Objects using Interface

const project: Project = {
    name: "Dashboard",
    status: "In Progress",
    progress: 70
};


// Function Types

function calculateProgress(
    completed: number,
    total: number
): number {

    return (completed / total) * 100;
}


const progress = calculateProgress(7, 10);

console.log(progress);


// Arrow Function

const greetUser = (
    name: string
): string => {

    return `Welcome, ${name}!`;
};

console.log(greetUser("Admin"));


// Array of Objects

const projects: Project[] = [

    {
        name: "Landing Page",
        status: "Completed",
        progress: 100
    },

    {
        name: "Dashboard",
        status: "In Progress",
        progress: 70
    },

    {
        name: "Mobile App",
        status: "Pending",
        progress: 20
    }
];


// Filter

const completedProjects = projects.filter(
    project => project.status === "Completed"
);

console.log(completedProjects);