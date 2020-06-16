'use strict';

function home() {
    document.getElementById("contact").classList.remove("active");
    document.getElementById("projects").classList.remove("active");
    document.getElementById("home").classList.add("active");


    let home = `
    <div class="col-lg-10 mx-auto col-12 text-center mb-3">
    <p class="lead">Danielle's beadwork is inspired by the colours and shapes around us. As a proud
        Metis women I learned to bead from my elders and hope to teach my daughters the art and passion of
        beading. </p>
    </div>
`;
    document.getElementById("innerContent").innerHTML = home;
}

export { home }


