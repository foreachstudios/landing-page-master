# Pitch Deck Slides Setup

The sales page has been updated to display the pitch deck slides directly. 

## Setup Instructions

The slide images have been generated from the PDF and are located in the `slides/` directory:
- slide-01.png through slide-10.png
- Each slide is optimized for web display at 1920x1080 resolution

## Features Implemented

- **Professional Presentation Interface**: Dark theme with smooth transitions
- **Navigation Options**:
  - Previous/Next buttons
  - Keyboard shortcuts (← → arrows, F for fullscreen)
  - Touch/swipe support on mobile
  - Thumbnail navigation on desktop
- **Performance**: Lazy loading for faster initial load
- **Responsive Design**: Works on all devices
- **Authentication**: Maintains investor login requirement

## File Structure
```
landing-page/
├── sales.html          # Updated with embedded slide viewer
├── Axees_Deck.pdf     # Original pitch deck
└── slides/            # Converted slide images
    ├── slide-01.png
    ├── slide-02.png
    ├── ...
    └── slide-10.png
```

## Notes
- The slides are high-quality PNG images maintaining the 16:9 aspect ratio
- Total size of all slides: ~5MB
- Images are optimized for web viewing while preserving text clarity