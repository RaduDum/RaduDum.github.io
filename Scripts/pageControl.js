
{


    var careerBtn = document.getElementById("careerBtn");
    var educationBtn = document.getElementById("educationBtn");
    var projectsBtn = document.getElementById("projectsBtn");
    var skillsBtn = document.getElementById("skillsBtn");

    careerBtn.addEventListener('click', (e) => {
        delete_all();
        displayCareerPage();
    });

    educationBtn.addEventListener('click', (e) => {
        delete_all();
        displayEducationBtn();
    });
    
    projectsBtn.addEventListener('click', (e) => {
        delete_all();
        displayProjectsPage();
    });

    skillsBtn.addEventListener('click', (e) => {
        delete_all();
        displaySkillsPage();
    });


    function delete_all() {
        alert('PP');
    }

    function displayCareerPage() {


    }

    function displayEducationBtn() {


    }

    function displayProjectsPage() {


    }

    function displayProjectsPage() {


    }
}



// OnUIButtonPress >
// 
// HideAll
// DisplayCurrentSelection
//
//



//    var artti1 = document.getElementById("art1");
//    var artti2 = document.getElementById("art2");
//    var artti3 = document.getElementById("art3");
//    var artti4 = document.getElementById("art4");
//    artti1.style.visibility = 'hidden';
//    artti2.style.visibility = 'hidden';
//    artti3.style.visibility = 'hidden';
//    artti4.style.visibility = 'hidden';
//          function hide_all() {
//        artti1.style.visibility = 'hidden';
//          artti2.style.visibility = 'hidden';
//          artti3.style.visibility = 'hidden';
//          artti4.style.visibility = 'hidden';
//          }
//          function show_1() {
//        hide_all();
//              artti1.style.visibility = 'visible';
//          }
//          function show_2() {
//        hide_all();
//              artti2.style.visibility = 'visible';
//          }
//          function show_3() {
//        hide_all();
//              artti3.style.visibility = 'visible';
//          }
//          function show_4() {
//        hide_all();
//              artti4.style.visibility = 'visible';
//          }
