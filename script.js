document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Adjust for fixed navbar height
        const position = target.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function clearActiveStates() {
        timelineItems.forEach((item) => {
            item.classList.remove("active");
            const content = item.querySelector(".timeline-content");
            if (content) {
                content.style.display = 'none';
            }
        });
    }

    // Function to scroll the timeline right by one card width
function scrollTimeline() {
    const timeline = document.querySelector('.timeline');
    const firstCard = document.querySelector('.timeline-item');
    
    // Get the width of one card to scroll by
    const scrollAmount = firstCard.offsetWidth + 30; // Including gap between cards

    // Scroll the timeline by a certain amount to the right
    timeline.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Ensure that the first box is visible by scrolling to the leftmost position when the page loads
window.onload = function() {
    const timeline = document.querySelector('.timeline');
    timeline.scrollLeft = 0; // Start with the first item aligned to the left
}
