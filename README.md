# Node RTSP recorder

[![NPM Version](https://img.shields.io/npm/v/node-rtsp-recorder.svg)](https://www.npmjs.com/package/node-rtsp-recorder)
[![License](https://img.shields.io/npm/l/node-rtsp-recorder.svg)](https://github.com/example/node-rtsp-recorder/blob/master/ LICENSE)
[npm package rtsp-relay](https://www.npmjs.com/package/rtsp-relay)

##Description

This Node.js module uses the ```node-rtsp-recorder``` library to record RTSP video streams. It exports three main classes: ```Recorder```, ```FileHandler``` and ```Stream```.

##Installation

Use npm to install ```node-rtsp-recorder```:

```bash
npm install node-rtsp recorder
```

## Exported Classes

1. Recorder
The Recorder class is responsible for recording RTSP streams. For usage details, see the official library documentation.

2. File Handler
The FileHandler class manipulates files resulting from recording RTSP streams.

3. Stream
The Stream class (implementation not provided in this code) can be used as a helper to simplify the use of rtsp-relay.

## Example of use
Uncomment and adapt the following excerpt to configure and start streaming:

```javascript
const { Recorder, FileHandler } = require("node-rtsp-recorder");
const {Stream} = require("./src/helpers/stream");

module.exports = {
  Recorder: Recorder,
  File Handler: File Handler,
  Transmission: Transmission
}

// Example of use:
// const streamingConfigs = [
// {user: "admin", password: "cam", ip: '192.168.1.112:554', rtspPath: '/onvif1' },
// ];
// new Stream(app, {}, streamingConfigs)
```

Provide the correct settings for streaming, including user credentials, password, IP address, and RTSP path.

### Contributions
Contributions are welcome. Feel free to open issues and pull requests.

## License
This project is licensed under the MIT License.