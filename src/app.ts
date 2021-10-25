/// <reference path="./components/projectList.ts" />
/// <reference path="./components/projectInput.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
