const checkTeamLogos = () => {
  const teamLogos = document.querySelectorAll("img.d_inline-block.smDown\\:h_36px.smDown\\:w_36px");

  console.log("Current team logos: ", teamLogos); // Logs the current teamLogos, even if empty

  // If elements are found, process them
  if (teamLogos.length > 0) {
    teamLogos.forEach((team) => {
      if (team.alt !== "TBD") {
        team.src = "https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/1x.webp"; // Replace src with your file if alt is not "TBD"
        team.srcset = "https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/1x.webp"; // Replace src with your file if alt is not "TBD"
        console.log(`Replaced src for: ${team.alt}`);
      }
    });
  }
};

// Checking page URL for "lolesports"
if (document.location.href.indexOf("lolesports") > -1) {

  console.log("Page is on LoL Esports site");

  // Initial load event
  window.addEventListener("load", () => {
    console.log("Page loaded, starting to check for team logos.");

    // Initial check
    let teamLogos = checkTeamLogos();

    // Set up MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver(() => {
      checkTeamLogos(); // Update the teamLogos list dynamically and check again
    });

    // Observer configuration to watch for changes in child elements or subtree changes
    observer.observe(document.body, {
      childList: true, // Watches for changes in the immediate children
      subtree: true,   // Watches for changes in all descendants
    });
  });
}
