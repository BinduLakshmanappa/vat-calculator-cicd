import { describe, it, expect } from "vitest";
import { calculateVat } from "./vat";

describe("calculateVat", () => {
  it("calculates 19% VAT", () => {
    expect(calculateVat(100, 19)).toEqual({ net: 100, vat: 19, gross: 119 });
  });
  it("calculates 7% VAT", () => {
    expect(calculateVat(50, 7)).toEqual({ net: 50, vat: 3.5, gross: 53.5 });
  });
  it("rejects negative amounts", () => {
    expect(() => calculateVat(-1, 19)).toThrow();
  });
});
