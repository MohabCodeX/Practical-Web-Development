const courseData = [
    {
        title: "السكشن الأول",
        descriptions: ["الجزء الأول", "الجزء الثاني","الجزء الثالث"],
        videoURLs: ["https://drive.google.com/file/d/1P3H8sobuGnfQtGds7ugfuwG4Azo0Nrs4/preview", "https://drive.google.com/file/d/188iJKlIPrCZvkVx1NJKQK155XRRv28Z5/preview","https://drive.google.com/file/d/1Pje9kqqUjA7_JcNDKIVJzEyyab49QWZP/preview"],
        objectives: [
            "Doctype",
            "Html",
            "Body",
            "Paragraph",
            "Title",
            "Meta--charset",
            "Meta--description",
            "Meta--Author",
            "Meta--viewport",
            "Meta--keywords"
        ]
    },
    {
        title: "السكشن الثاني",
        descriptions: ["الجزء الأول", "الجزء الثاني"],
        videoURLs: ["https://drive.google.com/file/d/1HD8fz4mM5SWJFl7G_yW20cJVsj4iFLmQ/preview", "https://drive.google.com/file/d/1Qvo2DjldqRfVi-5SBHnDcjoRJWEPl10b/preview"],
        objectives: [
            "Meta--http-equiv",
            "Meta--content",
            "style",
            "script",
            "link",
            "paragraph",
            "bold,italic,superscript,subscript",
            "underline",
            "mark",
            "strong , em , del , ins"
        ]
    },
    {
        title: "السكشن الثالث",
        descriptions: ["مشاهدة الشرح"],
        videoURLs: ["https://drive.google.com/file/d/1GgJQZXcg-XnjfzKWvad3IB6pE2DRSwf6/preview"],
        objectives: [
            "br, wbr",
            "button",
            "qoute",
            "blockqoute",
            "headings",
            "GreekCharacters",
            "ordered list , types",
        ]
    },
    {
        title: "السكشن الرابع",
        descriptions: ["مشاهدة الشرح"],
        videoURLs: ["https://drive.google.com/file/d/1afpdhk92Y3jVtFwGzz64L6OD8JmI0eOE/preview"],
        objectives: [
            "image",
            "table",
        ]
    },
    {
        title: "السكشن الخامس",
        descriptions: ["شرح Video","شرح Audio","شرح Div & Span","شرح Class & ID"],
        videoURLs: ["https://drive.google.com/file/d/1yByySMWKb_R6_SIPkODwpBTC7vXOUq0m/preview","https://drive.google.com/file/d/1HkyX8fGSt9UfkKEyAiH78a_gtoKCv1PT/preview","https://drive.google.com/file/d/1HRL1OPrTFER0rc7xuwwmWmFDSa6tb7O2/preview","https://drive.google.com/file/d/15Bgy_oopaYGGckTxsvtgn4o95rwBWgc6/preview"],
        objectives: [
            "Video",
            "table",
            "Div & Span",
            "Class & ID",
            "Semantic elements",
        ]
    },
    {
        title: "السكشن السادس",
        descriptions: ["الجزء الأول", "الجزء الثاني"],
        videoURLs: ["https://drive.google.com/file/d/1ki99mQrVuzw5rwY5fAU3CRCgEcMD3lyK/preview","https://drive.google.com/file/d/1ZlwDzMVzus_xVEwwniNYeBtj333dFd71/preview"],
        objectives: [
            "Semantic elements",
            "Links",
        ]
    },
    {
        title: "ملاحظات",
        descriptions: ["نماذج للتدريب"],
        notes: [
            "نماذج تدريب مع الحلول",
            "<a class='download-button' href='https://drive.google.com/drive/folders/1wIbowGlk1ObjuGXaxXlBPuGkrIxLJ8Fu?usp=drive_link' target='_blank'>تحميل</a>"
        ]
    },
    {
        title: "شرح النماذج",
        descriptions: ["(مقدمة)الجزء الأول", "السؤال الأول","السؤال الثاني","السؤال الثالث","السؤال الرابع","السؤال الخامس","السؤال السادس"],
        videoURLs: ["https://drive.google.com/file/d/1YWhky8FjXhujaG1KqNEbk62f5ou7PkW5/preview",
        "https://drive.google.com/file/d/1HZzAeqC4f3ZewatLME_Fht9-7NuPdoa6/preview",
        "https://drive.google.com/file/d/1jRWn01ieGpIuK0C-S3dk3kazWqJp4Tja/preview",
        "https://drive.google.com/file/d/1_LXGJ3fBQwcE93aAJ2gJbWnnXxfhSkEq/preview",
        "https://drive.google.com/file/d/1D8J3tkyeOeJT03n-cPIz1cB_ewdakhQA/preview",
        "https://drive.google.com/file/d/1enWZaG510cmHdZ1AX_BBpkBVtMewB2Su/preview",
        "https://drive.google.com/file/d/1tywhejnC2YiMuliK-2gj0ejoxLTImWFY/preview",],
        objectives: [
            "تدريبات"
        ]
    },
];

function populateSyllabus() {
    const lessonList = document.getElementById("lesson-list");

    courseData.forEach((lesson, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = lesson.title;
        listItem.dataset.index = index;
        listItem.addEventListener("click", showLessonInfo);
        lessonList.appendChild(listItem);
    });
}

function showLessonInfo(event) {
    const lessonIndex = event.target.dataset.index;
    const lesson = courseData[lessonIndex];
    const lessonInfoSection = document.getElementById("lesson-info");

    let lessonContentHTML = `<h2>${lesson.title}</h2>`;


    if (lesson.title === "ملاحظات") {
        lessonContentHTML += `<h3>${lesson.descriptions[0]}</h3>`;
        lessonContentHTML += "<ul>";
        lesson.notes.forEach(note => {
            lessonContentHTML += `<li>${note}</li>`;
        });
        lessonContentHTML += "</ul>";
    } else {

        lessonContentHTML += "<h3>الأجزاء المشروحة:</h3>";
        lessonContentHTML += "<ul>";
        lesson.objectives.forEach(objective => {
            lessonContentHTML += `<li>${objective}</li>`;
        });
        lessonContentHTML += "</ul>";

        for (let i = 0; i < lesson.descriptions.length; i++) {
            const description = lesson.descriptions[i];
            const videoURL = lesson.videoURLs[i];

            lessonContentHTML += `
            <p>${description}</p>
            <iframe src="${videoURL}" allowfullscreen></iframe>
        `;
        }
    }

    lessonInfoSection.innerHTML = lessonContentHTML;
}

populateSyllabus();

window.addEventListener('DOMContentLoaded', (event) => {
    const syllabus = document.getElementById('syllabus');
    const lessonList = document.getElementById('lesson-list');


    const titlesHeight = lessonList.childElementCount * 70; 

   
    syllabus.style.maxHeight = `${titlesHeight}px`;
});