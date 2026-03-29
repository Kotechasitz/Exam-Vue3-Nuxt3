# 🚗 Nuxt 3 Frontend Assignment

This project is built with **Nuxt 3 + Vue 3 (Options API) + TypeScript + SCSS**.
It demonstrates multiple frontend features including data processing, UI interaction, and styling.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 🚀 Usage

At the top navigation bar, click **"Select Page"** to switch between features:

### 🔹 Available Pages

* **1-2**

  * Group By Function
  * Remove Duplicate Users

* **3**

  * Users Data Table
  * Sorting (ASC / DESC by age)
  * Pagination

* **SCSS & Styling**

  * Car showcase layout
  * Image carousel (active state + navigation)
  * Table styling (hover + zebra rows)

---

## 🧩 Features

### ✅ Group By Function

* Custom implementation (no external libraries)
* Filter data by category (e.g., electronics, furniture)

---

### ✅ Remove Duplicates

* No usage of `Set`
* Duplicate conditions:

  * Same email (case-insensitive)
  * OR same full name + normalized phone

---

### ✅ Users Table

* Built using **Options API**
* Features:

  * Dynamic sorting (toggle ASC / DESC)
  * Pagination
  * Reusable component (`userList.vue`)

---

### ✅ Car Showcase (SCSS)

* Image carousel:

  * Show 5 thumbnails
  * Scroll / navigate through images
  * Active image highlight
* Table:

  * Hover effect
  * Zebra row styling
* SCSS rules:

  * All colors use variables
  * All text uses mixins

---

## 🎨 SCSS Architecture

* Variables for colors
* Mixins for typography
* Modular structure:

  * Layout
  * Image section
  * Table section

---

## 📁 Project Structure

```bash
.
├── assets/
│   └── scss/
│       └── main.scss
├── components/
│   └── userList.vue
├── pages/
│   ├── index.vue
│   ├── users/
│   │   └── index.vue
│   └── scss.vue
├── public/
│   └── img/
```

---

## 🛠 Tech Stack

* Nuxt 3
* Vue 3 (Options API)
* TypeScript
* SCSS (no UI library)

---

## 📌 Notes

* No external UI libraries are used
* All logic is implemented manually
* Designed for clarity, maintainability, and scalability

---

## 👤 Author

Created as part of a frontend technical assessment.
