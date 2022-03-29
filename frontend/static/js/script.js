const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log ("Viewing Main Page")},
    { path: "/zebra", view: () => console.log ("Viewing Zebra Page")},
    { path: "/ocelot", view: () => console.log ("Viewing Ocelot Page")},
    { path: "/rhino", view: () => console.log ("Viewing Rhino Page")},
    { path: "/butterfly", view: () => console.log ("Viewing Butterfly Page")},
    { path: "/elephant", view: () => console.log ("Viewing Elephant Page")},
    { path: "/dog", view: () => console.log ("Viewing Dog Page")}
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

  console.log(match.route.view());
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