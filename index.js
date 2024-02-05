const { Recorder, FileHandler } = require("node-rtsp-recorder");
const { Stream } = require("./src/helpers/stream");

module.exports = {
  Recorder: Recorder,
  FileHandler: FileHandler,
  Stream: Stream
}

// const streamingConfigs = [
//   { user: "admin", password: "cam", ip: '192.168.1.112:554', rtspPath: '/onvif1' },
// ];

// new Stream( app, {}, streamingConfigs)