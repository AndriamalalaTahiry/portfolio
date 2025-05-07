// Function to determine the active dot based on scroll position
function activateDot() {
    const sections = document.querySelectorAll('section'); // Get all sections
    const dots1 = document.querySelectorAll('.dots-1 .dot'); // Get dots for the left side
    const dots2 = document.querySelectorAll('.dots-2 .dot'); // Get dots for the right side

    // Variable to track which section is currently in view
    let sectionInView = -1;

    // Loop through sections to find which one is in view
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        // Log section's top and bottom relative to viewport
        console.log(`Section ${index + 1}: top = ${rect.top}, bottom = ${rect.bottom}`);

        // Check if the section is in view (overlapping the middle of the viewport)
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            sectionInView = index; // Mark this section as the one in view
        }
    });

    // If a section is in view, update the dots
    if (sectionInView !== -1) {
        console.log(`Section ${sectionInView + 1} is in view.`); // Log active section

        // Remove active class from all dots
        dots1.forEach(dot => dot.classList.remove('active'));
        dots2.forEach(dot => dot.classList.remove('active'));

        // Add active class to the corresponding dot(s)
        dots1[sectionInView]?.classList.add('active');
        dots2[sectionInView]?.classList.add('active');
    } else {
        console.log("No section in view");
    }
}

// Event listener for scroll
window.addEventListener('scroll', activateDot);

// Initial check in case a section is already in view when the page loads
window.addEventListener('load', activateDot);
