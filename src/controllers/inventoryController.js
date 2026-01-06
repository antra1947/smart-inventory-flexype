import express from "express";
import { reserve, confirm, cancel, view } from "../services/inventoryService.js";

const router = express.Router();

router.post("/inventory/reserve", (req, res) => {
  res.json(reserve(req.body.sku, req.body.reservationId));
});

router.post("/checkout/confirm", (req, res) => {
  res.json(confirm(req.body.sku, req.body.reservationId));
});

router.post("/checkout/cancel", (req, res) => {
  res.json(cancel(req.body.sku, req.body.reservationId));
});

router.get("/inventory/:sku", (req, res) => {
  res.json(view(req.params.sku));
});

export default router;
