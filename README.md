# Sunday School Hub Website

## Project Overview

The Sunday School Hub is a comprehensive, client-side website designed to support Sunday School teachers and coordinators. It provides a centralized platform for accessing curriculum details, upcoming event information, downloadable teaching resources, and a space for teacher encouragement and community.

This project is built entirely with HTML, CSS, and vanilla JavaScript, demonstrating how a dynamic and interactive user experience can be achieved without a backend for content display and basic interactions.

## Live Demo

**(You will fill this in after deploying the site - e.g., `https://yourusername.github.io/sunday-school-hub/` or `https://your-project-name.netlify.app/`)**

## Features

*   **Home Page:** Welcoming introduction, quick links to key sections, and an overview of the site's purpose.
*   **Curriculum Page:**
    *   Dynamically loaded curriculum data.
    *   Filter lessons by age group (Preschool, Elementary, Preteen) and month.
    *   Card-based display for easy readability.
*   **Events Page:**
    *   Lists upcoming events with details like date, time, location, and description.
    *   Card-based display.
*   **Resources Page:**
    *   A library of downloadable teaching materials.
    *   Filter resources by category.
    *   Search functionality for resources.
    *   Direct download links for various file types.
*   **Teacher's Corner:**
    *   A section for articles, tips, and encouragement for teachers.
*   **Gallery Page:**
    *   A simple image gallery to showcase Sunday School moments and activities.
*   **Contact Page:**
    *   Contact form with client-side validation for name, email, and message.
    *   Displays contact information and an optional map embed location.
*   **Responsive Design:** The website is designed to be accessible and usable across various devices (desktops, tablets, and mobile phones).
*   **Modern UI/UX:** Clean, user-friendly interface with a consistent theme, using CSS Grid/Flexbox for layout, and hover effects for better interactivity.
*   **Dynamic Content:** JavaScript is used to populate curriculum, events, resources, and articles from data arrays, making content updates manageable within the `script.js` file.
*   **Sticky Navigation:** The header and navigation bar remain visible while scrolling for easy access.
*   **Font Awesome Icons:** Used for visual cues and enhancing the user interface (optional, can be removed).

## Technologies Used

*   **HTML5:** For the structure and content of the web pages.
*   **CSS3:** For styling, layout (including Flexbox and Grid), and responsiveness.
    *   Custom CSS variables for theming.
    *   Google Fonts (`Poppins`).
*   **JavaScript (ES6+):** For dynamic content rendering, interactivity, form validation, and DOM manipulation. No external frameworks or libraries (except Font Awesome for icons, if used).

## Project Structure
Use code with caution.
Markdown
sunday-school-website/
├── index.html # Home Page
├── curriculum.html # Curriculum Page
├── events.html # Upcoming Events Page
├── resources.html # Resources Page
├── teachers-corner.html # Teacher's Corner Page
├── gallery.html # Gallery Page
├── contact.html # Contact Page
├── style.css # Main Stylesheet
├── script.js # Main JavaScript File
├── logo.png # Site Logo (example)
├── hero-background.jpg # Background image for home page hero (example)
├── placeholder-image.jpg # Placeholder for gallery (example)
└── README.md # This file
## Setup and Usage

1.  **Clone or Download:**
    *   If you have Git: `git clone <repository-url>`
    *   Otherwise, download the ZIP file and extract it.
2.  **Navigate to the project directory:**
    `cd sunday-school-website`
3.  **Open in Browser:**
    Open the `index.html` file in your preferred web browser to view the website locally.

All content (curriculum, events, resources, articles) is currently hardcoded within JavaScript arrays in `script.js`. To update content, modify these arrays.

## Future Enhancements (Ideas)

*   **Backend Integration:** Connect to a database (e.g., Firebase, Supabase, or a custom backend with Node.js/Python/PHP) for dynamic content management.
*   **User Authentication:** Allow teachers to log in to access specific content or contribute.
*   **Content Management System (CMS):** Integrate a headless CMS for easier content updates by non-technical users.
*   **Interactive Quizzes/Games:** Add educational games related to lessons.
*   **Lesson Submission/Sharing:** Allow teachers to submit their own lesson plans or resources.
*   **Calendar Integration:** More robust event calendar with iCal export.
*   **Enhanced Search:** More powerful site-wide search functionality.

## Contributing

This is currently a personal/demonstration project. If you have suggestions or find bugs, feel free to open an issue (if hosted on a platform like GitHub).

---
Use code with caution.
Hosting Your Website (Making it Live)
Since your website is built with HTML, CSS, and JavaScript (a "static site"), there are many free and easy ways to host it. Here are a few popular options:
1. GitHub Pages
If your project is already (or will be) on GitHub, this is one of the simplest options.
Steps:
Create a GitHub Repository: If you haven't already, create a new repository on GitHub (e.g., sunday-school-hub).
Push Your Code: Add your HTML, CSS, JS, and image files to this repository and push them.
git init
git add .
git commit -m "Initial commit of Sunday School Hub website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
Use code with caution.
Bash
Enable GitHub Pages:
Go to your repository on GitHub.
Click on "Settings".
In the left sidebar, click on "Pages" (under "Code and automation").
Under "Build and deployment," for "Source," select "Deploy from a branch."
For "Branch," select main (or master if that's your default) and the / (root) folder.
Click "Save."
Access Your Site: GitHub will provide you with a URL, usually in the format https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/. It might take a few minutes for the site to become live.
Pros: Free, integrates directly with your Git workflow.
Cons: Site is public.
2. Netlify
Netlify is incredibly popular for hosting static sites and offers a generous free tier.
Steps (Drag & Drop):
Sign up/Log in: Go to netlify.com and create an account (you can use GitHub, GitLab, Bitbucket, or email).
Deploy:
On your Netlify dashboard, you'll see an area to "Drag and drop your site folder here."
Simply drag your entire project folder (the one containing index.html, style.css, etc.) into this area.
Access Your Site: Netlify will build and deploy your site, giving you a random subdomain (e.g., random-name-12345.netlify.app). You can customize this subdomain in the site settings or add a custom domain.
Steps (Git-based):
Sign up/Log in to Netlify.
Click "Add new site" -> "Import an existing project."
Connect to your Git provider (GitHub, GitLab, Bitbucket).
Select the repository containing your website.
Configure build settings (for a simple static site, Netlify usually auto-detects this, leaving build command and publish directory blank or . often works).
Click "Deploy site."
Pros: Free, very easy to use, continuous deployment from Git, custom domains, HTTPS, form handling, and more.
3. Vercel
Vercel (from the creators of Next.js) is another excellent platform for static sites and frontend frameworks.
Steps:
Sign up/Log in: Go to vercel.com and create an account (often with GitHub).
Import Project:
Click "Add New..." -> "Project."
Import your Git repository (e.g., from GitHub).
Configure Project: Vercel will usually auto-detect it's a static site. You might not need to change any settings.
Deploy: Click "Deploy."
Access Your Site: Vercel will provide you with a live URL.
Pros: Free, very fast, great Git integration, continuous deployment, custom domains, HTTPS.
4. Cloudflare Pages
Cloudflare Pages offers robust static site hosting with the power of Cloudflare's global network.
Steps:
Sign up/Log in: Go to dash.cloudflare.com and create an account.
Navigate to "Workers & Pages" -> "Create application" -> "Pages" -> "Connect to Git."
Select your Git repository.
Configure build settings (usually none needed for plain HTML/CSS/JS).
Deploy.
Pros: Free, excellent performance, Git integration, custom domains, HTTPS.
Once you've deployed your site using one of these methods, copy the live URL and paste it into the "Live Demo" section of your README.md file.
Choose the hosting option that you find easiest to get started with. Netlify and GitHub Pages are often recommended for beginners due to their simplicity for static sites.
