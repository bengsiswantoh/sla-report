const hostFlappingType = 'HOST FLAPPING ALERT';
const hostDowntimeType = 'HOST DOWNTIME ALERT';

const serviceFlappingType = 'SERVICE FLAPPING ALERT';

module.exports = {
  hostName: 'Busol PadiNET',
  serviceName: 'Access Point',
  from: '2020-08-01 00:00:00',
  until: '2020-09-01 23:59:59',

  displayFormat: 'YYYY-MM-DD HH:mm:ss',
  dateFormat: 'YYYY-MM-DD',

  NAState: 'N/A',
  stateTypeStarted: 'STARTED',
  stateTypeStopped: 'STOPPED',

  hostStateTypes: ['UP', 'DOWN', 'UNREACH', 'Flapping', 'Downtime', 'N/A'],
  hostFilterTypes: ['HOST ALERT', hostFlappingType, hostDowntimeType],

  hostFlappingType,
  hostDowntimeType,

  serviceStateTypes: [
    'OK',
    'WARNING',
    'CRITICAL',
    'UNKNOWN',
    'Flapping',
    'H.Down',
    'Downtime',
    'N/A',
  ],
  serviceFilterTypes: ['SERVICE ALERT', serviceFlappingType],

  serviceFlappingType,
};
