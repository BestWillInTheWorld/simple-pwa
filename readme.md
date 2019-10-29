# Experiments with PWA's

Initial structure based on:
* https://github.com/jamesjohnson280/hello-pwa
* https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605

Brought up to spec using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) in the Audit tab in Chrome Dev tools.

# Extanding the App

## Battery API
This is a deprecated API - still works in Chrome and Opera (+ possibly Edge and several Android browsers) in October 2019 - nice for a simple demo, but not wrth investing much time in.

* https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
  * https://caniuse.com/#search=getBattery
* https://github.com/irekrog/battery-status-progressive-web-app
  * https://irekrog.github.io/battery-status-progressive-web-app/

## Install/Update events

* https://deanhume.com/displaying-a-new-version-available-progressive-web-app/
* https://medium.com/progressive-web-apps/pwa-create-a-new-update-available-notification-using-service-workers-18be9168d717
* https://stackoverflow.com/questions/49739438/when-and-how-does-a-pwa-update-itself

## Vibrate API
* https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API


## Location
* https://whatwebcando.today/geolocation.html


## Connected PWA's
 
* https://medium.com/pwa-blog/super-powerful-apps-pwa-iot-wot-1e44865a0ef7
* https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API
* https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API#Browser_compatibility
* NFC `:(` https://whatwebcando.today/nfc.html
* Push messages : https://developer.mozilla.org/en-US/docs/Web/API/Push_API



# Tools for Testing Browsers and Automated Website to PWA Conversion
* https://pwafire.org/
* https://pwa-detector.firebaseapp.com/