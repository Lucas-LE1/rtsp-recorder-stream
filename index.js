const { FileHandler } = require("node-rtsp-recorder");
const { Stream, scriptUrl } = require("./src/helpers/stream");
const RTSPRecorder = require("./src/helpers/recorder");

module.exports = {
  Recorder: RTSPRecorder,
  FileHandler: FileHandler,
  Stream: Stream,
  scriptUrl: scriptUrl
}

// const streamingConfigs = [
//   { user: "admin", password: "cam", ip: '192.168.1.112:554', rtspPath: '/onvif1' },
// ];

// new Stream( app, {}, streamingConfigs)