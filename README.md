# 🛒 Smart Inventory & Fair Checkout System

This project is a backend-driven smart inventory and checkout system designed for an online store.  
The main focus of this project is to ensure **fair checkout, prevent overselling**, and maintain **data consistency** during high-traffic scenarios such as flash sales.

---

## 🚀 Project Overview

The system manages products with limited stock and uses a **reservation-based inventory mechanism**.  
When a user initiates checkout, the backend verifies product availability in real time and temporarily reserves the item to prevent multiple users from purchasing the same product simultaneously.

The backend is built using **Node.js and Express**, with **Supabase** providing a PostgreSQL database, authentication, and reliable data handling.

---

## 🧠 Key Features

- Product inventory management with limited stock
- Reservation-based checkout to prevent overselling
- Automatic reservation expiry handling
- Fair checkout during flash sales
- Clean backend architecture (Controller–Service–Repository)
- Secure inventory updates handled only by backend
- Supabase-powered PostgreSQL database

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Database:** Supabase (PostgreSQL)
- **Architecture:** REST APIs
- **Authentication & DB Access:** Supabase SDK
- **Frontend:** Simple store UI (for interaction & testing)

---

## 🗂 Project Structure

src/
│
├── controllers/ # Handles incoming API requests
│ └── inventoryController.js
│
├── services/ # Business logic (reservation, expiry, validation)
│ └── inventoryService.js
│
├── repository/ # Supabase database operations
│ └── inventoryRepo.js
│
├── config/ # Supabase configuration
│ └── supabase.js
│
├── routes/ # API routes
│ └── inventoryRoutes.js
│
├── app.js # Express app setup
└── server.js # Server entry point


---

## 🔄 Inventory Reservation Flow

1. User selects a product and initiates checkout.
2. Frontend sends a request to the backend.
3. Backend checks real-time inventory availability from Supabase.
4. If available, the product is temporarily reserved.
5. Other users are blocked from reserving the same item.
6. If checkout is not completed within the time window, the reservation expires and stock is released.

---

## ⚠️ Error Handling

- Prevents reservation of out-of-stock items
- Handles expired reservations
- Returns clear API responses for invalid or failed actions
- Ensures frontend cannot directly modify inventory data

---

## 📈 Scalability & Improvements

If given more time, the system can be extended with:
- Role-based access (Admin / Seller / User)
- Payment gateway integration
- Order history and analytics dashboard
- Pagination and indexing for large inventories
- Automated testing and monitoring
- Caching for high-traffic performance

---

## 🎯 Purpose

This project was built to demonstrate:
- Backend problem-solving skills
- Real-world inventory and concurrency handling
- Clean API and backend architecture
- Practical use of Supabase with Node.js

---

## 📌 Note

The primary focus of this project is **backend logic and reliability**, not UI complexity.

---

## 👤 Author

Antra Gupta


