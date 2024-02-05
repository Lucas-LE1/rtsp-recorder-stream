

/**
 * @typedef {{
*  additionalFlags?: string[];
*  verbose?: boolean;
*  transport?: 'udp' | 'tcp' | 'udp_multicast' | 'http';
* windowsHide?: boolean;
* }} Options
*/

/**
 * @typedef {{
*  ip: string;
*  rtspPath: string;
*  user: string;
*  password: string;
* }} streamConfigs
*/

class Stream {
  /** @param {Options} props */
  /** @param {streamConfigs} props */
  constructor(app, { additionalFlags, verbose, transport, windowsHide }, streamingConfigs = []) {
    const { proxy } = require('rtsp-relay')(app);

    streamingConfigs.forEach((config, index) => {
      const rtspUrl = `rtsp://${config.user}:${config.password}@${config.ip}${config.rtspPath}`;
      const handler = proxy({ url: rtspUrl, verbose, additionalFlags, transport, windowsHide });
      app.ws(`/api/stream/${index}`, handler);
    });
  }
}

module.exports = {
  Stream: Stream
}

