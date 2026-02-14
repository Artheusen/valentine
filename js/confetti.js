// === Load canvas-confetti dynamically ===
(function loadConfettiLib(callback) {
  if (typeof confetti === "function") {
    callback();
    return;
  }

  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  script.onload = callback;
  document.head.appendChild(script);
})(function () {

  function fireConfetti() {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff8fa3', '#ffc2d1', '#ffe5ec']
    });
  }

  // 🎉 Saat pertama load
  // window.addEventListener("load", function () {
  //   setTimeout(fireConfetti, 800);
  // });

  // 🎉 Saat balik ke tab
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      fireConfetti();
    }
  });

  // 🎉 Saat pindah slide (Reveal event)
  if (typeof Reveal !== "undefined") {
    Reveal.on("slidechanged", function () {
      fireConfetti();
    });
  }

});

function goYes() {
  Reveal.next(4); // slide yes
}

function goNo() {
  Reveal.slide(5); // slide no
}
