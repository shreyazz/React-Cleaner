#!/usr/bin/node

const fs = require("fs");
const path = require("path");

const addFolders = () => {
  fs.exists(path.join(`${__dirname}/src`, "components"), (exists) => {
    exists
      ? console.log("The directory (components) already exists")
      : fs.mkdirSync(path.join(`${__dirname}/src`, "components"));
  });

  fs.exists(path.join(`${__dirname}/src`, "assets"), (exists) => {
    exists
      ? console.log("he directory (assets) already exists")
      : fs.mkdirSync(path.join(`${__dirname}/src`, "assets"));
  });

  fs.exists(path.join(`${__dirname}/src`, "pages"), (exists) => {
    exists
      ? console.log("The directory (pages) already exists")
      : fs.mkdirSync(path.join(`${__dirname}/src`, "pages"));
  });
};

const removeUnusedFiles = async () => {
  try {
    fs.unlink("./src/reportWebVitals.js", (err) => {
      if (err) console.log("some error occured");
      console.log("ReportWebVitals is deleted");
    });
    fs.unlink("./src/setupTests.js", (err) => {
      if (err) console.log("some error occured");
      console.log("setupTests is deleted");
    });
    fs.unlink("./src/App.test.js", (err) => {
      if (err) console.log("some error occured");
      console.log("App.test.js is deleted");
    });
    fs.unlink("./src/logo.svg", (err) => {
      if (err) console.log("some error occured");
      console.log("logo.svg is deleted");
    });
    console.log("File and Folder removed");
  } catch (e) {
    console.log(e);
  }
};

addFolders();
removeUnusedFiles();
