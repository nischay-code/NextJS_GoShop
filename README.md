# NextJS Go_Shop 🛍️

## Overview 🌐

GO-Shop is a sample e-commerce application built using PostgreSQL as the database, Strapi as the headless CMS, and Next.js as the frontend framework. The application also integrates Paytm for seamless payment transactions. This readme provides essential information on setting up and running the GO-Shop application.

## Table of Contents 📑

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Application](#running-the-application)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Prerequisites 📋

Make sure you have the following prerequisites installed before setting up the GO-Shop application:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- PostgreSQL: [Download and install PostgreSQL](https://www.postgresql.org/)
- Strapi: [Install Strapi](https://strapi.io/documentation/developer-docs/latest/getting-started/installation.html)
- Next.js: [Get started with Next.js](https://nextjs.org/docs/getting-started)
- Paytm Developer Account: [Sign up for Paytm Developer](https://developer.paytm.com/docs/)

## Installation 🚀

1. Clone the repository:
  ```bash
  git clone https://github.com/nischay-code/go-shop.git
  ```
2. Navigate to the project directory:
  ```bash
  cd go-shop
  ```
3. Install dependencies for the frontend:
  ```bash
  cd frontend
  npm install
  ```
4. Install dependencies for the Strapi backend:
  ```bash
  cd ../backend
  npm install
  ```

## Configuration ⚙️
### Frontend Configuration
1. Open frontend/.env.local and configure the following variables:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
PAYTM_MERCHANT_KEY=your-paytm-merchant-key
PAYTM_MERCHANT_ID=your-paytm-merchant-id
```
### Backend Configuration
1. Open backend/config/database.js and configure the PostgreSQL database connection:

```javascript
// ... (same as above)
```
2. Open backend/config/server.js and configure the server host and port:

```javascript
// ... (same as above)
```
## Running the Application ▶️
1. Start the Strapi backend:

```bash
cd backend
npm run develop
```
  The Strapi admin panel should be accessible at http://localhost:1337/admin.

2. Create necessary content types and data in the Strapi admin panel.

3. Start the Next.js frontend:

```bash
cd frontend
npm run dev
```
  The GO-Shop application should be accessible at http://localhost:3000.

## Usage 🚀
Explore the GO-Shop application, add products to the cart, and proceed to checkout. Use the Paytm integration for secure payment transactions.

Contributing 🤝
Feel free to contribute to the development of GO-Shop by opening issues and pull requests on the GitHub repository.

##  Happy Coding! 💻😊🌟


   
