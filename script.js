let historyList = [];

function generateHostname() {

    let hostname =
        document.getElementById("region").value +
        document.getElementById("platform").value +
        document.getElementById("resource").value +
        document.getElementById("purpose").value +
        document.getElementById("project").value.toLowerCase() +
        document.getElementById("environment").value +
        String(document.getElementById("number").value).padStart(2, '0');

    document.getElementById("result").innerText = hostname;

    historyList.push(hostname);

    renderHistory();
}

function renderHistory() {

    let ul = document.getElementById("history");
    ul.innerHTML = "";

    historyList.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    });
}

function copyHostname() {

    let hostname = document.getElementById("result").innerText;

    navigator.clipboard.writeText(hostname);

    alert("Hostname copied!");
}

function exportCSV() {

    let csv = historyList.join("\n");

    let blob = new Blob([csv], {type:'text/csv'});

    let a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "hostname_history.csv";

    a.click();
}

function toggleDarkMode() {

    document.body.classList.toggle("dark");
}
