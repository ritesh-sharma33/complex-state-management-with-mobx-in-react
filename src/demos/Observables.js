import { observable } from "mobx"; 

// Observable list
const techList = observable(["React", "Node"]);

techList[1] = "Angular";

// Observable map
const techMap = observable.map({ name: "React" });

techMap.name = "Node";

// Observable object
const techObject = observable({
  name: "React",
  language: "JavaScript",
  maintainedBy: "Facebook"
});

techObject.language = "TypeScript";

// Observable box
const techBox = observable.box("React");

techBox.set("Angular");


// The decorator way
class Tech {
  @observable techName = "React";
  @observable language = "JavaScript";

  // ...
  // ...
}