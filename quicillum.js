var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'MyService',
  script: require('path').join(__dirname, 'my-service-script.js')
});

// Uninstall the service
svc.on('uninstall', function() {
  console.log('Service uninstalled');
});

svc.uninstall();
