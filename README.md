# Vite Console Forward Plugin: Streamline Your Console Logs 📜✨

![GitHub Repo Stars](https://img.shields.io/github/stars/Yassinachqar6/vite-console-forward-plugin?style=social) ![GitHub Release](https://img.shields.io/github/release/Yassinachqar6/vite-console-forward-plugin.svg) ![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The **Vite Console Forward Plugin** enhances your development experience by forwarding console logs directly to the Vite log. This tool helps you keep track of logs efficiently, making debugging easier. With this plugin, you can focus on coding while it handles the log management seamlessly.

For the latest releases, visit [Releases](https://github.com/Yassinachqar6/vite-console-forward-plugin/releases).

## Installation

To install the Vite Console Forward Plugin, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yassinachqar6/vite-console-forward-plugin.git
   cd vite-console-forward-plugin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the plugin:**
   ```bash
   npm run build
   ```

4. **Download and execute the plugin:**
   You can find the latest version in the [Releases section](https://github.com/Yassinachqar6/vite-console-forward-plugin/releases). Download the appropriate file and execute it.

## Usage

After installation, you can use the plugin in your Vite project by following these steps:

1. **Add the plugin to your Vite configuration:**
   ```javascript
   import { defineConfig } from 'vite';
   import viteConsoleForward from 'vite-console-forward-plugin';

   export default defineConfig({
     plugins: [viteConsoleForward()]
   });
   ```

2. **Start your Vite server:**
   ```bash
   npm run dev
   ```

3. **Check the logs:**
   Open your browser's console or terminal to view the forwarded logs.

## Features

- **Seamless Integration:** Works effortlessly with your existing Vite setup.
- **Real-time Logging:** View logs in real-time as you develop.
- **Error Tracking:** Easily identify errors with detailed log messages.
- **Lightweight:** Minimal overhead on your development environment.

## Contributing

We welcome contributions! If you want to help improve the Vite Console Forward Plugin, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push to your branch:**
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a pull request.**

Your contributions help make this plugin better for everyone.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out:

- **GitHub:** [Yassinachqar6](https://github.com/Yassinachqar6)
- **Email:** yassinachqar6@example.com

For the latest releases, check out the [Releases section](https://github.com/Yassinachqar6/vite-console-forward-plugin/releases).