import inventory from "../repository/inventoryRepo.js";

const EXPIRY = 5 * 60 * 1000;

function cleanup(sku) {
  const now = Date.now();
  const r = inventory[sku].reservations;
  for (const id in r) {
    if (r[id].expiresAt <= now) delete r[id];
  }
}

export function reserve(sku, reservationId) {
  cleanup(sku);
  const item = inventory[sku];

  if (item.reservations[reservationId]) {
    return { message: "Already reserved" };
  }

  let used = 0;
  for (const r of Object.values(item.reservations)) used += r.qty;

  if (item.total - used < 1) {
    return { message: "Out of stock" };
  }

  item.reservations[reservationId] = {
    qty: 1,
    expiresAt: Date.now() + EXPIRY
  };

  return { message: "Reserved" };
}

export function confirm(sku, reservationId) {
  cleanup(sku);
  const r = inventory[sku].reservations[reservationId];
  if (!r) return { message: "Expired or invalid" };

  inventory[sku].total -= r.qty;
  delete inventory[sku].reservations[reservationId];

  return { message: "Confirmed" };
}

export function cancel(sku, reservationId) {
  delete inventory[sku].reservations[reservationId];
  return { message: "Cancelled" };
}

export function view(sku) {
  cleanup(sku);
  let used = 0;
  for (const r of Object.values(inventory[sku].reservations)) used += r.qty;

  return {
    total: inventory[sku].total,
    available: inventory[sku].total - used
  };
}
