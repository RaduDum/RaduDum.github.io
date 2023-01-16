
{
    const CONTENT_NAMES =
    [
        "career",
        "education",
        "projects",
        "skills"
    ];


    var careerBtn = document.getElementById("careerBtn");
    var educationBtn = document.getElementById("educationBtn");
    var projectsBtn = document.getElementById("projectsBtn");
    var skillsBtn = document.getElementById("skillsBtn");

    const TransitionDuration = 0;

    let DisplayText = [];
    let buttonLock = false;


    fetch("./Data/Content/skills.html")
        .then(r => {
            r.text();
        })
        .then(t => {
            DisplayText[i] = t;
            alert(t);
        });

    for (let i = 0; i < CONTENT_NAMES.length; i++) {
        DisplayText.push("");

        fetch("./Data/Content/" + CONTENT_NAMES[i] + ".html")
            .then(r => {
                r.text();
                alert(r);
            })
            .then(t => {
                DisplayText[i] = t;
                alert(t);
            });
    }

    document.addEventListener('DOMContentLoaded', function ()
    {
        for (let i = 0; i < CONTENT_NAMES.length; i++) {
            document.getElementById(CONTENT_NAMES[i] + "Btn").addEventListener('click', (e) => {

                let textArea = document.getElementById("content-display");

                if (!buttonLock)
                {
                    clear();
                    displayContentPage(textArea, i);
                    buttonLock = true;

                    setTimeout(function () {
                        buttonLock = false;
                    }, TransitionDuration);
                }
            });

        }
    });

    function displayContentPage(textArea, i) {
        if (textArea.style.opacity == 0) /* Case: Not currently displaying anything in this text area */ {
            document.body.style.height = "200vh";
            textArea.innerHTML = DisplayText[i];
            textArea.style.opacity = 1;
        }
        else  /* Case where area is already displayed some data */ {
            textArea.style.opacity = 0;
            setTimeout(function () {
                textArea.innerHTML = DisplayText[i];
                textArea.style.opacity = 1;
            }, TransitionDuration / 2);
        }

    }

    function clear() {
    }

}