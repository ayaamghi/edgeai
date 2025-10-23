# Edge Labs – AI Image Detector

A React-based web application for detecting AI-generated images, built by Edge Labs at UNC.

## Features

- **Clean, Modern UI**: Inspired by Google Research blog pages with generous whitespace and readable typography
- **Three Main Pages**:
  - **Home**: Longform introduction with hero section, methodology overview, and feature cards
  - **Tool**: Interactive image upload with drag-and-drop, mock AI detection, and results history
  - **About**: Team showcase with member profiles
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Responsive Design**: Mobile-first layout that scales beautifully to desktop
- **Accessibility**: Keyboard navigation, focus rings, and ARIA labels
- **Mock Analysis**: Simulates AI detection with progress bars and confidence scores

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS 3** - Utility-first styling
- **JavaScript** - No TypeScript for simplicity

## Installation & Setup

### Prerequisites

- Node.js 16+ and npm

### Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
/edge-labs-ai-detector
  ├─ index.html                    # HTML entry point
  ├─ package.json                  # Dependencies and scripts
  ├─ vite.config.js                # Vite configuration
  ├─ postcss.config.js             # PostCSS config for Tailwind
  ├─ tailwind.config.js            # Tailwind theme (Carolina Blue brand color)
  └─ src/
     ├─ main.jsx                   # React entry point
     ├─ App.jsx                    # Root component with routing
     ├─ routes/
     │   ├─ Home.jsx               # Home page with hero & longform sections
     │   ├─ Tool.jsx               # Image upload & analysis tool
     │   └─ About.jsx              # Team page
     ├─ components/
     │   ├─ Header.jsx             # Navigation header
     │   ├─ Footer.jsx             # Page footer
     │   ├─ Container.jsx          # Layout container
     │   ├─ Card.jsx               # Reusable card component
     │   ├─ Button.jsx             # Button with variants
     │   ├─ UploadDropzone.jsx     # Drag-and-drop file upload
     │   ├─ ResultCard.jsx         # Analysis result display
     │   ├─ ProgressBar.jsx        # Progress indicator
     │   └─ ToggleTheme.jsx        # Dark mode toggle
     └─ styles/
         └─ globals.css            # Tailwind imports & global styles
```

## Color Palette

- **Brand (Carolina Blue)**: `#4B9CD3`
  - 600: `#3b85b5`
  - 700: `#2f6b93`
- **Text**: Gray-900 (dark mode: Gray-100)
- **Backgrounds**: White (dark mode: Gray-900)
- **Borders**: Gray-200 (dark mode: Gray-700)

## Customization Guide

### Replacing Placeholder Content

1. **Home Page** (`src/routes/Home.jsx`):
   - Search for "Lorem ipsum" and replace with actual project descriptions
   - Update methodology code blocks and diagrams
   - Replace callout card content with real metrics

2. **About Page** (`src/routes/About.jsx`):
   - Update `teamMembers` array with real team data
   - Replace placeholder images with actual headshots
   - Add real LinkedIn URLs

3. **Images**:
   - Add images to `src/assets/` directory
   - Import and use instead of placehold.co URLs
   - Update sample images in Tool page

### Wiring Backend API

In `src/routes/Tool.jsx`, find the `analyzeImage` function (~line 40) and replace the mock logic:

```javascript
// Replace this mock code:
await new Promise(resolve => setTimeout(resolve, 1200));
const mockResult = { /* ... */ };

// With actual API call:
const formData = new FormData();
formData.append('image', selectedFile);

const response = await fetch('/api/analyze', {
  method: 'POST',
  body: formData,
});

const data = await response.json();
setResult({
  label: data.label,
  confidence: data.confidence,
  explanation: data.explanation,
  // ... other fields
});
```

## Key Features Breakdown

### Home Page
- Hero section with CTA buttons
- Sticky in-page navigation (Motivation, Approach, Methodology)
- Two-column layout with figure placeholder
- Methodology section with code block
- Three callout cards (Accuracy, Limitations, Roadmap)
- Footer CTA to Tool page

### Tool Page
- Drag-and-drop upload zone
- Image preview with remove button
- Analyze button with loading state and progress bar
- Result card with:
  - Label badge (AI-generated / Human-made)
  - Confidence percentage and bar
  - Explanation text
- Sample images for quick testing
- Recent analysis history (last 3 items)
- Mock logic: filenames containing "ai" → classified as AI
- Backend integration guide

### About Page
- Team introduction paragraph
- Four-member grid with:
  - Circular headshots
  - Name and role
  - Bio sentence
  - LinkedIn link placeholders

### Components
- **Header**: Logo, navigation links, dark mode toggle
- **Footer**: Copyright, placeholder links
- **Container**: Responsive max-width wrapper
- **Card**: Flexible card with title, content, optional footer
- **Button**: Primary, secondary, ghost variants
- **UploadDropzone**: Accessible file input with drag-drop
- **ResultCard**: Displays analysis results with badge and progress
- **ProgressBar**: Animated width-based progress
- **ToggleTheme**: Sun/moon icon toggle with localStorage

## Browser Support

Modern browsers with ES6+ support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT

## Contact

Edge Labs @ UNC
[GitHub](#) | [Contact](#)
