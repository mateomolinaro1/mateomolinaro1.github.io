// Asks for the course access code before following links marked `.protected`.
// Deterrent only: the files are still reachable by their direct URL.
(() => {
  // SHA-256 of the access code (trimmed, lower-case). To change the code, run:
  //   printf %s "newcode" | sha256sum
  const CODE_HASH = "75e971f6a21956ece81a667fdf0f71864709f17fc118c8719d8309f3ecf791d3";
  const STORAGE_KEY = "course-access";
  let unlocked = false;

  try {
    unlocked = sessionStorage.getItem(STORAGE_KEY) === CODE_HASH;
  } catch {}

  async function sha256(text) {
    const bytes = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
  }

  document.addEventListener("click", async (event) => {
    const link = event.target.closest("a.protected");
    if (!link || unlocked) return;

    event.preventDefault();
    const code = window.prompt("This material is reserved for students. Please enter the course access code:");
    if (code === null) return;

    if ((await sha256(code.trim().toLowerCase())) !== CODE_HASH) {
      window.alert("Incorrect code.");
      return;
    }

    unlocked = true;
    try {
      sessionStorage.setItem(STORAGE_KEY, CODE_HASH);
    } catch {}
    link.click();
  });
})();
