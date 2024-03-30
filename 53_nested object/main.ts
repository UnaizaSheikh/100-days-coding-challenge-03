//making a nested object
let programmerSkills = {
  codingLanguages: ["JavaScript", "TypeScript", "Python"],
  programmerTools: [
    "Text Editors",
    "Package Managers",
    "Version Control System",
  ],
  frameWorks: ["Angular", "Node.js", "Django"],
};
//skills
let { codingLanguages, programmerTools, frameWorks } = programmerSkills;
console.log(
  `Languages: ${codingLanguages[0]}, tools: ${programmerTools[0]}, frameWorks: ${frameWorks[0]}`
);
