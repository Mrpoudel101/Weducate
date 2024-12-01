// Select the dropdown icon and menu
const dropdownIcon = document.querySelector('.dropdown_icon');
const dropdownMenu = document.querySelector('.dropdown_menu');

// Add a click event listener to the icon
dropdownIcon.addEventListener('click', () => {
    // Toggle the display of the dropdown menu
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});
