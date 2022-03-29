import MainView from "../views/MainView.js";
import ZebraView from "../views/ZebraView.js";
import OcelotView from "../views/OcelotView.js";
import RhinoView from "../views/RhinoView.js";
import ButterflyView from "../views/ButterflyView.js";
import ElephantView from "../views/ElephantView.js";
import DogView from "../views/DogView.js";

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    { path: "/", view: MainView},
    { path: "/zebra", view: ZebraView},
    { path: "/ocelot", view: OcelotView},
    { path: "/rhino", view: RhinoView},
    { path: "/butterfly", view: ButterflyView},
    { path: "/elephant", view: ElephantView},
    { path: "/dog", view: DogView}
  ];

  //Test route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch)

  //if path does not match any routes return to index page( first in the array or 0 )
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();

  
};

window.addEventListener("popstate", router);

function randomlink(){
  var myrandom=Math.floor(Math.random() * 6)
  var link1="/zebra"
  var link2="/ocelot"
  var link3="/rhino"
  var link4="/butterfly"
  var link5="/elephant"
  var link6="/dog"
  if (myrandom==0)
  return link1;
else if (myrandom==1)
  return link2
else if (myrandom==2)
  return link3
else if (myrandom==3)
  return link4
else if (myrandom==4)
  return link5
else if (myrandom==5)
  return link6
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(randomlink());
    }
  });
  router();
});