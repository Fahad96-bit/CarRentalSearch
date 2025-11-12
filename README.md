# Car Rental Search Application

A modern, responsive car rental search application built with React and Vite. This application allows users to search for car rentals by selecting pickup/return locations, dates, and applying promo codes.

## Features

- 🚗 **Dual Booking Types**
  - Start Booking: Standard car rental with pickup and return locations
  - Monthly Subscription: Long-term rental option

- 📍 **Location Selection**
  - Airport locations (Dubai, Sharjah, Abu Dhabi)
  - Free delivery areas
  - Interactive map integration
  - Custom address input for delivery/collection

- 📅 **Date & Time Selection**
  - Interactive calendar modal
  - Pickup and return date selection
  - Time picker with AM/PM selection
  - Duration calculation

- 🎁 **Promo Code Support**
  - Apply promo codes or Shukran Id
  - Easy promo code management

- 🎨 **Modern UI/UX**
  - Clean and intuitive interface
  - Responsive design
  - Smooth animations and transitions
  - Tailwind CSS styling

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd car-rental-search
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Running the Application

### Development Mode

To start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or the next available port).

The dev server includes:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- Error overlay for debugging

### Production Build

To create a production build:

```bash
npm run build
```

or

```bash
yarn build
```

The optimized production files will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

or

```bash
yarn preview
```

### Linting

To check code quality and style:

```bash
npm run lint
```

or

```bash
yarn lint
```

## Project Structure

```
car-rental-search/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos, etc.
│   ├── components/        # Reusable components
│   │   └── shared/       # Shared components (Navbar)
│   ├── context/           # React Context providers
│   ├── features/          # Feature-based modules
│   │   ├── search/        # Search functionality
│   │   │   ├── modals/    # Modal components
│   │   │   ├── StartBookingForm.jsx
│   │   │   ├── MonthlySubscriptionForm.jsx
│   │   │   └── TabsSection.jsx
│   │   └── vehicle-listing/  # Vehicle listing page
│   ├── hooks/             # Custom React hooks
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

1. **Select Booking Type**: Choose between "Start Booking" or "Monthly Subscription"
2. **Choose Location**: Click on location fields to select from airports or enter custom address
3. **Select Dates**: Click on date fields to open the calendar modal and select pickup/return dates
4. **Apply Promo Code** (optional): Click on "Promo Code / Shukran Id" to apply discounts
5. **View Results**: Click "Show Cars" to see available vehicles

## Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For issues, questions, or contributions, please contact the development team.

---

Built with ❤️ using React and Vite
