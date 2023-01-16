
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

//window.addEventListener("load", () => 
//{
    for (let i = 0; i < CONTENT_NAMES.length; ++i)
    {
        DisplayText.push("");

        print("go thru content name: " + CONTENT_NAMES[i]);

        var request = new Request("./Data/Content/" + CONTENT_NAMES[i] + ".html");

        fetch(request)
            .then(r => r.text())
            .then(t => DisplayText[i] = t)

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
//});

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