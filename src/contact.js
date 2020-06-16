'use strict';

function contact() {
    document.getElementById("projects").classList.remove("active");
    document.getElementById("home").classList.remove("active");
    document.getElementById("contact").classList.add("active");

    let contact = `
        <form class="w-75 p-3">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name">
         </div>
         <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com">
         </div>
       
        <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Send</button>
        </form>
    `;

    document.getElementById("innerContent").innerHTML = contact;


}

export { contact }


