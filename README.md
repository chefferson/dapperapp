[![Node.js CI](https://github.com/rfp53-fec2-cyborg/catwalk/actions/workflows/node.js.yml/badge.svg)](https://github.com/rfp53-fec2-cyborg/catwalk/actions/workflows/node.js.yml)
# DapperApp
DapperApp is a front-end application for a mock e-commerce site. The site contains the below widgets with differing functionalities: product overview, related items and comparisions, and rating and reviews.

The application reads, inserts, and updates data via an API.

## Getting Started
1. Fork this repository on Github.
2. Clone your forked repository to your hard drive
3. Install dependencies
```
npm install
```
4. To start the application locally, run these commands to build a development mode version and to start the server
```
npm run build-test
```
```
npm start
```
5. For testing, you run the below commands to test all, or a particular file
```
npm test
```
```
npm test <file name>
```

This project is configured with webpack. The `dist` directory is git ignored, and will be wiped clean with every build (dev or prod). Production mode is optimized with webpack code splitting and caching.

## Environment
The project requires following environment variables added in your .env file. There is an example file you can follow `example.env`. These variables will be required
* Github personal access token - `API_KEY`
* Cloudinary preset (unsigned) - `CLOUDINARY_PRESET`
* Cloudinary URL - `CLOUDINARY_URL`

The photo upload method is done via a direct call to the Cloudinary REST API. More information can be found here: https://cloudinary.com/documentation/upload_images#uploading_with_a_direct_call_to_the_rest_api

## Contributors
- [@chefferson](https://github.com/chefferson)
- [@ReadRandom](https://github.com/ReadRandom)
- [@godfreydoo](https://github.com/godfreydoo)
