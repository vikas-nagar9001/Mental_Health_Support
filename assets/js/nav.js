/**
 * MindCare — shared client-side navigation
 * Wires data-path links and keeps sidebar active state in sync.
 */
(function () {
  const ROUTES = {
    dashboard: "../app/dashboard.html",
    "wellness-check": "../wellness/assessment.html",
    "ai-support": "../app/ai-support.html",
    "mood-tracker": "../wellness/mood-tracker.html",
    resources: "../resources/index.html",
    counseling: "../counseling/directory.html",
    "counselor-directory": "../counseling/directory.html",
    "counselor-profile": "../counseling/profile-booking.html",
    appointments: "../counseling/appointments.html",
    "appointment-confirm": "../counseling/confirmation.html",
    notifications: "../account/notifications.html",
    profile: "../account/profile.html",
    settings: "../account/settings.html",
    help: "../account/help.html",
    "emergency-helpline": "../account/emergency.html",
    emergency: "../account/emergency.html",
    landing: "../public/landing.html",
    login: "../auth/login.html",
    signup: "../auth/signup.html",
    "forgot-password": "../auth/forgot-password.html",
    onboarding: "../auth/onboarding.html",
    "assessment-results": "../wellness/assessment-results.html",
    assessment: "../wellness/assessment.html",
    breathing: "../resources/breathing.html",
    relaxation: "../resources/relaxation.html",
    "resource-detail": "../resources/resource-detail.html",
  };

  /** Map current page file → sidebar data-path that should look active */
  const PAGE_TO_NAV = {
    "dashboard.html": "dashboard",
    "ai-support.html": "ai-support",
    "assessment.html": "wellness-check",
    "assessment-results.html": "wellness-check",
    "mood-tracker.html": "mood-tracker",
    "index.html": "resources", // resources/index.html
    "resource-detail.html": "resources",
    "breathing.html": "resources",
    "relaxation.html": "resources",
    "directory.html": "counseling",
    "profile-booking.html": "counseling",
    "appointments.html": "appointments",
    "confirmation.html": "appointments",
    "notifications.html": "notifications",
    "profile.html": "profile",
    "settings.html": "settings",
    "help.html": "help",
    "emergency.html": "emergency-helpline",
  };

  const ACTIVE_BASE =
    "flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all bg-surface-container-high text-on-surface font-label-lg font-semibold";
  const INACTIVE_BASE =
    "flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all";
  const ACTIVE_BETWEEN =
    "flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all bg-surface-container-high text-on-surface font-label-lg font-semibold";
  const INACTIVE_BETWEEN =
    "flex items-center justify-between px-3.5 py-2.5 rounded-xl font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all";

  const SIDEBAR_KEYS = new Set([
    "dashboard",
    "wellness-check",
    "ai-support",
    "mood-tracker",
    "resources",
    "counseling",
    "appointments",
    "notifications",
    "profile",
    "settings",
    "help",
    "emergency-helpline",
  ]);

  function resolve(pathKey) {
    return ROUTES[pathKey] || null;
  }

  function go(pathKey) {
    const url = resolve(pathKey);
    if (url) window.location.href = url;
  }

  function currentFile() {
    const path = decodeURIComponent(window.location.pathname || "");
    const parts = path.split(/[/\\]/).filter(Boolean);
    return (parts[parts.length - 1] || "").toLowerCase();
  }

  function currentNavKey() {
    const file = currentFile();
    // Prefer exact file map; for index.html confirm we are under resources
    if (file === "index.html") {
      const path = decodeURIComponent(window.location.pathname || "").toLowerCase();
      if (path.includes("/resources/")) return "resources";
    }
    return PAGE_TO_NAV[file] || null;
  }

  function isBetweenLayout(el) {
    return (
      el.classList.contains("justify-between") ||
      el.getAttribute("data-path") === "notifications"
    );
  }

  function setInactive(el) {
    el.removeAttribute("aria-current");
    el.className = isBetweenLayout(el) ? INACTIVE_BETWEEN : INACTIVE_BASE;
  }

  function setActive(el) {
    el.setAttribute("aria-current", "page");
    el.className = isBetweenLayout(el) ? ACTIVE_BETWEEN : ACTIVE_BASE;
  }

  function syncSidebarActive() {
    const activeKey = currentNavKey();
    const sidebarLinks = document.querySelectorAll("aside nav a[data-path]");
    if (!sidebarLinks.length) return;

    sidebarLinks.forEach((a) => {
      const key = a.getAttribute("data-path");
      if (!SIDEBAR_KEYS.has(key)) return;
      if (activeKey && key === activeKey) {
        setActive(a);
      } else {
        setInactive(a);
      }
    });
  }

  // Wire every [data-path] anchor/button to a real page
  document.querySelectorAll("[data-path]").forEach((el) => {
    const key = el.getAttribute("data-path");
    const url = resolve(key);
    if (!url) return;

    if (el.tagName === "A") {
      el.setAttribute("href", url);
    } else {
      el.style.cursor = "pointer";
      el.addEventListener("click", (e) => {
        e.preventDefault();
        go(key);
      });
    }
  });

  syncSidebarActive();

  window.MindCareNav = { ROUTES, resolve, go, currentNavKey, syncSidebarActive };
})();
