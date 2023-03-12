// When scan is successful fucntion will produce data
function onScanSuccess(qrCodeMessage) {
  const obj = JSON.parse(qrCodeMessage);
    document.getElementById("result").innerHTML = 
  `<p>Name:${obj.user1.name}</p>
  <p>Username:${obj.user1.username}</p>
  <p>Age:${obj.user1.age}</p>
  <p>Weight:${obj.user1.weight}</p>
  <p>Allergies:${obj.user1.allergies}</p>
  <p>Gender:${obj.user1.gender}</p>
  <p>Blood Pressure:${obj.user1.bloodPressure}</p>
  <p>Diabetes: ${obj.user1.diabetes}</p>`

    
    // obj.user1.username,
    // obj.user1.age,
    // obj.user1.weight,
    // obj.user1.allergies,
    // obj.user1.gender,
    // obj.user1.bloodPressure,
    // obj.user1.diabetes;
   
   
    
      console.log(obj);
  }
  
  // When scan is unsuccessful fucntion will produce error message
  function onScanError(errorMessage) {
    // Handle Scan Error
  }
  
  // Setting up Qr Scanner properties
  var html5QrCodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250
  });
  
  // in
  html5QrCodeScanner.render(onScanSuccess, onScanError);