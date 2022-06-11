// document.addEventListener('DOMContentLoaded', init, false);
// function init() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then((reg) => {
//         console.log('Service worker registered -->', reg);
//       }, (err) => {
//         console.error('Service worker not registered -->', err);
//       });
//   }
// }

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

if ('Notification' in window && Notification.permission != 'granted') {
    console.log('Ask user permission')
    Notification.requestPermission(status => {  
        console.log('Status:'+status)
        displayNotification('Notification Enabled');
    });
}


const displayNotification = notificationTitle => {
    console.log('display notification')
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(reg => {
            console.log(reg)
            const options = {
                    body: 'Thanks for allowing push notification!',
                    icon:  '/assets/icons/android-icon-512x512.png',
                    vibrate: [100, 50, 100],
                    data: {
                      dateOfArrival: Date.now(),
                      primaryKey: 0
                    }
                  };
    
            reg.showNotification(notificationTitle, options);
        });
    }
};