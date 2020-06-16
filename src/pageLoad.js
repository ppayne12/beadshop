'use strict';

function init() {
    let pageLoad =
        ` <div class="banner">
          <h1 class="mt-0 center">Fireweed Designs</h1>
            </div>

<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li id="home" class="nav-item active">
                    <a class="nav-link">Home </a>
                </li>
                <li id="projects" class="nav-item">
                    <a class="nav-link">Projects</a>
                </li>
                <li id="contact" class="nav-item">
                    <a class="nav-link">Contact</a>
                </li>

            </ul>
            <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            </form>
        </div>
    </nav>
</header>

<div class="container py-5">
        <div id="innerContent" class="row">
           
        </div>
    </div>    
</div>

<footer class="footer">
    <div class="container">
        Created by: Paul Payne <a href="https://github.com/ppayne12/" alt="github">
            <img src="../img/GitHub-Mark-32px.png" width="25px" height="25px" /></a>
    </div>
</footer>`
    document.getElementById("content").insertAdjacentHTML("afterbegin", pageLoad);
}

export { init }

