
const CONTENT_NAMES =
[
    "career",
    "education",
    "projects",
    "skills"
];

const TransitionDuration = 0;

let DisplayText = [];
let buttonLock = false;

window.addEventListener("load", () => 
{
    for (let i = 0; i < CONTENT_NAMES.length; ++i)
    {
        DisplayText.push("");

        var request = new Request("./Data/Content/" + CONTENT_NAMES[i] + ".html");

        fetch(request)
            .then(r => r.text())
            .then(t => DisplayText[i] = t)

        var hash = CONTENT_NAMES[i] + "Btn";

        document.getElementById(hash).addEventListener('click', (e) => {

            let textArea = document.getElementById("content-display");

            if (!buttonLock)
            {
                clear();
                displayContentPage(hash, textArea, i);
                buttonLock = true;

                setTimeout(function () {
                    buttonLock = false;
                }, TransitionDuration);
            }
        });

    }
});


function displayContentPage(hash, textArea, i) {
    if (textArea.style.opacity == 0) /* Case: Not currently displaying anything in this text area */ {
        location.hash = "#" + hash;
        document.body.style.height = "200vh";
        textArea.innerHTML = DisplayText[i];
        textArea.style.opacity = 1;
    }
    else  /* Case where area is already displayed some data */ {
        location.hash = "#" + hash;
        textArea.style.opacity = 0;
        setTimeout(function () {
            textArea.innerHTML = DisplayText[i];
            textArea.style.opacity = 1;
        }, TransitionDuration / 2);
    }
}

function clear() {
}