import inventory from "../repository/inventoryRepo.js";


const EXPIRY = 5 * 60 * 1000;

function cleanup(sku) {
  const item = inventory[sku];
  if (!item) return;

  const now = Date.now();
  for (const id in item.reservations) {
    if (item.reservations[id].expiresAt <= now) {
      delete item.reservations[id];
    }
  }
}

export function reserve(sku, reservationId) {
  const item = inventory[sku];
  if (!item) return { message: "Invalid SKU" };

  cleanup(sku);

  if (item.reservations[reservationId]) {
    return { message: "Already reserved" };
  }

  const reserved = Object.values(item.reservations)
    .reduce((sum, r) => sum + r.qty, 0);

  if (item.total - reserved <= 0) {
    return { message: "Out of stock" };
  }

  item.reservations[reservationId] = {
    qty: 1,
    expiresAt: Date.now() + EXPIRY
  };

  return { message: "Reserved successfully" };
}

export function confirm(sku, reservationId) {
  const item = inventory[sku];
  if (!item) return { message: "Invalid SKU" };

  cleanup(sku);

  const r = item.reservations[reservationId];
  if (!r) return { message: "Reservation expired or invalid" };

  item.total -= r.qty;
  delete item.reservations[reservationId];

  return { message: "Order confirmed" };
}

export function cancel(sku, reservationId) {
  const item = inventory[sku];
  if (!item) return { message: "Invalid SKU" };

  delete item.reservations[reservationId];
  return { message: "Reservation cancelled" };
}

export function view(sku) {
  const item = inventory[sku];
  if (!item) return { total: 0, available: 0 };

  cleanup(sku);

  const reserved = Object.values(item.reservations)
    .reduce((sum, r) => sum + r.qty, 0);

  return {
    total: item.total,
    available: item.total - reserved
  };
}
