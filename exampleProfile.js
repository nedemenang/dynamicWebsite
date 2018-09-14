var profile = require("./profile.js");

var studentProfile = new profile("chalkers")


studentProfile.on("end", console.dir);

studentProfile.on("error", console.dir);