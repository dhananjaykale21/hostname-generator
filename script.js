function generateHostname() {

    const REGIONS = ["de","us","ap"];
    const PLATFORMS = ["gcp","az","pvc"];
    const RESOURCE_TYPES = ["sv","ws","cl","lb","vi"];
    const PURPOSES = ["m","n","s","i","b"];
    const ENVIRONMENTS = ["1","3","5","7","9"];

    let region = document.getElementById("region").value;
    let platform = document.getElementById("platform").value;
    let resource = document.getElementById("resource").value;
    let purpose = document.getElementById("purpose").value;
    let project = document.getElementById("project").value.trim().toLowerCase();
    let environment = document.getElementById("environment").value;
    let number = document.getElementById("number").value;

    if (!REGIONS.includes(region)) {
        alert("Invalid Region");
        return;
    }

    if (!PLATFORMS.includes(platform)) {
        alert("Invalid Platform");
        return;
    }

    if (!RESOURCE_TYPES.includes(resource)) {
        alert("Invalid Resource Type");
        return;
    }

    if (!PURPOSES.includes(purpose)) {
        alert("Invalid Purpose");
        return;
    }

    if (!ENVIRONMENTS.includes(environment)) {
        alert("Invalid Environment");
        return;
    }

    if (project.length !== 3) {
        alert("Project name must be exactly 3 characters");
        return;
    }

    number = String(number).padStart(2,"0");

    let hostname =
        region +
        platform +
        resource +
        purpose +
        project +
        environment +
        number;

    document.getElementById("result").innerHTML = `
        <h2>${hostname}</h2>
        <table>
            <tr><td>Region</td><td>${region}</td></tr>
            <tr><td>Platform</td><td>${platform}</td></tr>
            <tr><td>Resource Type</td><td>${resource}</td></tr>
            <tr><td>Purpose</td><td>${purpose}</td></tr>
            <tr><td>Project</td><td>${project}</td></tr>
            <tr><td>Environment</td><td>${environment}</td></tr>
            <tr><td>Number</td><td>${number}</td></tr>
        </table>
    `;
}
