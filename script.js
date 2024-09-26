const checkTeamLogos = () => {
  const teamLogos = document.querySelectorAll("img.d_inline-block.smDown\\:h_36px.smDown\\:w_36px");

  if (teamLogos.length > 0) {
    teamLogos.forEach((team) => {
      if (team.alt !== "TBD") {
        team.src = "https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/1x.webp";
        team.srcset = "https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/1x.webp";
      }
    });
  }
};

if (document.location.href.indexOf("lolesports") > -1) {

  window.addEventListener("load", () => {

    let teamLogos = checkTeamLogos();

    //MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver(() => {
      checkTeamLogos();
    });

    //Observer config
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
