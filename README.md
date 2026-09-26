# NewsMonkey

A React news application that pulls the latest top headlines from the NewsAPI and organizes them by category. The app includes category navigation, dark mode, loading indicators, and infinite scrolling for a smoother reading experience.

## Features

- Browse top headlines by category:
  - General
  - Business
  - Entertainment
  - Health
  - Science
  - Sports
  - Technology
- Responsive news cards with article image, title, description, source, and publication date
- Dark mode toggle for better readability
- Loading bar and spinner while fetching data
- Infinite scroll to load more articles without manual pagination
- Navigation using React Router

## Tech Stack

- React
- React Router DOM
- NewsAPI
- Infinite Scroll Component
- React Top Loading Bar
- Bootstrap styling classes

## Project Structure

- `src/App.js` — main app layout and route configuration
- `src/components/Navbar.js` — top navigation and category links
- `src/components/News.js` — fetches and renders article data
- `src/components/NewsItem.js` — card component for individual articles
- `src/components/Spinner.js` — loading indicator

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your NewsAPI key

Create a `.env` file in the project root and add your API key:

```env
REACT_APP_NEWS_API=your_newsapi_key_here
```

> You can get a free API key from the NewsAPI website.

### 3. Run the app

```bash
npm start
```

The app will run in development mode at:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Notes

- The app depends on the `REACT_APP_NEWS_API` environment variable.
- If the API key is missing or invalid, article requests will fail.
- This project was created with Create React App and uses React 18.

## License

This project is for educational and personal use.
