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

const changeBroadcast = () => {
  console.log("here")
  const broadcast = document.querySelector("#video-player-placeholder");
  console.log(broadcast)
  if (broadcast) {
    broadcast.src = "https://player.twitch.tv/?channel=caedrel&parent=lolesports.com&autoplay=true&muted=false";
    broadcast.attributes.muted = false
    const broadcastLink = document.querySelector("a.pos_absolute.inset_0.z_zLayer3")
    broadcastLink.href = "https://www.twitch.tv/caedrel";
    const text = document.querySelector(".pos_absolute.d_flex.flex-d_column.jc_end.ai_start.left_16.bottom_16.z_zLayer2.md\\:left_40.md\\:bottom_40")
    const gradient = document.querySelector(".pos_absolute.inset_0.d_flex.pointer-events_none.us_none.z_zLayer")

    text.remove()
    gradient.remove()
  }
}

if (document.location.href.indexOf("lolesports") > -1) {

  window.addEventListener("load", () => {

    let teamLogos = checkTeamLogos();

    //MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver(() => {
      checkTeamLogos();
      changeBroadcast();
    });

    //Observer config
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
