<div align="center">
  <br />
    <a href="https://loop-video.vercel.app/" target="_blank">
      <img src="https://github.com/Mr-Perfectuz/loop/blob/dev/public/images/home_view.png" alt="Project Banner">
    </a>
  
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A Zoom Clone</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Assets & Code](#snippets)
6. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.

  <br />
    <a href="https://loop-video.vercel.app/" target="_blank">
      <img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/home_view.png" alt="Login View">
    </a>
  <br />

👉 **New Meeting**: Quickly start a new meeting, configuring camera and microphone settings before joining.
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/camera_view.png" alt="Camera View">
</a>
<br />

👉 **Meeting Controls**: Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).

  <br />
    <a href="https://loop-video.vercel.app/" target="_blank">
      <img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/audio_view.png" alt="Home View">
    </a>
  <br />

👉 **Exit Meeting**: Participants can leave a meeting, or creators can end it for all attendees.
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/share_view.png" alt="Share View">
</a>
<br />

👉 **Exit Meeting**: Participants can see and search all attendees.
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/user_view.png" alt="User View">
</a>
<br />

👉 **Call performance**: Call Latency and performance can be monitored
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/performance_view.png" alt="Performance View">
</a>
<br />

👉 **Emoji interaction**: You can interact with Emojies during the meeting
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/emoji_view.png" alt="Emoji View">
</a>
<br />

👉 **Schedule Future Meetings**: Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.

<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/schedule_view.png" alt="Schedule View">
</a>
<br />

👉 **Past Meetings List**: Access a list of previously held meetings, including details and metadata.
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/previous_view.png" alt="Previous View">
</a>
<br />

👉 **View Recorded Meetings**: Access recordings of past meetings recordings for review or reference.
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/recordings_view.png" alt="Recordings View">
</a>
<br />

👉 **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/personal_view.png" alt="Personal View">
</a>
<br />

👉 **Join Meetings via Link**: Easily join meetings created by others by providing a link.
<br />
<a href="https://loop-video.vercel.app/" target="_blank">
<img src="https://github.com/Mr-Perfectuz/loop/tree/main/public/images/link_view.png" alt="Link join View">
</a>

👉 **Secure Real-time Functionality**: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Mr-Perfectuz/loop.git
cd loop
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & getstream credentials. You can obtain these credentials by signing up on the [Clerk website](https://clerk.com/) and [getstream website](https://getstream.io/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>app/globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ======== stream css overrides ======== */
.str-video__call-stats {
  max-width: 500px;
  position: relative;
}

.str-video__speaker-layout__wrapper {
  max-height: 700px;
}

.str-video__participant-details {
  color: white;
}

.str-video__menu-container {
  color: white;
}

.str-video__notification {
  color: white;
}

.str-video__participant-list {
  background-color: #1c1f2e;
  padding: 10px;
  border-radius: 10px;
  color: white;
  height: 100%;
}

.str-video__call-controls__button {
  height: 40px;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.glassmorphism2 {
  background: rgba(18, 17, 17, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* ==== clerk class override ===== */

.cl-userButtonPopoverActionButtonIcon {
  color: white;
}

.cl-logoBox {
  height: 40px;
}
.cl-dividerLine {
  background: #252a41;
  height: 2px;
}

.cl-socialButtonsIconButton {
  border: 3px solid #565761;
}

.cl-internal-wkkub3 {
  color: white;
}
.cl-userButtonPopoverActionButton {
  color: white;
}

/* =============================== */

@layer utilities {
  .flex-center {
    @apply flex justify-center items-center;
  }

  .flex-between {
    @apply flex justify-between items-center;
  }
}

/* animation */

.show-block {
  width: 100%;
  max-width: 350px;
  display: block;
  animation: show 0.7s forwards linear;
}

@keyframes show {
  0% {
    animation-timing-function: ease-in;
    width: 0%;
  }

  100% {
    animation-timing-function: ease-in;
    width: 100%;
  }
}
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: "#1C1F2E",
          2: "#161925",
          3: "#252A41",
          4: "#1E2757",
        },
        blue: {
          1: "#0E78F9",
        },
        sky: {
          1: "#C9DDFF",
          2: "#ECF0FF",
          3: "#F5FCFF",
        },
        orange: {
          1: "#FF742E",
        },
        purple: {
          1: "#830EF9",
        },
        yellow: {
          1: "#F9A90E",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
```

</details>
