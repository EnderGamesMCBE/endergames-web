let toastRoot: HTMLElement | null = null;

export function initToast() {
  toastRoot = document.getElementById("toast-root");
}

export function showToast(
  message: string,
  type: "success" | "error" | "info" = "info",
  duration = 3000
) {
  if (!toastRoot) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  toastRoot.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

export function bindToastTriggers() {
  document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement)?.closest(
      "[toast-message]"
    ) as HTMLElement | null;

    if (!target) return;

    const message = target.getAttribute("toast-message");
    if (!message) return;

    const type =
      (target.getAttribute("toast-type") as
        | "success"
        | "error"
        | "info") ?? "info";

    const durationAttr = target.getAttribute("toast-duration");
    const duration = durationAttr
      ? Number(durationAttr)
      : undefined;

    showToast(message, type, duration);
  });
}
