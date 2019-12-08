import snabbdom from "snabbdom";
import h from "snabbdom/h";

const patch = snabbdom.init([
  require("snabbdom/modules/class"),
  require("snabbdom/modules/props"),
  require("snabbdom/modules/style"),
  require("snabbdom/modules/eventlisteners")
]);

var vnode = h(
  "div",
  {
    style: {
      color: "red",
      fontWeight: "bold"
    }
  },
  ["This Application is built using Snabbdom"]
);

patch(document.getElementById("placeholder"), vnode);
