document.addEventListener('DOMContentLoaded', () => {
    console.log('JR Industries landing page loaded with Lightbox functionality.');

    // 1. Create the modal elements dynamically
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.classList.add('modal');

    const modalContent = document.createElement('img');
    modalContent.classList.add('modal-content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;'; // HTML entity for 'x'

    // Append elements to the modal, then append modal to the body
    modal.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // 2. Get all images within the work-item containers
    const workImages = document.querySelectorAll('.work-item img');

    // 3. Add click event listeners to open the modal
    workImages.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            // Set the clicked image's source as the modal image source
            modalContent.src = this.src; 
        });
    });

    // 4. Add click event listener to close the modal (the 'x' button)
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // 5. Add click event listener to close the modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Basic smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});