import express from "express";
import { reserve, confirm, cancel, view } from "../services/inventoryService.js";

const router = express.Router();

router.post("/inventory/reserve", (req, res) => {
  const { sku, reservationId } = req.body;
  res.json(reserve(sku, reservationId));
});

router.post("/checkout/confirm", (req, res) => {
  const { sku, reservationId } = req.body;
  res.json(confirm(sku, reservationId));
});

router.post("/checkout/cancel", (req, res) => {
  const { sku, reservationId } = req.body;
  res.json(cancel(sku, reservationId));
});

router.get("/inventory/:sku", (req, res) => {
  res.json(view(req.params.sku));
});

export default router;
