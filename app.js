"use strict";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const isFirefox = typeof InstallTrigger !== "undefined";

const scrollAmountMultiplier = 0.7;

if (isFirefox) {
  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();

      const newScrollAmount = e.deltaY * scrollAmountMultiplier;

      window.scrollBy({
        top: newScrollAmount,
        behavior: "smooth",
      });
    },
    { passive: false }
  );
}
