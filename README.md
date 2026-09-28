# EchoGPT Chrome Extension UI
## Open in Browser 
Visit https://echogpt-extension-ui.vercel.app to view the extension UI in action.
A modern, interactive, and highly responsive Chrome Extension concept UI for **EchoGPT**. This project was developed as a frontend assignment to demonstrate a seamless extension side-panel experience.

##  Project Overview

This project showcases the user interface for the EchoGPT browser extension. It features a dynamic side-panel layout with multiple AI functional tabs, providing users with quick access to powerful AI tools directly from their browser concept.

**Key Features Included:**
- Dynamic Tab Navigation (Chat, Write, Read, Translate, Image, Video, Compare, Connectors/MCP).
- Smooth transitions and interactive UI elements.
- Clean and modern design system using Tailwind CSS v4.


## Technologies Used

Built entirely with modern frontend tools as specified in the `package.json`:
- **Framework:** Next.js (v16.3.6)
- **Library:** React (v19.2.8) & React DOM
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion (^13.4.4)
- **Icons:** React Icons (^5.7.0)
##  Setup Instructions

To run this extension UI concept on your local machine, follow these simple steps:
**1. Clone the repository:**
\`\`\`bash
git clone https://github.com/Sagor8187/Echogpt-Extension.git
\`\`\`
*(Note: Update the repository URL if your GitHub link is different)*

**2. Navigate to the project directory:**
\`\`\`bash
cd my-app
\`\`\`

**3. Install dependencies:**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

**4. Start the development server:**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`


##  Assumptions

During the development of this UI concept, the following assumptions were made:
- **Web-Based Demonstration:** Instead of a traditional `manifest.json` Chrome Extension setup, this UI is built as a Next.js web application. This approach was chosen to ensure rapid deployment, easier review, and a seamless demonstration of the UI/UX logic.
- **Static Data Integration:** The AI models and tab contents are currently populated using static data to demonstrate the layout and interactions.
- **Standalone UI:** There are no active backend API calls or actual Chrome browser API hooks (like `chrome.tabs` or `chrome.storage`) implemented, as this is purely a Frontend UI design assignment.

##  Additional Features Implemented

- **Framer Motion Integration:** Added fluid animations for tab switching and interactive hover states to make the UI feel alive and responsive.
- **Component-Based Architecture:** The project is highly modular, separating each tab (Chat, Write, Read, etc.) into its own reusable component for better code maintainability.
- **Performance Optimized:** Utilizing Next.js App Router and Tailwind v4 ensures minimal CSS bundling and maximum performance.

---
*Designed & Developed by [Gobindo Sutradhar Sagor]*
