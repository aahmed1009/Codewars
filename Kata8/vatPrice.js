//return price without vat
function excludingVatPrice(price) {
  // your code
  if (price == null) {
    return -1
  }
  return +(price / 1.15).toFixed(2)
}
