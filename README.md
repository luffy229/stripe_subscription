🚀 Stripe Subscriptions Course
<p align="center"> <img src="/public/demo-for-readme.png" alt="Demo App" width="600px"> </p>

![Demo App](/public/demo-for-readme.png)


⚡ Features
🔥 Tech Stack: Next.js 14, TypeScript, Prisma, MongoDB, Stripe
🔐 Authentication: Kinde Auth integration
💸 Subscriptions: Monthly & Annual plans using Stripe
💵 Billing Portal: Stripe-powered customer billing portal
🛠️ Webhooks: Handling real-time payment updates
🔄 Stripe Events: Managing subscription lifecycle
🌗 Theme Support: Light/Dark mode toggle
🌐 Deployment Guide: Step-by-step hosting instructions
📂 Project Setup
1️⃣ Clone the repository
sh
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
2️⃣ Create a .env file
Set up your environment variables in a .env file:

ini
Copy code
DATABASE_URL=<your_mongo_db_url>

KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=

STRIPE_MONTHLY_PLAN_LINK=<your_stripe_plan>
STRIPE_YEARLY_PLAN_LINK=<your_stripe_plan>

STRIPE_MONTHLY_PRICE_ID=<your_stripe_price_id>
STRIPE_YEARLY_PRICE_ID=<your_stripe_price_id>

STRIPE_SECRET_KEY=<your_stripe_secret>
STRIPE_WEBHOOK_SECRET=<your_webhook_secret>
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=<your_stripe_portal_url>
3️⃣ Install Dependencies
sh
Copy code
npm install
4️⃣ Start the Development Server
sh
Copy code
npm run dev
📜 License
This project is open-source under the MIT License. Feel free to modify and use it!

