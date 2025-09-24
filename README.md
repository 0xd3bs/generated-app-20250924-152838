# SYP TECH Innovation Landscape

A professional and visually stunning single-page landscape visualizing SYP TECH's expertise in AI/ML, Blockchain, and professional training.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/0xd3bs/generated-app-20250924-152501)

This application is a minimalist, modern, and professional single-page website designed to serve as a startup/solution landscape for SYP TECH. It visually articulates the company's dual expertise in 'Data Science & AI/ML' and 'Blockchain Development', alongside its 'Professional Training' services. The design prioritizes clarity, elegance, and user engagement, targeting business decision-makers.

## Key Features

-   **Modern & Minimalist UI**: A clean, professional, and tech-focused dark theme design.
-   **Dual Expertise Showcase**: Clearly separated sections for 'Data Science & AI/ML' and 'Blockchain Development'.
-   **Interactive & Engaging**: Smooth animations and micro-interactions powered by Framer Motion for a polished user experience.
-   **Fully Responsive**: Flawless layout and viewing experience across desktops, tablets, and mobile devices.
-   **Component-Based Architecture**: Built with reusable components for consistency and maintainability.
-   **Centralized Content Management**: All text content is managed in a single configuration file, making updates simple and fast.

## Technology Stack

-   **Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: [Cloudflare Pages & Workers](https://www.cloudflare.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your system. This project uses Bun as the package manager and runtime.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/syptech_innovation_landscape.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd syptech_innovation_landscape
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To start the local development server, run the following command:

```sh
bun run dev
```

This will start the Vite development server, typically available at `http://localhost:3000`. The server supports Hot Module Replacement (HMR) for a fast and efficient development workflow.

## Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command compiles the TypeScript and React code and bundles all static assets into the `dist` directory, optimized for deployment.

## Deployment

This project is configured for seamless deployment to the Cloudflare network using Wrangler.

### One-Click Deploy

You can deploy this application to your own Cloudflare account with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/0xd3bs/generated-app-20250924-152501)

### Manual Deployment via CLI

1.  **Authenticate with Cloudflare:**
    If you haven't already, log in to your Cloudflare account.
    ```sh
    wrangler login
    ```
2.  **Deploy the application:**
    Run the deploy script from the project root. This will build the application and deploy it to Cloudflare Pages.
    ```sh
    bun run deploy
    ```
    Wrangler will handle the process of uploading your static assets and worker functions.

## License

This project is licensed under the MIT License.