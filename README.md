# React Project Setup with Vite

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js) or yarn

## Installation

### 1. Create a New React Project with Vite
Run the following command in your terminal:
```sh
npx create-vite@latest my-app --template react
```
If using yarn, use:
```sh
yarn create vite my-app --template react
```

### 2. Navigate into Your Project Directory
```sh
cd my-app
```

### 3. Install Dependencies
```sh
npm install
```
Or if using yarn:
```sh
yarn install
```

## Running the Project Locally
Start the development server by running:
```sh
npm run dev
```
Or if using yarn:
```sh
yarn dev
```

This will start a local development server. The terminal will display a URL (e.g., `http://localhost:5173/`) where you can view your React app.

## Building for Production
To generate a production-ready build, run:
```sh
npm run build
```
Or:
```sh
yarn build
```

This will create an optimized `dist/` folder that you can deploy.

## Additional Commands
- **Linting (if ESLint is configured):**
  ```sh
  npm run lint
  ```
- **Preview Production Build:**
  ```sh
  npm run preview
  ```

## License
This project is licensed under the [MIT License](LICENSE).

