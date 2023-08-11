# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

srtucture:

src:
│ App.jsx
│ main.jsx
│ main.scss
│
├───assets
│ logo1.jfif
│ logo2.jfif
│ logo3.jfif
│ logo4.jfif
│
├───components
│ │ Layout.jsx
│ │
│ ├───Admin
│ │ AdminHomePage.jsx
│ │ AdminOrdersPage.jsx
│ │ AdminProductsPage.jsx
│ │ InventoryAndPrices.jsx
│ │  
│ ├───Auth
│ │ AdminLogIn.jsx
│ │ LogIn.jsx
│ │ SignUp.jsx
│ │
│ ├───Footer
│ │ Footer.jsx
│ │
│ ├───Header
│ │ Category.jsx
│ │ Header.jsx
│ │ Header.scss
│ │ HeaderMenu.jsx
│ │ TopHeader.jsx
│ │
│ └───User
│ Cart.jsx
│ Profile.jsx
│
└───pages
  About.jsx
  Admin.jsx
  Comparison.jsx
  Contact.jsx
  Home.jsx
  PageNotFound.jsx
  UserProfile.jsx