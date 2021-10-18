<br/>

<p align="center">
  <img src="./build/example.png" height="200"/>
</p>

<p align="center">
  <h3 align="center">React, Typescript, Webpack and Electron boilerplate</h3>

  <p align="center">
    A boilerplate designed to quickly set you up and running on developing an Electron app using React and Typescript
    <br/>
    <br/>
    <a href="https://github.com/J-Bollie/react-typescript-electron-boilerplate/issues">Report Bug</a>
    .
    <a href="https://github.com/J-Bollie/react-typescript-electron-boilerplate/issues">Request Feature</a>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/J-Bollie/react-typescript-electron-boilerplate?color=dark-green) ![Forks](https://img.shields.io/github/forks/J-Bollie/react-typescript-electron-boilerplate?style=social) ![Stargazers](https://img.shields.io/github/stars/J-Bollie/react-typescript-electron-boilerplate?style=social) ![Issues](https://img.shields.io/github/issues/J-Bollie/react-typescript-electron-boilerplate) ![License](https://img.shields.io/github/license/J-Bollie/react-typescript-electron-boilerplate)

## Table Of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## About The Project

After looking for ages on a way to start developing Electron applications using React and Typescript from a boilerplate and not finding any that work (on my computer), I started looking into a way to make my own. After figuring out how, I decided to open-source this boilerplate because I had never done this before.

## Getting Started

Setting up this boilerplate is relatively easy.

### Installation

Follow these steps to install the neccesary dependencies.

Clone the repository (or download the zip file)

```sh
git clone https://github.com/J-Bollie/react-typescript-electron-boilerplate.git
```

After cloning the repo, install the dependencies with following command:

```sh
npm install
```

This must be done inside the folder of the cloned repo.

That should be it!

## Usage

I have included a couple commands to run the project:

- This will launch the application (without hot reload)

```sh
npm run start
```

- This will launch the application (with hot reload)

```sh
npm run dev
```

- This will launch the React part of the application (with hot reload)

```sh
npm run react:dev
```

- This will launch the Electron part of the application (with hot reload)

```sh
npm run electron:dev
```

- This will make a Windows installer for the application to distribute

```sh
npm run production
```

- If you want to change the icon of the application this can be done in package.json (icon). Make sure the icon is in the build directory!

## Contributing

If you want to contribute feel free to open a pull request with a new feature!

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/J-Bollie/react-typescript-electron-boilerplate/blob/main/LICENSE.md) for more information.

## Authors

- [Jensen Bollen](https://github.com/J-Bollie/) - _Computer Science Student_ - _Made the boilerplate_
