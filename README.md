# Javascript Frontend Projects

A collection of small, self-contained frontend projects built with plain HTML, CSS, and JavaScript (and one React/Vite app). Each folder contains a single demo app with its own `index.html`, styles, and scripts.

## Projects (folders)
- **Counter app**: Simple counter with increment, decrement and reset.
- **Digital Clock**: Real-time digital clock display.
- **Drag & drop kanban**: Kanban-style board with drag & drop tasks.
- **Hide and show password toggle**: Password field with show/hide toggle.
- **Id-Form**: React + Vite app in `My-App/` (authentication, dashboard, forms).
- **Image gallery**: Image carousel/gallery with navigation.
- **Notes App**: Create, edit and delete notes (simple notes manager).
- **Password Strong or weak**: Password strength checker with feedback.
- **Quiz App**: Multiple-choice quiz with scoring and progress.
- **Random password generator**: Generate random secure passwords.
- **Stopwatch**: Start/stop/reset stopwatch with lap support.
- **To-Do List**: Task manager with add, complete, delete and filters.
- **Weather App**: Search and display current weather (uses weather icons/assets).

## How to run
- For most demos: open the folder and open `index.html` in your browser (double-click or drag into browser).

- For the React/Vite app (`Id-Form/My-App`):

  ```powershell
  cd "Id-Form\My-App"
  npm install
  npm run dev
  ```

  Then open the local dev URL printed by Vite (usually `http://localhost:5173`). To build for production:

  ```powershell
  npm run build
  ```

## Notes
- These projects are standalone learning demos; they do not include a shared build system.
- Assets (icons and images) used by each demo are stored inside the respective folders.
- If any demo expects an API (e.g., the Weather App), ensure you have the required API key or modify the code to use your preferred weather API.

## Contributing
- Add new demos as new folders with the same structure (`index.html`, `index.css`, `index.js`).
- Open a pull request with a clear description and demo screenshots.

