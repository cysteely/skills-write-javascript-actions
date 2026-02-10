const getJoke = require("./joke");
const core = require("@actions/core"); //error here: no exports main package defined in actions workspace?

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke", joke);
}

run();