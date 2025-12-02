Shipment Tracking Dashboard
---------------------------
A modern and responsive shipment tracking dashboard built with React, featuring authentication, dashboard analytics, shipment table with search/sort/pagination, and a detailed shipment page with timeline and logs.
All shipment data is powered using a Mock API (JSON Server)

Live Demo & Repository
----------------------
🔹 Live Demo (Vercel): shipment-ecru.vercel.app
🔹 GitHub Repository: https://github.com/ManishaGit-hub/shipment

Features Overview
-----------------
| Requirement                           | Status      |
| ------------------------------------- | ----------- |
| Login Page (Form Handling + Redirect) | ✅ Completed |
| Dashboard with Shipment Table         | ✅ Completed |
| Search by Shipment ID / Product       | ✅ Completed |
| Sorting (Shipment ID & Product)       | ✅ Completed |
| Pagination                            | ✅ Completed |
| Overview Cards (Analytics)            | ✅ Completed |
| Shipment Details Page with Timeline   | ✅ Completed |
| Last 5 Logs                           | ✅ Completed |
| Status Badge with Colors              | ✅ Completed |
| Mock API Integration                  | ✅ Completed |
| Loading + Error Handling              | ✅ Completed |
| Responsive UI                         | ✅ Completed |


Tech Stack
----------

| Category                              |              Tech Used           |
| ------------------------------------- | ---------------------------------|
| Frontend Framework                    | React(Vite)                      |
| Styling                               | Bootstrap+Custom CSS(CSS Modules)|
| Routing                               | React Router                     |
| Mock API                              | JSON Server                      |
| HTTP Client                           | Axios                            |
| Deployment                            | Vercel                           |

Folder Structure
----------------
ecommercesite/
├── backend/
│   └── db.json                     # Mock API (JSON Server)
├── public/
├── src/
│   ├── OverviewCards.jsx
│   ├── SearchBar.jsx
│   ├── SortColumns.jsx
│   ├── Pagination.jsx
│   ├── LoginPage.jsx
│   ├── Dashboard.jsx
│   ├── ShipmentDetailsPage.jsx
│   ├── Login.module.css
│   ├── ShipmentDetailsPage.module.css
│   ├── App.jsx
│   ├── FormValidation.js
│   ├── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

Running the Project Locally
---------------------------
step 1: Clone the Repository

git clone <your_repo_link>
cd <project_folder>

step 2: Install Dependencies

npm install

step 3: Start Mock API (JSON Server)

npx json-server --watch db.json --port 5001

step 4: Start React App

npm run dev

Key UI/UX Highlights
--------------------
Fully responsive layout using Bootstrap and custom CSS
Smooth dashboard experience with reusable components
Professional shipment timeline using CSS Modules
Clean state management and API fetching
Loading & error states for API robustness

Test Scenarios Covered
----------------------

| Scenario                       |            Behavior                  |
| ----------------------------------------------------------------------|
| API                            | added loading state                  |
| API Failure                    | Error message displayed              |
| Missing Shipment ID            |"Shipment not found" message          |
| Shipment delivered             | Full timeline shown                  |
| Shipment delayed / intransit   | Future logs hidden                   |
| large dataset                  | Smooth pagination & sorting & filter |

Screenshots
-----------


Final Note
----------
-> All assignment requirements (Parts 1–5) are fully implemented.
-> Hosted demo + clean UI + professional code architecture included.


