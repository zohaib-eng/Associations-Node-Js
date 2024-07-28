const db = require("./model/index");
const controller = require("./controller/controller");

const run = async () => {
  const tut1 = await controller.createTutorial({
    title: "Tut#1",
    description: "Tut#1 Description",
  });
  const tut2 = await controller.createTutorial({
    title: "Tut#2",
    description: "Tut#2 Description",
  });
  const comment1 = await controller.createComment(tut1.id, {
    name: "aKoder",
    text: "Hi, thank you!",
  });

  const comment2=await controller.createComment(tut2.id, {
    name: "anotherKoder",
    text: "Awesome tut!",
  });


  const tut1Data = await controller.findTutorialById(tut1.id);
console.log(
  ">> Tutorial id=" + tut1Data.id,
  JSON.stringify(tut1Data, null, 2)
);


const tut2Data = await controller.findTutorialById(tut2.id);
console.log(
  ">> Tutorial id=" + tut2Data.id,
  JSON.stringify(tut2Data, null, 2)
);


const tutorials = await controller.findAll();
console.log(">> All tutorials", JSON.stringify(tutorials, null, 2));
}
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});