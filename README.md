# Axees Landing Page

An optimized, responsive landing page for the Axees automated influencer marketing platform, built with vanilla HTML, CSS, and JavaScript.

## Features

### 🎨 Design & UX
- Modern, clean design with purple/lavender color scheme
- Fully responsive (mobile-first approach)
- Smooth animations and scroll effects
- Interactive hover states and transitions

### 📱 Mobile Optimized
- Mobile-first responsive design
- Touch-friendly navigation
- Optimized typography and spacing
- Fast loading on mobile devices

### ⚡ Performance
- Vanilla JavaScript (no frameworks)
- Optimized CSS with minimal load times
- Browser caching configuration
- GZIP compression support
- DNS prefetching for fonts

### ♿ Accessibility
- Semantic HTML structure
- ARIA labels and keyboard navigation
- High contrast mode support
- Reduced motion preferences respected
- Screen reader compatible

### 🚀 Features
- Responsive navigation with mobile hamburger menu
- Smooth scrolling between sections
- Interactive waitlist signup form
- Form validation and user feedback
- Local storage for form data
- Progressive Web App capabilities

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Responsive CSS styles
├── script.js           # Interactive JavaScript
├── manifest.json       # PWA manifest
├── .htaccess          # Apache optimization
└── README.md          # Documentation
```

## Getting Started

1. Open `index.html` in a web browser
2. For development, use a local server:
   ```bash
   python -m http.server 8000
   ```
3. Access at `http://localhost:8000`

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized CSS with mobile-first approach
- JavaScript lazy loading and performance optimizations
- Image preloading for critical resources
- Efficient event handling with debouncing

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #7c3aed;
    --primary-light: #a855f7;
    /* ... */
}
```

### Content
Modify text content directly in `index.html`

### Functionality
Extend JavaScript features in `script.js`

## Deployment

### Apache
- Upload all files to web server
- `.htaccess` file handles optimization automatically

### Nginx
Add equivalent configuration for GZIP and caching

### Static Hosting
Works with Netlify, Vercel, GitHub Pages, etc.