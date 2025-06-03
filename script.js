// Hero Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hero slider dots functionality
    const dots = document.querySelectorAll('.hero-dots .dot');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            dot.classList.add('active');
            
            // Here you would typically change the slide
            // For a complete implementation, you would need multiple slides
            // and logic to change between them
        });
    });
    
    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get product info
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // Simple cart functionality (would typically use localStorage or similar)
            alert(`${productName} added to cart!`);
            
            // You could expand this to update a cart counter, store in localStorage, etc.
        });
    });
    
    // Search functionality
    const searchForm = document.querySelector('.search');
    const searchInput = searchForm.querySelector('input');
    const searchButton = searchForm.querySelector('button');
    
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchInput.value.trim() !== '') {
            // In a real implementation, you would redirect to search results
            alert(`Searching for: ${searchInput.value}`);
        }
    });
});