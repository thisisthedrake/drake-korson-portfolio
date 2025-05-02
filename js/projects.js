// Projects functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const tagFilter = document.getElementById('tag-filter');
  const featuredProjectsContainer = document.getElementById('featured-projects');
  const secondaryProjectsContainer = document.getElementById('secondary-projects');
  const emptyProjectsMessage = document.getElementById('empty-projects');
  const projectsLoader = document.getElementById('projects-loader');
  
  if (!tagFilter || !featuredProjectsContainer || !secondaryProjectsContainer) return;
  
  let selectedTag = 'all';
  let filteredProjects = [];
  
  // Initialize the page
  initializeProjects();
  
  function initializeProjects() {
    // Extract all unique tags from projects
    const allTags = [...new Set(projects.flatMap(project => project.tags))];
    
    // Populate tag filter
    populateTagFilter(allTags);
    
    // Simulate loading time
    setTimeout(() => {
      // Filter projects
      filterProjects('all');
      
      // Hide loader
      if (projectsLoader) {
        projectsLoader.style.display = 'none';
      }
    }, 500);
  }
  
  function populateTagFilter(tags) {
    // We already have "All" tag added in HTML
    
    // Add other tags
    tags.forEach(tag => {
      const tagButton = document.createElement('button');
      tagButton.className = 'tag-btn';
      tagButton.setAttribute('data-tag', tag);
      tagButton.textContent = tag;
      
      tagButton.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.tag-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        tagButton.classList.add('active');
        
        // Filter projects by tag
        filterProjects(tag);
      });
      
      tagFilter.appendChild(tagButton);
    });
  }
  
  function filterProjects(tag) {
    selectedTag = tag;
    
    // Filter projects based on tag
    if (tag === 'all') {
      filteredProjects = [...projects];
    } else {
      filteredProjects = projects.filter(project => project.tags.includes(tag));
    }
    
    // Split into featured and secondary projects
    const featuredProjects = filteredProjects.filter(project => project.featured);
    const secondaryProjects = filteredProjects.filter(project => !project.featured);
    
    // Render projects
    renderFeaturedProjects(featuredProjects);
    renderSecondaryProjects(secondaryProjects);
    
    // Show/hide empty state message
    if (filteredProjects.length === 0) {
      emptyProjectsMessage.style.display = 'block';
    } else {
      emptyProjectsMessage.style.display = 'none';
    }
  }
  
  function renderFeaturedProjects(projects) {
    // Clear container
    featuredProjectsContainer.innerHTML = '';
    
    // Render each project
    projects.forEach(project => {
      const projectCard = createProjectCard(project, true);
      featuredProjectsContainer.appendChild(projectCard);
    });
    
    // Show or hide container based on results
    featuredProjectsContainer.style.display = projects.length > 0 ? 'grid' : 'none';
  }
  
  function renderSecondaryProjects(projects) {
    // Clear container
    secondaryProjectsContainer.innerHTML = '';
    
    // Render each project
    projects.forEach(project => {
      const projectCard = createProjectCard(project, false);
      secondaryProjectsContainer.appendChild(projectCard);
    });
    
    // Show or hide container and title based on results
    const moreTitleElement = document.querySelector('.more-projects-title');
    if (moreTitleElement) {
      moreTitleElement.style.display = projects.length > 0 ? 'block' : 'none';
    }
    secondaryProjectsContainer.style.display = projects.length > 0 ? 'grid' : 'none';
  }
  
  function createProjectCard(project, featured) {
    const projectCard = document.createElement('div');
    projectCard.className = `project-card ${featured ? 'featured' : ''}`;
    projectCard.addEventListener('click', () => {
      window.location.href = `project.html?id=${project.id}`;
    });
    
    // Create inner structure
    projectCard.innerHTML = `
      <div class="card-inner">
        <div class="card-image-wrapper">
          <img src="${project.image}" alt="${project.title}" class="card-image">
        </div>
        
        <div class="card-content">
          <div class="card-tags">
            ${project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
          </div>
          
          <p class="card-description">${project.description}</p>
          ${featured ? `<span class="view-project">View Case Study <i class="fas fa-arrow-right"></i></span>` : ''}
          <h3 class="card-title">${project.title}</h3>
          </div>
      </div>
    `;
    
    return projectCard;
  }
});