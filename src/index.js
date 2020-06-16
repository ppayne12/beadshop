'use strict';

import { init } from './pageLoad.js'
import { home } from './home.js'
import { projects } from './project.js'
import { contact } from './contact.js'

init();
home();

const homeButton = document.getElementById("home");
const projectButton = document.getElementById("projects");
const contactButton = document.getElementById("contact");
homeButton.addEventListener('click', home);
projectButton.addEventListener('click', projects);
contactButton.addEventListener('click', contact);

