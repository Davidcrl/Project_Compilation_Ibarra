function showProjects(term) {
    var projectsContainer = document.getElementById("projects-container");
    var headerAndButtonsContainer = document.getElementById("header-and-buttons-container");
    var backButton = document.getElementsByClassName("back-button")[0];


    headerAndButtonsContainer.style.display = "none";


    backButton.style.display = "block";


    projectsContainer.innerHTML = "";


    switch (term) {
        case "prelim":
            projectsContainer.innerHTML = `
                <h1>Prelim Projects</h1>

                <h2>01 eLMS Activity 2</h2>
                <embed src="01elmsAct2-micro.pdf" type="application/pdf" width="100%" height="600px" />
                <br>
                <h2>02 eLMS Activity 2</h2>
                <embed src="Ibarra-02elmsAct2-Microprocessors.pdf" type="application/pdf" width="100%" height="600px" />
                <br>
                <h2>02 Task Performance 1</h2>
                <embed src="02TP-micro.pdf" type="application/pdf" width="100%" height="600px" />
                `;
            break;
        case "midterm":
            projectsContainer.innerHTML = `
                <h1>Midterm Projects</h1>
                <h2>03 eLMS Activity 2</h2>
                <p>In your own words, compare and contrast the different implementations of parallelism in a microprocessor system in at least five (5) sentences. (15 points)</p>
                <p>When multiple tasks are performed simultaneously by microprocessor systems, this type of thing is known as parallelism. Tasks can be divided into smaller steps, similar to different stages in a manufacturing line, by instruction-level parallelism (ILP), which enables multiple tasks to be worked on at the same time. A restaurant with several employees managing separate tasks, such as cooking, cleaning, and serving, simultaneously is similar to having thread-level parallelism (TLP). By sorting a number of cards at once rather than one at a time, data-level parallelism, or DLP, allows for the handling of multiple data sets at the same time. When a large project is divided into smaller tasks, task-level parallelism (TskLP) enables various individuals to work on each task independently, much like teamwork. Lastly, vectorization is the process of processing multiple items at once with the same action, such as slicing a whole loaf of bread instead of a single slice at a time, in order to speed up processing.</p>
                <br>
                <h2>04 eLMS Activity 2</h2>
                <p>In your own words, compare and contrast the crosstalk from radio-frequency interference in at least five (5) sentences.</p>
                <p>Radio frequency interference can cause either unintentional or intentional crosstalk. When people control it for communication systems, it's intentional. On the other hand, unintentional crosstalk restricts communication and starts from other sources. Intentional crosstalk is usually manageable and can even be beneficial at times. Protecting and filtering are necessary measures to address accidental crosstalk.</p>
                <br>
                <h2>04 Task Performance 1</h2>
                <img src="1.png" alt="Prelim Image" width="100%" />
                <img src="2.png" alt="Prelim Image" width="100%" />
                <img src="3.png" alt="Prelim Image" width="100%" />
                <img src="4.png" alt="Prelim Image" width="100%" />
            `;
            break;
        case "pre-finals":
            projectsContainer.innerHTML = `
                <h2>Pre-Finals Projects</h2>
                <h3>NONE</h3>
            `;
            break;
        case "finals":
            projectsContainer.innerHTML = `
                <h2>Finals Projects</h2>
                <h3>NONE</h3>
            `;
            break;
        default:
            projectsContainer.innerHTML = "<p>No projects found.</p>";
    }


    projectsContainer.scrollIntoView({ behavior: 'smooth' });
}


function goBack() {
    var headerAndButtonsContainer = document.getElementById("header-and-buttons-container");
    var backButton = document.getElementsByClassName("back-button")[0];


    headerAndButtonsContainer.style.display = "block";


    backButton.style.display = "none";


    document.getElementById("projects-container").innerHTML = "";
}
