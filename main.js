function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbxjxVx0vR_C-4jQN8Md1LUK5x-RvxRpNNEf5pD_U4SaS1NhYBIJEiY3I4ATTPSMl2uw/exec";

    fetch(url)
        .then(data => data.json())
        .then(data => {
            document.querySelector("#app").textContent = data[0].status;
        });
}

function addGS() {
    const url = "https://script.google.com/macros/s/AKfycbxjxVx0vR_C-4jQN8Md1LUK5x-RvxRpNNEf5pD_U4SaS1NhYBIJEiY3I4ATTPSMl2uw/exec";

    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc. ***REQUIRED
        mode: "no-cors", // no-cors, *cors, same-origin. ***REQUIRED
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "omit", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({"first name":"jeff", "last name":"ureta", "email address":"jeffvincentureta@gmail.com"}), // body data type must match "Content-Type" header
      });
}

document.querySelector("#button2").addEventListener("click", addGS);
document.querySelector("#button").addEventListener("click", testGS);