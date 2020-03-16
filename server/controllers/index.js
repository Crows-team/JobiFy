//import all controllers here
const userControllers = require("./user");
const resumeControllers = require("./resume");
const experienceControllers = require("./experience");
const educationControllers = require("./education");
const projectControllers = require("./project");
const certificateControllers = require("./certificate");
const awardControllers = require("./award");
const languageControllers = require("./language");
const interestControllers = require("./interest");
const skillControllers = require("./skill");

// company
const companyControllers = require("./comapny");
const jobOfferControllers = require("./jobOffer");
//export one obj contains all controllers
module.exports = {
  userControllers,
  resumeControllers,
  experienceControllers,
  educationControllers,
  projectControllers,
  certificateControllers,
  awardControllers,
  languageControllers,
  interestControllers,
  skillControllers,
  companyControllers,
  jobOfferControllers
};
