# React JS

React JS is a JavaScript library for building user interfaces.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm create-react-app
```

OR

```bash
 npm create vite@latest
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

### `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

## Docker

In order to test the Docker container you need to be able to perform docker commands. Familiarity with building and running images is preferred.

## Add Docker Container

### Create Docker image and run script

Add Dockerfile as example in this repository

Add run script (this is the secret) Adding a separate script for the CMD of your Dockerfile allows you to inject the container's ENV params during docker run .... If you build your React app in the Dockerfile it will not recognize the ENV variables you pass as arguments when you run it.

Set script permissions IMPORTANT chmod +x run to allow Docker to execute the script during the CMD. Alternatively you could add another layer to the Dockerfile and a RUN chmod+x run step.

## Build and run Docker image

Build docker image:

```bash
docker build -t myimage .
```

Run image and add ENV variables to container:

```bash
docker run --name myapp -p 8080:5000 \
-e REACT_APP_ENVIRONMENT=docker \
-e REACT_APP_TIMEZONE=America/Pacific \
--rm myimage
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
