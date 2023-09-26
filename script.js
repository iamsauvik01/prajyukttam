var typed = new Typed(".auto-type", {
    strings: ["Prajyukttam..."],
    typeSpeed: 150,
    backSpeed: 70,
    loop: true
});

let contentToAdd = "<p>This Site is not available for mobile devices</p>";


var profileCardSauvik = document.getElementById("profile-card-section-sauvik");
var profileCardShubham = document.getElementById("profile-card-section-shubham");


function openProfileSauvik(){
    profileCardSauvik.style.display = "grid";
}

function openProfileShubham(){
    profileCardShubham.style.display = "grid";
}

function closeProfile(){
    profileCardSauvik.style.display = "none";
    profileCardShubham.style.display = "none";
}

let n = screen.width;
if (n < 500){
        document.getElementById("profile-card-table").style.display = "none";
        document.getElementById("developer-heading").style.display = "none";
        document.getElementById("hidden-text").style.display = "block";
}

