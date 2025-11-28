📬 Subscription Tracker
=======================

### Node.js - Express - MongoDB - JWT Auth - Upstash QStash - ARC Jet Security

A backend API for tracking user subscriptions.\
Users can **save their subscriptions**, and the system automatically sends **email reminders** when renewal deadlines approach.

This version uses:

-   **Upstash QStash** for scheduling + email dispatch

-   **Appwrite** for email sending

-   **ARC Jet** for extra API security

-   **MongoDB** for storage

-   **JWT** for authentication

* * * * *

🚀 Features
-----------

-   User registration, login, JWT authentication

-   Add / edit / delete subscription items

-   Save subscriptions in MongoDB with timestamps

-   Scheduled reminder emails via **Upstash QStash**

-   Email sending handled by **Appwrite Email API**

-   Secure endpoints protected with ARC Jet

-   Clean REST API architecture

-   Daily reminder check or configurable schedule

* * * * *

🧱 Tech Stack
-------------

### Backend

-   **Node.js + Express**

-   **MongoDB / Mongoose**

-   **JWT Authentication**

-   **ARC Jet security middleware**

-   **Upstash QStash** (task scheduling + webhook triggers)

-   **Appwrite Email API**

### Utility Tools

-   dotenv

-   bcrypt

-   node-cron (optional fallback if needed)

* * * * *

🔧 Installation
---------------

```
git clone https://github.com/your-username/subscription-tracker.git

cd subscription-tracker

npm install
```

* * * * *

⚙️ Environment Variables
------------------------

Create `.env`:

```
PORT=8000
MONGO_URI=
JWT_SECRET=

# Upstash QStash
QSTASH_URL=https://qstash.upstash.io
QSTASH_TOKEN=
QSTASH_CURRENT_SIGNING_KEY=
QSTASH_NEXT_SIGNING_KEY=

# Appwrite Email API
APPWRITE_ENDPOINT=
APPWRITE_PROJECT_ID=
APPWRITE_API_KEY=
APPWRITE_EMAIL_SENDER=
```

* * * * *

▶️ Run Server
-------------

```
npm start
```

Backend base:\
`
http://localhost:8000/api
`

* * * * *

🧩 Subscription Endpoints
-------------------------
