## Getting Started

This is a weather application built with Next.js and TypeScript that allows users to search for cities and view detailed weather information, including a 5-day forecast. The app features a responsive design, dark mode support, and pagination for browsing through a list of cities.


### Folder Structure

```
The project is organized as follows:

weather-app/
│
├── app/
│   ├── layout.tsx              // Navbar + SearchSection + ThemeProvider
│   ├── page.tsx                // Default view → CityTable
│   │
│   ├── city/
│   │   └── [name]/
│   │       ├── page.tsx        // City detail page
│   │       └── loading.tsx     // Skeleton while fetching
│   │
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── SearchSection.tsx
│   ├── CityTable.tsx           // 25 cities + pagination
│   ├── CityWeather.tsx         // Full weather detail
│   ├── Forecast.tsx            // 5-day forecast cards
│   ├── Skeleton.tsx            // Loading UI
│   └── ThemeProvider.tsx       // next-themes wrapper
│
├── lib/
│   ├── weather.ts              // All API calls (OpenWeatherMap)
│   └── geolocation.ts          // Auto-location helper (optional)
│
├── types/
│   └── weather.ts              // TypeScript interfaces
│
├── public/
│   └── icons/                  // Weather icons (optional)
│
├── .env.local                  // API key
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── package.json
└── tsconfig.json
```