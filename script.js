document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MOBILE NAVIGATION
     =============================== */

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (toggle && nav) {

    toggle.addEventListener("click", () => {

      const isOpen = nav.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      toggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

    });


    nav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );

        toggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

    });

  }


  /* ===============================
     ACTIVE PAGE
     =============================== */

  const currentPage =
    window.location.pathname
      .split("/")
      .pop()
      .toLowerCase() || "index.html";


  document
    .querySelectorAll(".main-nav a")
    .forEach((link) => {

      const href =
        (link.getAttribute("href") || "")
          .split("/")
          .pop()
          .toLowerCase();

      if (
        href === currentPage ||
        (
          currentPage === "" &&
          href === "index.html"
        )
      ) {

        link.classList.add("active");

      } else {

        link.classList.remove("active");

      }

    });


  /* ===============================
     CLOSE MENU WHEN CLICKING OUTSIDE
     =============================== */

  document.addEventListener("click", (event) => {

    if (!toggle || !nav) return;

    const clickedInside =
      nav.contains(event.target) ||
      toggle.contains(event.target);

    if (!clickedInside) {

      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "Open navigation"
      );

    }

  });

});
