function listener(e) {
  document.getElementById(
    "multiple_booking_module_421f4756c3d64b3683b642c62a5f2043"
  ).style.height = e.data + "px";
}

window.addEventListener
  ? window.addEventListener("message", listener)
  : window.attachEvent("onmessage", listener);
