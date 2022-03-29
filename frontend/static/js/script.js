const router = async () => {
  const routes = [
    { path: "/", view: () => console.log ("Viewing Main Page")},
    { path: "/zebra", view: () => console.log ("Viewing Zebra Page")},
    { path: "/ocelot", view: () => console.log ("Viewing Ocelot Page")}
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

document.addEventListener("DOMContentLoaded", () => {
  router();
});