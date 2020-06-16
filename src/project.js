'use strict';

function projects() {
    document.getElementById("home").classList.remove("active");
    document.getElementById("contact").classList.remove("active");
    document.getElementById("projects").classList.add("active");

    let projects = `
        <div class="col-12 mt-4">
            <h3 class="text-center">Current Projects</h3>
            <hr class="accent my-5">
        </div>
        <div class="card-columns">
        <div class="card card-body">
            <span class="float-right font-weight-bold">$40</span>
            <h6 class="text-truncate">Large Diamond</h6>
            <img src="../img/beadproject1.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="card card-body">
            <span class="float-right font-weight-bold">$100</span>
            <h6 class="text-truncate">3 set</h6>
            <img src="../img/beadproject2.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="card card-body">
            <span class="float-right font-weight-bold">$50</span>
            <h6 class="text-truncate">Fringes</h6>
            <img src="../img/beadproject3.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="card card-body">
            <span class="float-right font-weight-bold">$140</span>
            <h6 class="text-truncate">4 set</h6>
            <img src="../img/beadproject4.jpg" class="img-fluid" alt="Responsive image">
        </div>
        <div class="card card-body">
            <span class="float-right font-weight-bold">$140</span>
            <h6 class="text-truncate">4 set</h6>
            <img src="../img/beadproject5.jpg" class="img-fluid" alt="Responsive image">
        </div>
        </div>
`;
    document.getElementById("innerContent").innerHTML = projects;
}

export { projects }
