document.addEventListener('DOMContentLoaded', function () {
  const tocHeaders = document.querySelectorAll('h2.Sidebar-headingTRQyOa2pk0gh.rm-Sidebar-heading');
  const sidebarLists = document.querySelectorAll('.rm-Sidebar-list');
  tocHeaders.forEach(function (header) {
    sidebarLists.forEach((element) => (element.style.display = 'none'));
    header.addEventListener('click', function () {
      const parentSection = this.parentElement; // Find the parent section of the header
      const subList = parentSection.querySelector('ul.Sidebar-list3cZWQLaBf9k8.rm-Sidebar-list');
      if (subList) {
        if (subList.style.display === 'none') {
          subList.style.display = 'block'; // Show the subsections
        } else {
          subList.style.display = 'none'; // Hide the subsections
        }
      }
    });
  });
});