'use strict';
const fs = require('fs');
const path = require('path');
const logger = require('sonos-discovery/lib/helpers/logger');
const tryLoadJson = require('./lib/helpers/try-load-json');

function merge(target, source) {
  Object.keys(source).forEach((key) => {
    if ((Object.getPrototypeOf(source[key]) === Object.prototype) && (target[key] !== undefined)) {
      merge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
}

var settings = {
  port: 5005,
  ip: "0.0.0.0",
  securePort: 5006,
  announceVolume: 40,
  cacheDir: path.join(__dirname, '../../', 'userdata'),
};

logger.debug(settings);

module.exports = settings;
