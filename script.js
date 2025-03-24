document.addEventListener('DOMContentLoaded', () => {
    const objects = document.querySelectorAll('.object');
    const whatWeDoSection = document.querySelector('.what-we-do');
    const spotlight = document.querySelector('.spotlight');
    
    // Add floating animation to objects
    objects.forEach((object, index) => {
        object.style.animation = `float 3s ease-in-out infinite`;
        object.style.animationDelay = `${index * 0.2}s`;
    });

    // Add hover effect that follows mouse movement
    document.querySelectorAll('.event-card').forEach((card, index) => {
        const object = card.querySelector('.object');
        const platform = card.querySelector('.platform');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;

            object.style.transform = `
                rotateX(${angleX}deg) 
                rotateY(${angleY}deg)
                translateY(-20px)
            `;
        });

        card.addEventListener('mouseenter', () => {
            whatWeDoSection.classList.add('has-spotlight');
            
            // Calculate fixed spotlight position for each card
            const rect = card.getBoundingClientRect();
            const sectionRect = whatWeDoSection.getBoundingClientRect();
            
            // Center the spotlight on the card
            const spotlightX = rect.left + (rect.width / 2) - sectionRect.left;
            const spotlightY = rect.top - 100; // Position spotlight above the card
            
            spotlight.style.left = `${spotlightX}px`;
            spotlight.style.top = `${spotlightY}px`;
        });

        card.addEventListener('mouseleave', () => {
            object.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
            whatWeDoSection.classList.remove('has-spotlight');
        });
    });
});

// Add floating keyframe animation
// const style = document.createElement('style');
// style.textContent = `
//     @keyframes float {
//         0% {
//             transform: translateY(0);
//         }
//         50% {
//             transform: translateY(-10px);
//         }
//         100% {
//             transform: translateY(0);
//         }
//     }
// `;
// document.head.appendChild(style);
