const expandButton = document.getElementById("expand-button");
    const hiddenProjects = document.getElementById("hidden-projects");

    expandButton.addEventListener("click", () => {
        const hiddenProjectsList = hiddenProjects.querySelectorAll(".project-container");
        const numberOfHiddenProjectsToShow = 4;

        for (let i = 0; i < numberOfHiddenProjectsToShow; i++) {
            hiddenProjectsList[i].style.display = "block";
        }
    });