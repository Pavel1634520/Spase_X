var instance = new vidbg(".video", {
  mp4: "video/world.mp4",
  webm: "video/world.webm",
  poster: "img/poster.jpg",
  overlay: false,
});
var rellax = new Rellax(".rellax");
if (document.body.clientWidth < 576) {
  rellax.destroy();
}
AOS.init();
