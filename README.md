## Getting Started

This is a weather application built with Next.js and TypeScript that allows users to search for cities and view detailed weather information, including a 5-day forecast. The app features a responsive design, dark mode support, and pagination for browsing through a list of cities.


### Folder Structure

```
The project is organized as follows:

weather-forecast-app/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Navbar + Search + Providers (persistent)
│   ├── page.tsx                  # Default → CityTable
│   ├── globals.css
│   │
│   ├── city/
│   │   └── [name]/
│   │       ├── page.tsx          # CityWeather page
│   │       └── loading.tsx       # Skeleton loader
│
│
├── components/                   # Reusable UI components
│   ├── Navbar.tsx
│   ├── SearchSection.tsx
│   ├── CityTable.tsx
│   ├── CityWeather.tsx
│   └── ThemeProvider.tsx
│
│
├── context/                      # Global state
│   └── WeatherContext.tsx
│
├── hooks/                        # Custom hooks
│   └── useWeather.ts             # fetch + state logic
│
│
├── lib/                          # Business logic (NO UI)
│   └── weather.ts                # API calls
│
├── types/                        # TypeScript types only
│   └── weather.ts
│
├── public/                       # Static assets
│   ├── icons/
│   └── images/
│
│
├── .env.local                    # API key
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md

```