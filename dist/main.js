!function(e){var n={};function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(a,s,function(n){return e[n]}.bind(null,s));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function a(){document.getElementById("contact").classList.remove("active"),document.getElementById("projects").classList.remove("active"),document.getElementById("home").classList.add("active");document.getElementById("innerContent").innerHTML='\n    <div class="col-lg-10 mx-auto col-12 text-center mb-3">\n    <p class="lead">Danielle\'s beadwork is inspired by the colours and shapes around us. As a proud\n        Metis women I learned to bead from my elders and hope to teach my daughters the art and passion of\n        beading. </p>\n    </div>\n'}t.r(n),document.getElementById("content").insertAdjacentHTML("afterbegin",' <div class="banner">\n          <h1 class="mt-0 center">Fireweed Designs</h1>\n            </div>\n\n<header>\n    <nav class="navbar navbar-expand-md navbar-dark fixed-top">\n\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"\n            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">\n            <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="navbarCollapse">\n            <ul class="navbar-nav mr-auto">\n                <li id="home" class="nav-item active">\n                    <a class="nav-link">Home </a>\n                </li>\n                <li id="projects" class="nav-item">\n                    <a class="nav-link">Projects</a>\n                </li>\n                <li id="contact" class="nav-item">\n                    <a class="nav-link">Contact</a>\n                </li>\n\n            </ul>\n            <form class="form-inline mt-2 mt-md-0">\n                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">\n            </form>\n        </div>\n    </nav>\n</header>\n\n<div class="container py-5">\n        <div id="innerContent" class="row">\n           \n        </div>\n    </div>    \n</div>\n\n<footer class="footer">\n    <div class="container">\n        Created by: Paul Payne <a href="https://github.com/ppayne12/" alt="github">\n            <img src="./img/GitHub-Mark-32px.png" width="25px" height="25px" /></a>\n    </div>\n</footer>'),a();const s=document.getElementById("home"),o=document.getElementById("projects"),l=document.getElementById("contact");s.addEventListener("click",a),o.addEventListener("click",(function(){document.getElementById("home").classList.remove("active"),document.getElementById("contact").classList.remove("active"),document.getElementById("projects").classList.add("active"),document.getElementById("innerContent").innerHTML='\n        <div class="col-12 mt-4">\n            <h3 class="text-center">Current Projects</h3>\n            <hr class="accent my-5">\n        </div>\n        <div class="card-columns">\n        <div class="card card-body">\n            <span class="float-right font-weight-bold">$40</span>\n            <h6 class="text-truncate">Large Diamond</h6>\n            <img src="./img/beadproject1.jpg" class="img-fluid" alt="Responsive image">\n        </div>\n        <div class="card card-body">\n            <span class="float-right font-weight-bold">$100</span>\n            <h6 class="text-truncate">3 set</h6>\n            <img src="./img/beadproject2.jpg" class="img-fluid" alt="Responsive image">\n        </div>\n        <div class="card card-body">\n            <span class="float-right font-weight-bold">$50</span>\n            <h6 class="text-truncate">Fringes</h6>\n            <img src="./img/beadproject3.jpg" class="img-fluid" alt="Responsive image">\n        </div>\n        <div class="card card-body">\n            <span class="float-right font-weight-bold">$140</span>\n            <h6 class="text-truncate">4 set</h6>\n            <img src="./img/beadproject4.jpg" class="img-fluid" alt="Responsive image">\n        </div>\n        <div class="card card-body">\n            <span class="float-right font-weight-bold">$140</span>\n            <h6 class="text-truncate">4 set</h6>\n            <img src="./img/beadproject5.jpg" class="img-fluid" alt="Responsive image">\n        </div>\n        </div>\n'})),l.addEventListener("click",(function(){document.getElementById("projects").classList.remove("active"),document.getElementById("home").classList.remove("active"),document.getElementById("contact").classList.add("active"),document.getElementById("innerContent").innerHTML='\n        <form class="w-75 p-3">\n        <div class="form-group">\n            <label for="name">Name</label>\n            <input type="text" class="form-control" id="name">\n         </div>\n         <div class="form-group">\n            <label for="email">Email address</label>\n            <input type="email" class="form-control" id="email" placeholder="name@example.com">\n         </div>\n       \n        <div class="form-group">\n            <label for="message">Message</label>\n            <textarea class="form-control" id="message" rows="3"></textarea>\n        </div>\n        <button type="submit" class="btn btn-primary mb-2">Send</button>\n        </form>\n    '}))}]);