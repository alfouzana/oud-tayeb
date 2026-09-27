import "./style.css";

const WA = "966598842716";
document.querySelectorAll("[data-order]").forEach((a) => {
  const msg = `السلام عليكم، أبي أطلب ${a.dataset.order} من عود طيب`;
  a.href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
