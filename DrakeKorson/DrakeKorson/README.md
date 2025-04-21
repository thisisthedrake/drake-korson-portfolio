# Static Portfolio Website

This is a converted version of the React portfolio site, now using simple HTML, CSS, and JavaScript for easier editing and maintenance.

## File Structure

```
static/
├── css/
│   ├── styles.css       # Main stylesheet
│   └── grain.css        # Grain overlay and cursor styles
├── js/
│   ├── data.js          # Project data
│   ├── cursor.js        # Custom cursor functionality
│   ├── projects.js      # Projects grid and filtering
│   ├── project-detail.js # Project detail page functionality
│   └── main.js          # Main site functionality
├── index.html           # Home page
└── project.html         # Project detail page
```

## How to Edit

### Modifying Content

1. **Project Data**: Edit the `js/data.js` file to update project information
2. **Text & Layout**: Edit HTML directly in `index.html` or `project.html`
3. **Contact Information**: Update in the Contact section of `index.html`
4. **About Section**: Modify content in the About section of `index.html`

### Styling

1. **Colors**: Edit CSS variables in `css/styles.css` to change the color scheme
2. **Typography**: Update font styles in the CSS or change font imports in HTML
3. **Layout**: Modify grid layouts and spacing in `css/styles.css`

### Adding New Projects

To add a new project, add an entry to the `projects` array in `js/data.js`:

```javascript
{
  id: 7, // Make sure this is unique
  title: "New Project Title",
  description: "Brief description of the project",
  category: "UX/UI Design",
  tags: ["ux", "web", "branding"],
  image: "path/to/main/image.jpg",
  detailImage: "path/to/detail/image.jpg",
  client: "Client Name",
  timeline: "Duration",
  role: "Your Role",
  overview: "Detailed overview...",
  // Additional fields as needed
  featured: true, // Set to true for featured projects
}
```

## Customization Tips

### Changing Colors

Update the CSS variables at the top of `css/styles.css`:

```css
:root {
  --color-background: #0e0e12;
  --color-surface: #161622;
  --color-primary: #d8a764;
  --color-secondary: #f8f8f8;
  /* ... other variables */
}
```

### Modifying the Grain Effect

Adjust the opacity or animation in `css/grain.css`.

### Adding or Removing Sections

Simply add or remove sections in the HTML files following the existing patterns.

## Deployment

To deploy this site:

1. Upload all files to your web hosting provider
2. No build step is required - this is pure HTML, CSS, and JavaScript
3. Works with any static site hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Notes

- The site includes responsive design for mobile, tablet, and desktop
- Custom cursor functionality automatically disables on touch devices
- Project filtering works client-side using JavaScript