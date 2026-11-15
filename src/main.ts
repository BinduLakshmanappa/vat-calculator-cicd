import { calculateVat } from "./vat";

const net = document.querySelector<HTMLInputElement>("#net")!;
const rate = document.querySelector<HTMLSelectElement>("#rate")!;
const result = document.querySelector<HTMLParagraphElement>("#result")!;

function render() {
  const r = calculateVat(Number(net.value), Number(rate.value));
  result.textContent = `VAT: €${r.vat.toFixed(2)} | Gross: €${r.gross.toFixed(2)}`;
}
net.addEventListener("input", render);
rate.addEventListener("change", render);
render();
