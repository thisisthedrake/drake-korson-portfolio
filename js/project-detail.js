// Project detail functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const projectContent = document.getElementById('project-content');
  const projectLoader = document.getElementById('project-loader');
  const projectNotFound = document.getElementById('project-not-found');
  
  if (!projectContent || !projectLoader || !projectNotFound) return;
  
  // Get project ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = parseInt(urlParams.get('id'));
  
  // Timeout for simulating loading time
  setTimeout(() => {
    if (projectLoader) {
      projectLoader.style.display = 'none';
    }
    
    if (!projectId) {
      showNotFound();
      return;
    }
    
    // Find project by ID
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      showNotFound();
      return;
    }
    
    // Render project details
    renderProjectDetails(project);
    
    // Update page title
    document.title = `${project.title} | Design Portfolio`;
  }, 500);
  
  function showNotFound() {
    projectContent.style.display = 'none';
    projectNotFound.style.display = 'block';
  }
  
  function renderProjectDetails(project) {
    const {
      title,
      description,
      tags,
      category,
      detailImage,
      image,
      client,
      timeline,
      role,
      overview,
      research,
      process,
      solution,
      results,
      reflection,
      gallery
    } = project;
    
    // Create the HTML structure
    let html = `
      <div class="project-header">
        <span class="category">${category}</span>
        <h1 class="title">${title}</h1>
        <div class="tags">
          ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <p class="description">${description}</p>
      </div>
      
      <div class="project-hero-image">
        <img src="${detailImage || image}" alt="${title} - Hero Image">
      </div>
      
      <div class="project-meta">
        ${client ? `
          <div class="meta-item">
            <h3>Client</h3>
            <p>${client}</p>
          </div>
        ` : ''}
        
        ${timeline ? `
          <div class="meta-item">
            <h3>Timeline</h3>
            <p>${timeline}</p>
          </div>
        ` : ''}
        
        ${role ? `
          <div class="meta-item">
            <h3>My Role</h3>
            <p>${role}</p>
          </div>
        ` : ''}
      </div>
    `;
    
    // Add overview section if available
    if (overview) {
      html += `
        <div class="project-section">
          <h3>Project Overview</h3>
          <p>${overview}</p>
        </div>
      `;
    }
    
    // Add research section if available
    if (research) {
      html += `
        <div class="project-section">
          <h3>Research & Discovery</h3>
          <p>${research}</p>
        </div>
      `;
    }
    
    // Add process section if available
    if (process) {
      html += `
        <div class="project-section">
          <h3>Design Process</h3>
          <p>${process}</p>
          
          <div class="process-steps">
            <div class="process-step">
              <h4>1. User Flows</h4>
              <p>Redesigned the key user journeys from browsing to checkout</p>
            </div>
            
            <div class="process-step">
              <h4>2. Wireframes</h4>
              <p>Created low and high-fidelity wireframes for key screens</p>
            </div>
            
            <div class="process-step">
              <h4>3. Visual Design</h4>
              <p>Developed a cohesive visual system aligned with brand identity</p>
            </div>
          </div>
        </div>
      `;
    }
    
    // Add solution and results section if available
    if (solution && results) {
      html += `
        <div class="project-section">
          <h3>Solution & Results</h3>
          <div class="results-grid">
            <div>
              <p>The final design featured:</p>
              <p>${solution}</p>
            </div>
            
            ${results.length > 0 ? `
              <div>
                <p>Post-launch results:</p>
                <ul class="results-list">
                  ${results.map(result => `<li>${result}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }
    
    // Add gallery if available
    if (gallery && gallery.length > 0) {
      html += `
        <div class="project-section">
          <div class="project-gallery">
            ${gallery.map(image => `
              <div class="gallery-image">
                <img src="${image}" alt="${title} - Gallery Image">
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    // Add reflection if available
    if (reflection) {
      html += `
        <div class="project-section">
          <h3>Reflection</h3>
          <p>${reflection}</p>
        </div>
      `;
    }
    
    // Set HTML content
    projectContent.innerHTML = html;
    
    // Fade in content
    setTimeout(() => {
      projectContent.style.opacity = '1';
    }, 100);
  }
});