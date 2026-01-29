import { showToast } from "../toast/toast";

export function bindCopy(root: ParentNode = document) {
  const elements = root.querySelectorAll<HTMLElement>("[data-copy]");

  elements.forEach(el => {
    if (el.dataset.copyBound) return;
    el.dataset.copyBound = "true";

    el.addEventListener("click", async () => {
      const value = el.dataset.copy;
      if (!value) return;

      try {
        if (!navigator.clipboard) {
          showToast("Copiado no soportado", "error");
          return;
        }

        await navigator.clipboard.writeText(value);
        showToast(
          el.dataset.toast || "Copiado al portapapeles",
          "success"
        );
      } catch (err) {
        console.error("Clipboard error:", err);
        showToast("No se pudo copiar", "error");
      }
    });
  });
}
