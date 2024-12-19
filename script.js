
// Function to toggle between showing the details and minimizing the box
function toggleDetails(id) {
    const timelineItems = document.querySelectorAll(".timeline-item");
    
    // Close all other items and toggle the selected item
    timelineItems.forEach(item => {
        if (item.id !== id) {
            item.classList.remove("active");
        }
    });

    const selectedItem = document.getElementById(id);
    const isActive = selectedItem.classList.toggle("active");

    if (isActive) {
        showDetails(id);
    } else {
        closeDetails();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    // Toggle navigation menu visibility
    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// Function to display the details in the modal
function showDetails(experience) {
    const details = {
        'writing-coach': {
            title: 'Writing Coach',
            date: 'July, 2023 - Present',
            company: 'Arizona State University',
            description: [
                'Assisted more than 500 students in improving writing skills and grades.',
                'Spearheaded discussions and played a pivotal role in the AI writing tools workshop.',
                'Organized bi-weekly seminars on writing techniques, research methodologies, and citation standards.',
                'Received positive feedback for explaining complex concepts clearly to students, peers, and faculty.'
            ]
        },
        'marketing-designer': {
            title: 'Marketing Designer Intern',
            date: 'May - August, 2024',
            company: 'DineLocal',
            description: [
                'Collaborated with restaurant owners to design and create marketing assets tailored to their needs.',
                'Developed engaging visual content for the Dine Local app, enhancing brand visibility and customer engagement.',
                'Addressed and resolved restaurant owners\' concerns with professional and timely communication.',
                'Ensured consistent branding and messaging across all marketing channels through team collaboration.'
            ]
        },
        'cloud-infrastructure': {
            title: 'Cloud Infrastructure Intern',
            date: 'April - May, 2024',
            company: 'Verizon',
            description: [
                'Engineered and optimized a VPN product with redundancy, resiliency, and least-privilege principles using advanced Python.',
                'Executed rigorous cloud-native infrastructure testing focused on security and performance.',
                'Delivered in-depth presentations on cloud security strategies to enhance team expertise and collaboration.'
            ]
        },
        'data-analyst': {
            title: 'Data Analyst Intern',
            date: 'June - July, 2023',
            company: 'LTIMindtree',
            description: [
                'Proficient in data extraction using REST APIs and RDBMS with a strong analytical mindset.',
                'Experienced with Kafka, microservices vs monolithic architectures, and AngularJS for web interfaces.',
                'Worked with H2 Database, Java APIs, and JPA for CRUD operations, demonstrating technical adeptness.',
                'Showcased dedication in database and software evaluation for coding viability.'
            ]
        },
        'uiux-designer': {
            title: 'UI/UX Designer Intern',
            date: 'May - June, 2023',
            company: 'Centre for Railway Information Systems',
            description: [
                'Led cross-functional projects, integrating ticket systems with the national digital payment gateway.',
                'Leveraged Tableau and Google Analytics for UI enhancements in the Freight Operations System.',
                'Proficient in Adobe XD and Sketch for high-fidelity prototyping.',
                'Expertise in comprehensive user research to inform design decisions.'
            ]
        }
    };

    const experienceDetails = details[experience];

    if (experienceDetails) {
        // Populate the modal with details
        const experienceCard = document.getElementById('experience-card');
        experienceCard.innerHTML = `
            <h3>${experienceDetails.title}</h3>
            <p><strong>${experienceDetails.company}</strong></p>
            <p class="timeline-date">${experienceDetails.date}</p>
            <ul>
                ${experienceDetails.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <button class="close-btn" onclick="closeDetails(event)">Close</button>
        `;
        
        // Display the modal
        const modal = document.querySelector('.experience-details');
        modal.style.display = 'flex';
    }
}

// Function to close the details modal
function closeDetails(event) {
    if (event) event.preventDefault(); // Prevent default behavior if triggered by a link
    const modal = document.querySelector('.experience-details');
    modal.style.display = 'none';

    // Remove active class from any open timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach(item => item.classList.remove("active"));
}

