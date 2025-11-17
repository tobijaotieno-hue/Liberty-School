# Liberty Christian School Website

A complete React application for Liberty Christian School featuring modern design, responsive layout, and comprehensive school information.

## Features

- **Modern React Application** with functional components and hooks
- **React Router** for seamless navigation
- **Tailwind CSS** for responsive, modern styling
- **Comprehensive Pages**: Home, About, Academics (CBC), Programs, Admissions, Testimonials, Gallery, Contact
- **Interactive Components**: Testimonial carousel, image gallery, contact forms
- **Mobile-First Design** with responsive navigation
- **School-Friendly Colors**: Blue, white, and gold theme

## Pages Overview

### Home Page
- Hero section with school branding
- Welcome section with key features
- Reviews widget with sample testimonials
- Call-to-action sections

### About Page
- School mission and vision
- Christian values and core principles
- Leadership team information
- School culture highlights

### Academics Page (CBC Focus)
- Competency-Based Curriculum overview
- Four educational levels: Pre-primary, Lower Primary, Upper Primary, Junior School
- Assessment methods and learning approaches
- Subject offerings for each level

### Programs Page
- Clubs & societies
- Athletics & physical education
- Music, drama, and arts
- School events and chapel services
- Weekly schedule highlights

### Admissions Page
- Step-by-step admission process
- Requirements checklist
- Fee structure table
- Downloadable forms (placeholders)

### Testimonials Page
- Filterable testimonials by role (Parent, Student, Alumni)
- Carousel view for featured testimonials
- Star ratings and statistics

### Gallery Page
- Categorized photo gallery
- Modal view for enlarged images
- Filter by category (Campus, Students, Events, Sports, Arts)

### Contact Page
- Contact form with validation
- Complete contact information
- Google Maps placeholder
- Quick action buttons

## Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Complete footer with links and contact info
- **TestimonialCard**: Reusable testimonial display
- **ReviewCard**: Compact review display for home page
- **Button**: Customizable button component with variants
- **SectionHeader**: Consistent section titles and subtitles

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TestimonialCard.jsx
│   ├── ReviewCard.jsx
│   ├── Button.jsx
│   └── SectionHeader.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── Programs.jsx
│   ├── Admissions.jsx
│   ├── Testimonials.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
├── data/               # Static data
│   ├── testimonials.js
│   ├── academics.js
│   └── programs.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue shades
- Gold: Accent color
- Additional colors can be added as needed

### Content
- Update testimonials in `src/data/testimonials.js`
- Modify academic levels in `src/data/academics.js`
- Adjust programs in `src/data/programs.js`

### Images
Replace placeholder images with actual school photos:
- Hero background image
- Gallery images
- Leadership photos
- Campus photos

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Liberty Christian School. All rights reserved.