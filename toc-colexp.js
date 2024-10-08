 document.addEventListener('DOMContentLoaded', function () {
  const tocHeaders = document.querySelectorAll('h2.Sidebar-headingTRQyOa2pk0gh.rm-Sidebar-heading');
  const sidebarLists = document.querySelectorAll('.rm-Sidebar-list');
  
  // Initially hide all sidebar lists
  sidebarLists.forEach((element) => (element.style.display = 'none'));

  tocHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      const parentSection = this.parentElement; // Find the parent section of the header
      const subList = parentSection.querySelector('ul.Sidebar-list3cZWQLaBf9k8.rm-Sidebar-list');
      
      if (subList) {
        // Toggle the display of the subsections
        if (subList.style.display === 'none') {
          subList.style.display = 'block'; // Show subsections
          header.classList.add('expanded'); // Add expanded class to show chevron down
        } else {
          subList.style.display = 'none'; // Hide subsections
          header.classList.remove('expanded'); // Remove expanded class to show chevron right
        }
      }
    });
  });
});