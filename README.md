# 🌟 Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a modern design.

## 🚀 Features

- 🌓 **Dark/Light mode**
- 🎨 **Modern UI** with Tailwind CSS
- ✨ **Smooth animations** with Framer Motion
- 📱 **Fully responsive design**
- 🚀 **Built with React and TypeScript**
- ⚡ **Powered by Vite** for fast development
- 🔗 **Custom favicon** based on the Code icon from the header
- 🌐 **Backend integration** for dynamic content (API, database, etc.)

## 🆕 Updates

   - Added a favicon using the Code icon from the header for better branding. 🎉
   - Implemented backend functionality to serve dynamic content via a Netlify function. 🔄
   - Enhanced user experience with smooth transitions and animations. 🌈
   - Updated codebase to utilize Node.js for backend operations. 🖥️

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
   - 🟢 **Node.js** (v18 or higher)
   - 🟢 **npm** (v9 or higher)

## 🏁 Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**
```bash
git clone https://github.com/Ayyubiy90/my-portfolio.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📜 Available Scripts

   - `npm run dev` - Starts the development server 🚀
   - `npm run build` -  Builds the app for production 📦
   - `npm run preview` - Previews the production build locally 👀
   - `npm run lint` - Runs ESLint to check code quality ✅

## 📂 Project Structure

```
my-portfolio/
├── backend/             # Backend folder for server and functions
│   ├── netlify/         # Netlify functions and configuration
│   ├── node_modules/    # Node.js modules
│   ├── .env             # Environment variables
│   ├── package-lock.json # Lock file for dependencies
│   ├── package.json      # Backend dependencies
│   └── server.js        # Main server file
│   └── functions/       # Folder for Netlify functions
│       └── contact.js   # Function to handle contact form submissions
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json         # Frontend dependencies
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔌 Backend Integration
This project includes backend functionality to serve dynamic content. Here are the details:

   - **API Endpoints:** The project uses a Netlify function to handle contact form submissions and other dynamic content. 📡
   - **Database:** Specify the database used (if applicable) and any relevant connection details. 🗄️
   - **Environment Variables:** If applicable, mention any environment variables needed for the backend (e.g., API keys, database URLs). Provide an example of a `.env` file structure. 🔑

## 🎨 Customization

1. Personal Information
   - Update content in components to reflect your information. 📝
   - Modify images and links in the Projects section. 🖼️
   - Update contact information in the Contact component. 📞

2. Styling
   - Colors can be customized in `tailwind.config.js`. 🎨
   - Global styles are in `src/index.css`. 📄

## 📦 Moving to Your Local Machine

There are two ways to get this project on your local machine:

### Option 1: Download as ZIP

1. Click the "Download ZIP" button in the project menu. 📥
2. Extract the ZIP file to your desired location. 📂
3. Open the folder in your code editor. 💻
4. Run `npm install` to install dependencies. 🔧
5. Start developing with `npm run dev`. 🚀

### Option 2: Using Git (Recommended)

1. Create a new repository on GitHub. 🗂️
2. Clone the repository to your local machine:
```bash
git clone https://github.com/Ayyubiy90/my-portfolio.git
```
3. Copy all project files to your local repository. 📁
4. Initialize and push to your repository:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## 🛠️ Troubleshooting

Common issues and solutions:

1. **Node modules issues** 🧩
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

2. **Vite build errors** ⚠️
   - Clear the `.vite` cache folder
   - Ensure all dependencies are up to date

3. **TypeScript errors** 📜
   - Run `npm install @types/react @types/react-dom` to install missing type definitions
   - Check `tsconfig.json` for proper configuration

## 📞 Contact
For any questions or feedback, feel free to reach out:

   - Email: ayyubiy67@gmail.com 📧


## License

This project is licensed under the MIT License - see the LICENSE file for details.

### Happy coding! 🚀

Feel free to modify any sections or add more details as needed!