// ========================================
// NexaTech - JavaScript Fundamentals
// ========================================


// ----------------------------------------
// 1. Variables
// ----------------------------------------

const companyName = "NexaTech";
let currentUser = "Admin";
const isLoggedIn = false;

console.log(`Welcome to ${companyName}`);


// ----------------------------------------
// 2. Functions
// ----------------------------------------

function greetUser(name) {
    return `Welcome, ${name}!`;
}

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

console.log(greetUser(currentUser));
console.log(calculateTotal(999, 2));


// ----------------------------------------
// 3. Arrays
// ----------------------------------------

const services = [
    "Web Development",
    "Cloud Solutions",
    "Data & AI"
];

console.log(services);

const serviceList = services.map(service => {
    return service.toUpperCase();
});

console.log(serviceList);


// ----------------------------------------
// 4. Objects
// ----------------------------------------

const user = {
    name: "Admin User",
    role: "Administrator",
    email: "admin@nexatech.com"
};

console.log(user.name);
console.log(user.role);


// ----------------------------------------
// 5. Array Methods
// ----------------------------------------

const projects = [
    {
        name: "Company Website",
        status: "Completed",
        progress: 100
    },
    {
        name: "Dashboard",
        status: "In Progress",
        progress: 70
    },
    {
        name: "Mobile Application",
        status: "Pending",
        progress: 20
    }
];

const completedProjects = projects.filter(
    project => project.status === "Completed"
);

console.log(completedProjects);

const dashboardProject = projects.find(
    project => project.name === "Dashboard"
);

console.log(dashboardProject);


// ----------------------------------------
// 6. DOM Manipulation
// ----------------------------------------

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ----------------------------------------
// 7. Navigation / Mobile Menu
// ----------------------------------------

const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });
}


// ----------------------------------------
// 8. Login Page
// ----------------------------------------

const loginForm = document.querySelector("#login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password");
        const loginMessage = document.querySelector("#login-message");

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {

            loginMessage.textContent =
                "Please complete all fields.";

            loginMessage.className = "form-message error";

            return;
        }

        if (password.length < 8) {

            loginMessage.textContent =
                "Password must contain at least 8 characters.";

            loginMessage.className = "form-message error";

            return;
        }

        loginMessage.textContent =
            "Login form submitted successfully.";

        loginMessage.className = "form-message success";
    });
}


// ----------------------------------------
// 9. Show / Hide Password
// ----------------------------------------

const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector("#password-toggle");

if (passwordInput && passwordToggle) {

    passwordToggle.addEventListener("click", () => {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            passwordToggle.textContent = "Hide";

        } else {

            passwordInput.type = "password";
            passwordToggle.textContent = "Show";
        }
    });
}


// ----------------------------------------
// 10. Dashboard Statistics
// ----------------------------------------

const statistics = {
    projects: 24,
    completed: 18,
    pending: 6,
    teamMembers: 12
};

const projectsCount = document.querySelector("#projects-count");
const completedCount = document.querySelector("#completed-count");
const pendingCount = document.querySelector("#pending-count");
const teamCount = document.querySelector("#team-count");

if (projectsCount) {
    projectsCount.textContent = statistics.projects;
}

if (completedCount) {
    completedCount.textContent = statistics.completed;
}

if (pendingCount) {
    pendingCount.textContent = statistics.pending;
}

if (teamCount) {
    teamCount.textContent = statistics.teamMembers;
}


// ----------------------------------------
// 11. Dashboard Filter
// ----------------------------------------

const filterButtons = document.querySelectorAll(
    "[data-filter]"
);

const activityItems = document.querySelectorAll(
    "[data-status]"
);

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        activityItems.forEach(item => {

            if (
                filter === "all" ||
                item.dataset.status === filter
            ) {

                item.style.display = "";

            } else {

                item.style.display = "none";
            }
        });
    });
});


// ----------------------------------------
// 12. Pricing Interaction
// ----------------------------------------

const pricingButtons = document.querySelectorAll(
    "[data-plan]"
);

pricingButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPlan = button.dataset.plan;

        alert(
            `You selected the ${selectedPlan} plan.`
        );
    });
});


// ----------------------------------------
// 13. ES6 Destructuring
// ----------------------------------------

const { name, role, email } = user;

console.log(name);
console.log(role);
console.log(email);


// ----------------------------------------
// 14. Spread Operator
// ----------------------------------------

const additionalServices = [
    ...services,
    "UI/UX Design"
];

console.log(additionalServices);


// ----------------------------------------
// 15. Conditional Rendering
// ----------------------------------------

const statusMessage = document.querySelector(
    "#status-message"
);

if (statusMessage) {

    const loggedIn = true;

    statusMessage.textContent = loggedIn
        ? "You are currently logged in."
        : "Please log in to continue.";
}