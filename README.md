# Mobile Shop

A modern mobile e-commerce application built with React Native and Expo. This cross-platform shopping app provides a seamless shopping experience on both iOS and Android devices.

## 📱 Features

- **Product Browsing**: Browse through various products with a responsive grid layout
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add products to cart, manage quantities, and checkout
- **User Authentication**: Secure login and registration
- **Responsive UI**: Adapts to different screen sizes and orientations
- **Dark Mode Support**: Supports system-wide dark mode preferences

## 🛠️ Technology Stack

- **Frontend Framework**: React Native
- **Navigation**: Expo Router
- **API Management**: TanStack React Query
- **State Management**: Zustand
- **Styling**: NativeWind (TailwindCSS for React Native)
- **UI Components**: GlueStack UI components
- **Icons**: Lucide React Native

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional for mobile testing)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/enzocandido/mobile-shop.git
cd mobile-shop
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory based on `.env.example`:

```
EXPO_PUBLIC_API_URL=your_api_url
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

5. Run on specific platforms:

```bash
# For iOS
npm run ios

# For Android
npm run android

# For Web
npm run web
```

## 📂 Project Structure

- `app/` - Contains screen components and routing using Expo Router
- `components/` - Reusable UI components
- `api/` - API integration and data fetching functions
- `store/` - State management using Zustand
- `assets/` - Static assets like images and fonts

## 🔄 API Integration

The application connects to a RESTful API for fetching product data and handling user authentication. The API base URL should be configured in your `.env` file.

## 📱 Responsive Design

The application uses responsive design principles to provide optimal user experience across different device sizes and orientations. The product grid adapts to screen size with different numbers of columns based on breakpoints.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
