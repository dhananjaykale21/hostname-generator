function updatePreview(){

let region=document.getElementById("region").value;
let platform=document.getElementById("platform").value;
let resource=document.getElementById("resource").value;
let purpose=document.getElementById("purpose").value;
let project=document.getElementById("project").value.toLowerCase();
let env=document.getElementById("environment").value;
let num=String(document.getElementById("number").value).padStart(2,"0");

document.getElementById("preview").innerText=
region+platform+resource+purpose+project+env+num;
}

function generateHostname(){

document.getElementById("result").innerText=
document.getElementById("preview").innerText;
}

function copyHostname(){

navigator.clipboard.writeText(
document.getElementById("preview").innerText
);

alert("Hostname copied");
}

updatePreview();
