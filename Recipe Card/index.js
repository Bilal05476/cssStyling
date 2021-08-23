window.onload = () => {
  document.querySelector(".cont-modal").className = "cont-modal";
};

var exe = 0;
const open_close = () => {
  if (exe % 2 === 0) {
    document.querySelector(".cont-modal").className =
      "cont-modal const-modal-active";
    exe++;
  } else {
    document.querySelector(".cont-modal").className = "cont-modal";
    exe++;
  }
};
