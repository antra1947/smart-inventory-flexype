import express from "express";
import {
  reserve,
  confirm,
  cancel,
  view,
  testConnection
} from "../services/inventoryService.js";

const router = express.Router();


/* Test Supabase connection */
router.get("/test-db", async (req, res) => {
  console.log(req.method);
  const result = await testConnection();
  res.json(result);
});


/* Reserve inventory */
router.post("/inventory/reserve", async (req, res) => {
  const { sku, reservationId } = req.body;
  const result = await reserve(sku, reservationId);
  res.json(result);
});

/* Confirm checkout */
router.post("/checkout/confirm", async (req, res) => {
  const { sku, reservationId } = req.body;
  const result = await confirm(sku, reservationId);
  res.json(result);
});

/* Cancel checkout */
router.post("/checkout/cancel", async (req, res) => {
  const { sku, reservationId } = req.body;
  const result = await cancel(sku, reservationId);
  res.json(result);
});

/* View inventory */
router.get("/inventory/:sku", async (req, res) => {
  const result = await view(req.params.sku);
  res.json(result);
});

export default router;
