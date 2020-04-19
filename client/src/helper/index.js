import * as _ from "underscore";

export const checkBeforApply = (jobId, applyedJobTab) => {
  /*  console.log(jobId);
  console.log(applyedJobTab); */
  return _.any(applyedJobTab, { JobOfferId: jobId });
};

export const jobMatch = (resumeSkillsTab, jobOfferSkillsTab) => {
  //check how many Resume skills included in JobOffer skills

  let jobSkills = _.pluck(jobOfferSkillsTab, "name")
    .join(",")
    .toUpperCase()
    .split(",");
  let resumeSkills = _.pluck(resumeSkillsTab, "name")
    .join(",")
    .toUpperCase()
    .split(",");

  // return ratio by divded the number of skills included by the length of job offer skills
  return (
    (_.intersection(resumeSkills, jobSkills).length / jobSkills.length) * 100
  );
};

export const technlogiesTabGenerator = (technologiesString) => {
  let technologiesTab = technologiesString
    .replace(/[^A-Z0-9+]+/gi, "_")
    .split("_");

  return technologiesTab;
};

/* const newSkills = state.resume.skills.filter(
  (element) => element.id !== action.payload.id
);
 */
export const filterElementFromState = (arr, element) => {
  return arr.filter((el) => el.id !== element.id);
};