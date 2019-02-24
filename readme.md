# Ground Control GUI

![](https://img.shields.io/badge/node-%3E%3D%208.0.0-green.svg?style=flat)
![](https://img.shields.io/badge/npm-%3E%3D%206.0-blue.svg?style=flat)
![](https://img.shields.io/badge/Go-Pioneer!-yellow.svg?style=flat)

User interface for [Ground Control](https://github.com/manuelmhtr/ground-control) robot controller. Displays the video stream and status of the robot.

*Using [React Boilerplate](https://www.reactboilerplate.com/).*

Screenshot:

![Screenshot](https://s3.amazonaws.com/manuelmhtr.assets/github/ground-control-gui-screen1.png)

## Indicators

The dashboard is pretty easy to read:

* `Left motor speed`: Indicates the current speed of **left** motors in the robot. Range from -100% to 100%.
* `Right motor speed`: Indicates the current speed of **right** motors in the robot. Range from -100% to 100%.
* More coming: Battery voltage, GPS coordinates...

## Usage

1. Start [Ground Control CLI](https://github.com/manuelmhtr/ground-control) server to connect to socket and listen to events.

2. Install dependencies:

```bash
npm install
```

3. Run app:

For development (with hot reload):

```bash
npm start
```

For production:

```bash
npm run build
```

This will create a deployable build in `/build` directory.
