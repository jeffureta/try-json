function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbxjxVx0vR_C-4jQN8Md1LUK5x-RvxRpNNEf5pD_U4SaS1NhYBIJEiY3I4ATTPSMl2uw/exec";

    fetch(url)
        .then(data => data.json())
        .then(data => {
            document.querySelector("#app").textContent = data[0].status;
        });
}

function addGS() {
    // const url = "https://script.google.com/macros/s/AKfycbxjxVx0vR_C-4jQN8Md1LUK5x-RvxRpNNEf5pD_U4SaS1NhYBIJEiY3I4ATTPSMl2uw/exec";
    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=Ovoz__77-EZSqvGS3k-N4eNO1uNCvaArP81lOQQozto9EDI8IK6i4JW9DvDqaXsrMiPa4awQK64y6AM2aFu3geRBQEs9cm9Wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK06Ri5p0hFjzmMRgTYXfbek4juMa2TxRv9Z7Da0rg5hsNn3zvNaE4rBNyNK-wxz5_mtyGfyyGuI0GkHWi-P4qddstkZhpZz1g&lib=MybkFY4sr0YFF2hSIckwlIRmXCs-KDST4"

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