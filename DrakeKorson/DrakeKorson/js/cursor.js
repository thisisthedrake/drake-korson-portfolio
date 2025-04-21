// Custom cursor functionality
document.addEventListener('DOMContentLoaded', function() {
  const customCursor = document.querySelector('.custom-cursor');
  
  if (!customCursor) return;
  
  let isHovering = false;
  
  // Only enable custom cursor on non-touch devices
  if (!('ontouchstart' in window)) {
    customCursor.classList.add('active');
    
    // Move the cursor with mouse movement
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      customCursor.style.left = `${clientX}px`;
      customCursor.style.top = `${clientY}px`;
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .project-card, .tag-btn, .social-link');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover');
        isHovering = true;
      });
      
      el.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover');
        isHovering = false;
      });
    });
    
    // Hide cursor when leaving the window
    document.addEventListener('mouseout', (e) => {
      if (e.relatedTarget === null) {
        customCursor.style.opacity = '0';
      }
    });
    
    document.addEventListener('mouseover', () => {
      customCursor.style.opacity = '1';
    });
  }
});