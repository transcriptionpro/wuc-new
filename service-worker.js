'use strict';
var _pushassist = {}

_pushassist.serverUrl = "https://pushassist.com/api";
_pushassist.Url = "https://pushassist.com";
_pushassist.linkUrl;

self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
    console.log("Activated Service-Worker");
    event.waitUntil(self.clients.claim());
});

/* show notifications send by server */
self.addEventListener('push', function (event) {
    event.waitUntil(
        self.registration.pushManager.getSubscription()
            .then(function (subscription) {

                var endpointURL = subscription.endpoint;
                var registration_id = endpointURL.substr(endpointURL.lastIndexOf('/') + 1);
                var messageUrl = _pushassist.serverUrl + "/subscribers/message/" + registration_id;

                return fetch(messageUrl, {method: 'get'}).then(function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        throw new Error();
                    }

                    // Examine the text in the response
                    return response.json().then(function (data) {
                        if (data.status != "Success" || !data.notification) {

                            console.error('The API returned an error.', data.error);
                            throw new Error();
                        }

                        var title = data.notification.title;
                        var message = data.notification.message;
                        var icon = data.notification.icon;
                        var url = data.notification.url;
                        _pushassist.linkUrl = data.notification.url;
                        var notificationTag = data.notification.tag; // unique id which is used to increment click rate

                        return self.registration.showNotification(title, {
                            body: message,
                            icon: icon,
                            tag: notificationTag
                        });
                    });
                }).catch(function (err) {
                    console.error('Unable to retrieve data while sending ', err);

                    var title = 'An error occurred';
                    var message = 'We were unable to get the information for this push message';
                    var icon = _pushassist.Url + '/uploads/pushassist_default.png';
                    var notificationTag = 'notification-error';

                    return self.registration.showNotification(title, {
                        body: message,
                        icon: icon,
                        tag: notificationTag
                    });
                });
            })
    );
});

self.addEventListener('notificationclick', function (event) {

    self.registration.pushManager.getSubscription().then(function (subscription) {
        var endpointURL = subscription.endpoint;
        var registration_id = endpointURL.substr(endpointURL.lastIndexOf('/') + 1);

        var clickDeliveryURL = _pushassist.serverUrl + '/subscribers/trackClick/' + registration_id + '/' + event.notification.tag;

        // send update to server
        fetch(clickDeliveryURL, {method: 'get'}).then(function (response) {
            if (response.status == 200) {
                console.log('Response Status : ' + response.status);
            }
        }).catch(function (err) {
            console.log('error = ', err);
        });
    });

    event.notification.close();

    function getURL() {

        var url = _pushassist.linkUrl;

        if (url !== '' && url !== 'undefined') {

            return url;
        } else {

            return _pushassist.Url;
        }
    }

    event.waitUntil(
        clients.matchAll({
                type: "window"
            })
            .then(function (clientList) {

                for (var i = 0; i < clientList.length; i++) {
                    var client = clientList[i];

                    if (client.url === '/' && 'focus' in client) {

                        return client.focus();
                    }
                }

                if (clients.openWindow) {

                    return clients.openWindow(getURL());
                }
            })
    );
});