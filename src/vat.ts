export function calculateVat(net: number, ratePercent: number) {
  if (net < 0) throw new Error("Net amount cannot be negative");
  const vat = Math.round(net * ratePercent) / 100;
  return { net, vat, gross: Math.round((net + vat) * 100) / 100 };
}
