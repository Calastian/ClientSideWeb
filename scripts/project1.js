// QEP Global Learning Website JavaScript
// This file will contain functionality for search filters and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    console.log('QEP Global Learning website loaded');
    
    // Add event listeners for search buttons
    const searchButtons = document.querySelectorAll('.search-btn');
    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.search-section');
            const sectionId = section.id;
            console.log(`Search button clicked in section: ${sectionId}`);
            
            // Placeholder for future search functionality
            alert('Search functionality will be implemented in a future phase');
        });
    });
    
    // Add event listeners for person links
    const personLinks = document.querySelectorAll('.person-link');
    personLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const personName = this.textContent;
            console.log(`Person link clicked: ${personName}`);
            
            // Placeholder for future person detail functionality
            alert(`More information about ${personName} will be available in a future phase`);
        });
    });
    
    // Sample data arrays for future implementation
    const languageData = [
        {firstname: "Noureddine", lastname: "Abidi", language: "French", proficiency: "high", email: "n.abidi@ttu.edu"},
        {firstname: "Noureddine", lastname: "Abidi", language: "Arabic", proficiency: "high", email: "n.abidi@ttu.edu"},
        {firstname: "Amma", lastname: "Akrofi", language: "French", proficiency: "low", email: "amma.akrofi@ttu.edu"},
        {firstname: "Adelia", lastname: "Aquino", language: "Spanish", proficiency: "med", email: "adelia.aquino@ttu.edu"},
        {firstname: "Adelia", lastname: "Aquino", language: "German", proficiency: "low", email: "adelia.aquino@ttu.edu"},
        {firstname: "Adelia", lastname: "Aquino", language: "Portuguese", proficiency: "high", email: "adelia.aquino@ttu.edu"}
    ];
    
    const academicData = [
        {firstname: "Noureddine", lastname: "Abidi", department: "Plant and Soil Science", college: "College of Agricultural Sciences and Natural Resources", country: "Sweden", travelled: "No", collaboration: "Research", location: "KTH"},
        {firstname: "Amma", lastname: "Akrofi", department: "Curriculum Studies and Teacher Education", college: "College of Education", country: "Sierra Leone", travelled: "", collaboration: "Presentation", location: "Schlumberger Foundation"},
        {firstname: "Adelia", lastname: "Aquino", department: "Chemistry and Biochemistry", college: "College of Arts and Sciences", country: "Germany", travelled: "Yes", collaboration: "Research", location: "University of Koblenz, Landau"},
        {firstname: "Tom", lastname: "Arsuffi", department: "Biological Sciences", college: "College of Arts and Sciences", country: "Bhutan", travelled: "No", collaboration: "Research", location: "Government of Bhutan"},
        {firstname: "Dick", lastname: "Auld", department: "Plant and Soil Science", college: "College of Agricultural Sciences and Natural Resources", country: "Brazil", travelled: "Yes", collaboration: "Research", location: "UNESP"}
    ];
    
    const studyAbroadData = [
        {term: "Fall 2019", program: "Chancellor's Scholars Ireland", country: "Ireland", college: "Honors", department: "HON", dates: "10/10/2019 to 10/15/2019", level: "Undergraduate", credits: "3"},
        {term: "Spring 2020", program: "iASE Dominican Republic: Grassroots Community Development and Cross-Cultural Connections", country: "Dominican Republic", college: "", department: "", dates: "", level: "Undergraduate", credits: ""},
        {term: "Spring 2020", program: "UK Finance", country: "United Kingdom", college: "Walker College of Business", department: "FIN", dates: "03/07/2020 to 03/14/2020", level: "Undergraduate", credits: "3"},
        {term: "Spring 2020", program: "Bermuda Finance", country: "Bermuda", college: "Walker College of Business", department: "FIN", dates: "05/10/2020 to 05/16/2020", level: "Undergraduate", credits: "3"}
    ];
    
    // Store data globally for future use
    window.qepData = {
        language: languageData,
        academic: academicData,
        studyAbroad: studyAbroadData
    };
    
    console.log('QEP data loaded:', window.qepData);
});

// Function to filter and display results (placeholder for future implementation)
function filterResults(sectionType, filters) {
    console.log(`Filtering ${sectionType} with filters:`, filters);
    // This function will be implemented in future phases
}

// Function to show person details (placeholder for future implementation)
function showPersonDetails(personData) {
    console.log('Showing person details:', personData);
    // This function will be implemented in future phases
}
