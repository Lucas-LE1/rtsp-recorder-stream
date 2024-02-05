

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

var urlBrowser

class Stream {
  /** @param {Options} props */
  /** @param {streamConfigs} props */
  constructor(app, { additionalFlags, verbose, transport, windowsHide }, streamingConfigs = []) {
    const { proxy,scriptUrl } = require('rtsp-relay')(app);
    urlBrowser = scriptUrl

    streamingConfigs.forEach((config, index) => {
      const rtspUrl = `rtsp://${config.user}:${config.password}@${config.ip}${config.rtspPath}`;
      const handler = proxy({ url: rtspUrl, verbose, additionalFlags, transport, windowsHide });
      app.ws(`/api/stream/${index}`, handler);
    });
  }
}

module.exports = {
  Stream: Stream,
  scriptUrl: urlBrowser
}

