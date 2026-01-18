# 🍔 FoodHub - Premium Food Discovery App

**Live Demo:** [https://foodhub-nextjs-demo.vercel.app](https://foodhub-nextjs-demo.vercel.app) *(Update after deployment)* **Code Repository:** [https://github.com/shehabRabby/FoodHub-Nextjs](https://github.com/shehabRabby/FoodHub-Nextjs)  
**Clone Repository:** `git clone https://github.com/shehabRabby/FoodHub-Nextjs.git`

---

## 📖 Short Project Description
FoodHub is a modern, responsive food discovery application built using **Next.js** and **Tailwind CSS**. It serves as a premium interface for users to explore various food categories, view real-time menu items via API, and learn about the brand. The application focuses on a high-end "app-like" experience with a signature **Green, Red, and White** theme.

## 🚀 List of Implemented Features
* **Interactive Hero & Discovery:** Engaging landing page with dynamic statistics and featured food sections.
* **Dynamic Food Gallery:** Fetches random food data from an external API to simulate a real-world kitchen menu.
* **Premium Testimonials:** A unique review section featuring "Red Flag" indicators for honest customer feedback.
* **Mock Authentication:** A functional login flow using hardcoded credentials and cookie-based session management.
* **Active Link Navigation:** A smart Navbar that highlights the current page using Next.js navigation hooks.
* **Fully Responsive UI:** Optimized for all devices, from small mobile screens to large desktops.

## 💡 Brief Explanation of Features
* **Mock Auth:** To demonstrate the login flow without a complex backend, I implemented a system that checks for a specific email and password. If correct, it stores a session token in **browser cookies**, allowing the user to stay "logged in" as they navigate.
* **Food Discovery:** The app connects to a live food API to populate the menu. This ensures the content is always fresh and demonstrates how to handle asynchronous data fetching in Next.js Server Components.
* **Brand Identity:** Using Tailwind CSS, I built a consistent theme where **Green** represents freshness/success, **Red** represents appetite/action, and **White** provides a clean, professional space.

## 🔑 Mock Credentials
Use these to test the login functionality:
* **Email:** `foodhub@gmail.com`
* **Password:** `foodhub`

## 🗺️ Route Summary
* `/home` - Main landing page with branding and highlights.
* `/food` - Full menu exploration grid.
* `/food/[id]` - Detailed view of specific food items.
* `/about` - Company mission, core values, and team.
* `/login` - User gateway with mock authentication.

## ⚙️ Setup & Installation Instructions

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/shehabRabby/FoodHub-Nextjs.git](https://github.com/shehabRabby/FoodHub-Nextjs.git)
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    *Open [http://localhost:3000](http://localhost:3000) in your browser.*

---
Developed with ❤️ by [Shehab Rabby]