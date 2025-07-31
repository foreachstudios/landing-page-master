# Axees Landing Page

A comprehensive, showcase-focused landing page for the Axees automated influencer marketing platform, designed to serve multiple target audiences including potential users, investors, and general visitors.

## Features

### 🎨 Design & UX
- Modern, clean design with purple/lavender color scheme
- Fully responsive (mobile-first approach)
- Smooth animations and scroll effects
- Interactive hover states and transitions
- Professional showcase-focused layout
- Clear user experience flow for different audiences

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
- Interactive contact and inquiry forms
- FAQ section with expandable answers
- Form validation and user feedback
- Local storage for form data
- Progressive Web App capabilities
- Investor access portal with secure login
- Embedded Vimeo video integration
- Comprehensive app showcase section

### 🎯 Target Audiences
- **Potential Users**: Clear value proposition and feature showcase
- **Investors**: Dedicated access section with exclusive content
- **General Visitors**: Comprehensive information and easy navigation

### 📋 Key Sections
- **Hero Section**: Eye-catching introduction with embedded video
- **App Showcase**: Detailed feature presentation with 6 key capabilities
- **How It Works**: Visual workflow demonstration
- **Investor Access**: Secure portal for exclusive content
- **Features**: Comprehensive benefits overview
- **FAQ**: Common questions and detailed answers
- **Contact**: Multiple contact methods and inquiry form
- **Testimonials**: Social proof from industry leaders
## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Responsive CSS styles
├── script.js           # Interactive JavaScript
├── login.html          # Investor login portal
├── sales.html          # Investor presentation slides
├── slideshow.html      # Full-screen slide presentation
├── manifest.json       # PWA manifest
├── .htaccess          # Apache optimization
├── slides/            # Presentation slide images
└── README.md          # Documentation
```

## Getting Started

1. Open `index.html` in a web browser
2. For development, use a local server:
   ```bash
   python -m http.server 8000
   ```
3. Access at `http://localhost:8000`

### Investor Access
- Navigate to the investor login section
- Use access code: `344456`
- View exclusive presentation materials and slides

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
- FAQ accordion for better content organization
- Contact form with validation and feedback

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

### Video Integration
The Vimeo video is embedded in multiple sections:
- Hero section for immediate impact
- App showcase for detailed presentation
- Responsive and optimized for all devices

## Deployment

### Apache
- Upload all files to web server
- `.htaccess` file handles optimization automatically

### Nginx
Add equivalent configuration for GZIP and caching

### Static Hosting
Works with Netlify, Vercel, GitHub Pages, etc.

## User Experience Flow

### For Potential Users
1. Land on hero section with clear value proposition
2. Watch embedded video for product demonstration
3. Explore app showcase and features
4. Review FAQ for common questions
5. Contact via form or direct email

### For Investors
1. Navigate to investor access section
2. Login with secure access code
3. View exclusive presentation slides
4. Access detailed financial and strategic information
5. Contact investor relations directly

### For General Visitors
1. Explore comprehensive feature overview
2. Understand the technology and benefits
3. Read testimonials and social proof
4. Get questions answered in FAQ
5. Multiple contact options available