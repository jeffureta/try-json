function testGS() {
    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=QqWWVDdZ0Ao01JjylAgPgzkbt89w8Rie8NiGn3LkKgWhZe8iT4I82b6OHMz0IzH3ohyotFMYVXCD-rzGp7k_cSyUY2NmJgRjm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPQIfcmDu4ZJ-oPjvrlqJQoKwCham_CO7GcwIISIM-j1RQoZ-EcBJ2IK6Oz_X4FrrzH9fBJD03uIpthVcPNT1ynomXNG1cmBHg&lib=MybkFY4sr0YFF2hSIckwlIRmXCs-KDST4";

    fetch(url)
        .then(data => data.json())
        .then(data => {
            document.querySelector("#app").textContent = data[0].status;
        });
}

document.querySelector("#button").addEventListener("click", testGS);