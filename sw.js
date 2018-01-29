/* eslint-env browser, serviceworker, es6 */

'use strict';

let payload;

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
  payload = event.data.json();

  const title = 'Traverous';
  const options = {
    body: payload.verb,
    icon: '/favicon.ico',
    badge: '/favicon.ico'
  };

  if (payload.id == "follow-req") {
    callToShowNewRequest();

    // TODO return instead of show notification box
  }

  const notificationPromise = self.registration.showNotification(title, options);
  event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow(getLink())
  );
});

/**
 * based on push id, returns link
 * @param payload Object data received via push
 */
let getLink = () => {
  if (payload.id == "follow-req") {
    // link to requests page
    return '/requests';
  }
  else if (payload.id == "follow-accept") {
    // link to that user's profile
    return '/profile/' + payload.actor.username + '/' + payload.actor.objectId;
  }
  else if (payload.id == "send-msg") {
    // TODO link to message's place with chat open??
    return '/home';
  }
  else if (payload.id == "commented") {
    // TODO link to post page with comment highlighted
    return '/home';
  }
};

let callToShowNewRequest = () => {
  console.log('TODO callToShowNewRequest');
  
  // increment number of requests
  let prevReqs = localStorage.getItem("numReqs");
  if (prevReqs == null) {
    prevReqs = 0;
  }
  prevReqs++;
  localStorage.setItem("numReqs", prevReqs);
};

// include your worker
// let myWorker = self;
// let data;
// let changeData = function() {
//      // save data to local storage
//      localStorage.setItem('numReqs', 420);
//      // get data from local storage
//      data = localStorage.getItem('numReqs');
//      sendToWorker();
//    };
// let sendToWorker = function() {
//   // send data to your worker
//   myWorker.postMessage({
//     data: data
//   });
// };
//  setInterval(changeData, 1000)