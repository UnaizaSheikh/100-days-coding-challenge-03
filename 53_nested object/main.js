//making a nested object
var programmerSkills = {
    codingLanguages: ["JavaScript", "TypeScript", "Python"],
    programmerTools: [
        "Text Editors",
        "Package Managers",
        "Version Control System",
    ],
    frameWorks: ["Angular", "Node.js", "Django"],
};
//skills
var codingLanguages = programmerSkills.codingLanguages, programmerTools = programmerSkills.programmerTools, frameWorks = programmerSkills.frameWorks;
console.log("Languages: ".concat(codingLanguages[0], ", tools: ").concat(programmerTools[0], ", frameWorks: ").concat(frameWorks[0]));
