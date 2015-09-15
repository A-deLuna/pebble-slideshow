var xhrRequest = function(url,type,callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open(type, url);
  xhr.send();
};

Pebble.addEventListener("ready",
    function(e) {
        console.log("Hello world! tonttt- Sent from your javascript application.");
    }
);

Pebble.addEventListener("appmessage", function (e) {
  console.log("received message: " + JSON.stringify(e.payload));
  var url;
  if(e.payload[1] === 1) {
    url = "http://192.168.1.68:3000/up";
  } else {
    url = "http://192.168.1.68:3000/down";
  }
  xhrRequest(url, 'GET', function (response){
    console.log(response);
  });
});
