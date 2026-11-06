# EnROOT Group 4 Event Website

A responsive, frontend-only university tech event website built using **Next.js**, **React**, and **Tailwind CSS**. The website is designed around a wellbeing and relaxation theme, giving students a chance to chill, recharge, and enjoy themselves after their midterm examinations.

The website provides event information, booth details, organiser information, contact support, and registration details through an interactive and responsive landing page.

---

## 1. Project Overview

The aim of this project is to develop a modern and user-friendly website for a university technology event. The design focuses on a relaxing and welcoming atmosphere, combining a clean layout, interactive elements, animations, and responsive design to provide a smooth browsing experience across desktop, tablet, and mobile devices.

This is a frontend-only project. No backend, database, or server-side registration system is required.

---

## 2. Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js (App Router) | Frontend framework and page routing |
| React | Building reusable UI components |
| TypeScript | Type safety and code maintainability |
| Tailwind CSS | Responsive styling and layout |
| Lucide React | Icons and visual elements |
| Next.js Image | Image optimisation |
| React Hooks | Managing client-side interactivity |

---

## 3. Website Features

### Splash Intro Animation

- Full-screen introductory animation when the website loads.
- Breathing effect
- Animated opening transition that reveals the main website.
- Creates an engaging first impression for visitors.

### Home / Main Page

- Event name and introduction.
- Short event description.
- Hero section with a visually appealing event theme.
- Countdown timer displaying the remaining time until the event.
- Poster viewing section
- Call-to-action button for registration.
- Placeholder for a registration QR code.
- Location section with image, video and description
- F&B rewards section.

### Event Booths

- Dedicated section displaying five event booths.
- Booth names, floor levels, and images.
- Interactive layout to help visitors explore the available activities.

### Organisers

- Section introducing the event organisers.
- Dynamic grid layout for organiser names and roles.

### Contact / Help

- Contact information for event enquiries.
- Email and tele details.
- Frequently Asked Questions (FAQ).
- Expandable FAQ accordion for easier navigation.

### Responsive Navigation

- Navigation tabs for the main page, booths, organisers, and contact/help sections.
- Mobile-friendly hamburger menu.
- Interactive transitios and navigation between website sections.

---

## 4. Project Structure

The project is organised into reusable components to make the code easier to maintain and update.

```text
university-tech-event/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── tabs/
│   │   ├── Booths.tsx
│   │   ├── ContactTab.tsx
│   │   ├── HomeTab.tsx
│   │   └── Organisers.tsx
│   ├── Countdown.tsx
│   ├── Navbar.tsx
│   ├── SiteShell.tsx
│   └── SplashIntro.tsx
│
├── lib/
│   └── eventData.ts
│
├── public/
│   ├── images/
│   │   ├── booths/
│   │   ├── location/
│   │   ├── posters/
│   │   ├── prizes/
│   └── videos/
│
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

### Folder descriptions

- **`app/`** – Contains the main application layout, homepage, and global styles.
- **`components/`** – Contains reusable UI components for different website sections.
- **`lib/`** – Stores event-related information such as event dates, booth details, contact information, and FAQs.
- **`public/`** – Stores static images, videos, and other assets.
- **`README.md`** – Contains project documentation and setup instructions.

---

## 5. Installation and Setup

### Prerequisites

Ensure that the following are installed:

- Node.js
- npm (Node Package Manager)
- Visual Studio Code (recommended)

### Step 1: Clone the repository

```bash
git clone <repository-url>
```

### Step 2: Navigate into the project folder

```bash
cd university-tech-event
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the development server

```bash
npm run dev
```

### Step 5: Open the website

Open your browser and navigate to:

```text
http://localhost:3000
```

The website should now be running locally.

---

## 6. Customisation

Event information can be updated through the `lib/eventData.ts` file.

Examples of information to customise:

- Event name and description.
- Event date and time.
- Event venue and location.
- Booth names and descriptions.
- Organiser details.
- Contact information.
- FAQ questions and answers.

### Countdown Configuration

The event countdown uses the event date and time configured in the event data file.

Update the `EVENT_DATE_ISO` value in `lib/eventData.ts` once the event date has been confirmed.

### Registration

The registration section includes a registration button and QR code image box to place the Microsoft Form details.

---

## 7. Responsive Design

The website is designed to support different screen sizes:

- **Desktop:** Full navigation bar, larger content sections, and expanded layouts.
- **Tablet:** Adjusted spacing, flexible layouts, and responsive content.
- **Mobile:** Hamburger navigation, stacked content, and mobile-friendly buttons.

Tailwind CSS responsive utility classes are used to ensure that the website remains accessible and visually consistent across different devices.

---

## 8. Project Scope and Limitations

This project focuses entirely on frontend development.

The following functionalities are **not** included:

- Backend development.
- Database integration.
- User authentication.
- Online registration processing.
- Payment processing.
- Admin dashboard.

---

## 9. Running the Project

To run the project locally:

1. Clone repository to VSCode
2. Run in terminal:

   ```bash
   npm run dev
   npm run dev
   ```

3. Visit <http://localhost:3000> to view the website.

---

## 10. AI Declaration

All AI-generated code and output was checked for accuracy and mistakes.
Website design ideas were brainstormed by me before input into AI (Countdown, landing page intro, etc.) to prevent AI slop.
Care was taken not to input any personal or confidential data into AI models - Placeholders were used instead.

-Prototype 1 was built with the help of Claude
-Changes and bugfixes made with the help of ChatGPT
-Code was explained and learnt with the help of Gemini, ChatGPT
-Deployment process was taught and explained with the help of ChatGPT
-Initial README generated by ChatGPT, formatted, edited and checked by me.

---

| | |
|---|---|
| **Project Type** | Frontend Web Development |
| **Framework** | Next.js (App Router) |
| **Styling** | Tailwind CSS |
| **Language** | TypeScript |
| **UI Library** | React |
| **Icon Library** | Lucide React |
| **Backend** | Not required |

---
Mike (Kim)
EnROOT Group 4