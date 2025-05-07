document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Data (Simulating a backend/CMS) ---
    const curriculumData = [
        { id: 'c1', month: 'April 2025', ageGroup: 'preschool', title: 'God Made the World', topic: 'Creation Story (Genesis 1)', bibleVerse: 'Genesis 1:1', details: 'Activities focusing on the wonders of creation. Craft: Earth collage.', resourcesLink: '#' },
        { id: 'c2', month: 'April 2025', ageGroup: 'elementary', title: 'Importance of Kindness', topic: 'The Good Samaritan', bibleVerse: 'Luke 10:25-37', details: 'Discussing empathy and helping others. Role-playing scenarios.', resourcesLink: '#' },
        { id: 'c3', month: 'April 2025', ageGroup: 'preteen', title: 'Faith in Action', topic: 'James: Faith and Works', bibleVerse: 'James 2:14-26', details: 'Exploring how faith translates to actions. Group discussion.', resourcesLink: '#' },
        { id: 'c4', month: 'May 2025', ageGroup: 'preschool', title: 'Noah\'s Ark', topic: 'Obedience and God\'s Promises', bibleVerse: 'Genesis 6-9', details: 'Storytelling with animal figures. Song: "Arky Arky".', resourcesLink: '#' },
        { id: 'c5', month: 'May 2025', ageGroup: 'elementary', title: 'The Ten Commandments', topic: 'God\'s Rules for Living', bibleVerse: 'Exodus 20:1-17', details: 'Understanding rules and their importance. Memory game.', resourcesLink: '#' },
        { id: 'c6', month: 'May 2025', ageGroup: 'preteen', title: 'Serving Others', topic: 'Leadership and Humility', bibleVerse: 'Mark 10:42-45', details: 'Brainstorming service projects. Guest speaker (optional).', resourcesLink: '#' }
    ];

    const eventsData = [
        { id: 'e1', title: 'Teacher Training Workshop', date: 'April 25, 2025', time: '10:00 AM - 12:00 PM', location: 'Church Hall Room A', description: 'Focus on new curriculum and classroom management techniques.', rsvpLink: '#' },
        { id: 'e2', title: 'Family Fun Day', date: 'May 10, 2025', time: '2:00 PM - 5:00 PM', location: 'Church Grounds', description: 'Games, food, and fellowship for all Sunday School families.', rsvpLink: '#' },
        { id: 'e3', title: 'Youth Sunday Service', date: 'May 26, 2025', time: '9:00 AM Service', location: 'Main Sanctuary', description: 'Our preteen class will be leading parts of the service.', rsvpLink: '#' }
    ];

    const resourcesData = [
        { id: 'r1', title: 'Creation Story Coloring Pages', category: 'Activity Sheets', ageGroup: 'Preschool', description: 'Printable coloring pages for Genesis 1.', downloadLink: 'path/to/creation-coloring.pdf', type: 'pdf' },
        { id: 'r2', title: 'Good Samaritan Skit Script', category: 'Lesson Plans', ageGroup: 'Elementary', description: 'A simple skit script for the Good Samaritan story.', downloadLink: 'path/to/samaritan-skit.docx', type: 'doc' },
        { id: 'r3', title: 'Craft Idea: Prayer Jar', category: 'Craft Ideas', ageGroup: 'All Ages', description: 'Instructions for making a prayer jar.', downloadLink: 'path/to/prayer-jar-craft.pdf', type: 'pdf' },
        { id: 'r4', title: 'Song: "Jesus Loves Me"', category: 'Music', ageGroup: 'All Ages', description: 'Lyrics and chords for "Jesus Loves Me".', downloadLink: 'path/to/jesus-loves-me.txt', type: 'txt' }
    ];

    const articlesData = [
        { id: 'a1', title: 'Engaging Preschoolers: Tips & Tricks', date: 'April 10, 2025', author: 'Jane Doe', summary: 'Discover effective strategies to keep your youngest learners engaged and excited about Sunday School.', contentLink: '#' },
        { id: 'a2', title: 'The Power of Storytelling in Teaching', date: 'April 18, 2025', author: 'John Smith', summary: 'Learn how to use storytelling to make Bible lessons more memorable and impactful for all age groups.', contentLink: '#' },
        { id: 'a3', title: 'Dealing with Distractions in Class', date: 'May 5, 2025', author: 'Admin', summary: 'Practical advice for managing common classroom distractions and maintaining a focused learning environment.', contentLink: '#' }
    ];


    // --- Curriculum Page Logic ---
    const curriculumGrid = document.getElementById('curriculum-grid');
    const ageGroupFilter = document.getElementById('age-group-filter');
    const monthFilter = document.getElementById('month-filter');

    function populateCurriculumFilters() {
        if (!ageGroupFilter || !monthFilter) return;

        const months = [...new Set(curriculumData.map(item => item.month))];
        months.forEach(month => {
            const option = document.createElement('option');
            option.value = month;
            option.textContent = month;
            monthFilter.appendChild(option);
        });
    }

    function displayCurriculum(items) {
        if (!curriculumGrid) return;
        curriculumGrid.innerHTML = ''; // Clear existing items
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'curriculum-card';
            card.innerHTML = `
                <span class="age-group">${item.ageGroup.charAt(0).toUpperCase() + item.ageGroup.slice(1)}</span>
                <h3>${item.title}</h3>
                <p><strong>Month:</strong> ${item.month}</p>
                <p><strong>Topic:</strong> ${item.topic}</p>
                <p><strong>Bible Verse:</strong> ${item.bibleVerse}</p>
                <div class="details">
                    <p>${item.details}</p>
                </div>
                <a href="${item.resourcesLink}" class="read-more">View Resources</a>
            `;
            curriculumGrid.appendChild(card);
        });
    }

    function filterCurriculum() {
        if (!curriculumGrid) return;
        const selectedAge = ageGroupFilter.value;
        const selectedMonth = monthFilter.value;

        let filteredItems = curriculumData;

        if (selectedAge !== 'all') {
            filteredItems = filteredItems.filter(item => item.ageGroup === selectedAge);
        }
        if (selectedMonth !== 'all') {
            filteredItems = filteredItems.filter(item => item.month === selectedMonth);
        }
        displayCurriculum(filteredItems);
    }

    if (curriculumGrid) {
        populateCurriculumFilters();
        displayCurriculum(curriculumData); // Display all initially
        ageGroupFilter.addEventListener('change', filterCurriculum);
        monthFilter.addEventListener('change', filterCurriculum);
    }

    // --- Events Page Logic ---
    const eventCardsContainer = document.getElementById('event-cards-container');
    function displayEvents() {
        if (!eventCardsContainer) return;
        eventCardsContainer.innerHTML = '';
        eventsData.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <h3>${event.title}</h3>
                <p class="date-time"><strong>Date:</strong> ${event.date} | <strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <div class="details">
                    <p>${event.description}</p>
                </div>
                ${event.rsvpLink !== '#' ? `<a href="${event.rsvpLink}" class="read-more" target="_blank">RSVP / More Info</a>` : ''}
            `;
            eventCardsContainer.appendChild(card);
        });
    }
    if (eventCardsContainer) displayEvents();

    // --- Resources Page Logic ---
    const resourceItemsContainer = document.getElementById('resource-items-container');
    const categoryFilter = document.getElementById('category-filter');
    const searchResourcesInput = document.getElementById('search-resources');

    function populateResourceCategories() {
        if (!categoryFilter) return;
        const categories = [...new Set(resourcesData.map(item => item.category))];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    function displayResources(items) {
        if (!resourceItemsContainer) return;
        resourceItemsContainer.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'resource-item';
            card.innerHTML = `
                <span class="category">${item.category}</span>
                <h3>${item.title}</h3>
                <p><strong>Age Group:</strong> ${item.ageGroup}</p>
                <div class="details">
                    <p>${item.description}</p>
                </div>
                <a href="${item.downloadLink}" class="download-link" download>Download (${item.type.toUpperCase()})</a>
            `;
            resourceItemsContainer.appendChild(card);
        });
    }

    function filterAndSearchResources() {
        if (!resourceItemsContainer) return;
        const selectedCategory = categoryFilter.value;
        const searchTerm = searchResourcesInput.value.toLowerCase();

        let filteredItems = resourcesData;

        if (selectedCategory !== 'all') {
            filteredItems = filteredItems.filter(item => item.category === selectedCategory);
        }
        if (searchTerm) {
            filteredItems = filteredItems.filter(item =>
                item.title.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)
            );
        }
        displayResources(filteredItems);
    }

    if (resourceItemsContainer) {
        populateResourceCategories();
        displayResources(resourcesData);
        categoryFilter.addEventListener('change', filterAndSearchResources);
        searchResourcesInput.addEventListener('keyup', filterAndSearchResources);
    }

    // --- Teacher's Corner Page Logic ---
    const articlesContainer = document.getElementById('articles-container');
    function displayArticles() {
        if (!articlesContainer) return;
        articlesContainer.innerHTML = '';
        articlesData.forEach(article => {
            const card = document.createElement('div');
            card.className = 'article-card';
            card.innerHTML = `
                <h3>${article.title}</h3>
                <p class="article-meta">By ${article.author} on ${article.date}</p>
                <div class="details">
                    <p>${article.summary}</p>
                </div>
                <a href="${article.contentLink}" class="read-more">Read Full Article</a>
            `;
            articlesContainer.appendChild(card);
        });
    }
    if (articlesContainer) displayArticles();


    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateContactForm()) {
                // Simulate form submission
                formStatus.textContent = "Thank you for your message! We'll be in touch soon.";
                formStatus.style.color = 'green';
                contactForm.reset();
                clearErrorMessages(); // Clear any previous error messages
                setTimeout(() => formStatus.textContent = '', 5000); // Clear status after 5s
            } else {
                formStatus.textContent = "Please correct the errors in the form.";
                formStatus.style.color = 'red';
            }
        });
    }

    function validateContactForm() {
        let isValid = true;
        clearErrorMessages();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
            isValid = false;
        }
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required.');
            isValid = false;
        }
        return isValid;
    }

    function showError(inputElement, message) {
        const formGroup = inputElement.parentElement;
        const errorMessageElement = formGroup.querySelector('.error-message');
        if (errorMessageElement) {
            errorMessageElement.textContent = message;
        }
        inputElement.style.borderColor = 'red'; // Optional: highlight border
    }

    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');
        const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
        inputs.forEach(input => input.style.borderColor = ''); // Reset border color
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

}); // End DOMContentLoaded