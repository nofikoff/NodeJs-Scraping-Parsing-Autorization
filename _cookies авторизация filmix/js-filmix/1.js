const fetch = require('node-fetch');

// источник https://stackoverflow.com/a/55680330/1932494
// найдено по запросу node-fetch send cookies


fetch("https://filmix.co/engine/ajax/user_auth.php", {
    "headers": {
        "accept": "*/*",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://filmix.co/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "login_name=nofikoff&login_password=5124315&login_not_save=1&login=submit",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
})

    .then(
        // resolve
        function (responseNoError) {
            console.log("Вышли из Promise 1-001 - по RESOLVE ЕСТЬ КЛЮЧ");
            //let mykey = JSON.parse(responseNoError).access_token;
            let mykey = parseCookies(responseNoError);


            //console.log('response 001', e); // JSON response
            console.log('COOKIES: ', mykey); // JSON response

            //для передачи ответа = положительного резульатат - возващаем PROMISE / RESOLVE / API KEY
            return new Promise((resolve, reject) => {
                console.log("Выходим из Promise 1-002 - по RESOLVE");
                resolve(mykey);
            });
        },
        //reject
        function (errorResponse) {
            console.log("Вышли из Promise 1-001 - по REJECT НЕТ COOKIES");
            return new Promise((resolve, reject) => {
                //для передачи ответа = ОТРИЦАТЕЛЬНОГО резульатат - возващаем PROMISE / REJECT / сообщение
                reject("1 Не могу прочитать COOKIES - логин пароль не правильный");
            });

        })
    .catch((error) => console.log(error))


    .then(
        // resolve
        function (mykey) {
            console.log("Вышли из Promise 1-002 - по RESOLVE ЕСТЬ COOKIES " + mykey);

            setTimeout(function () {


                let catId = async () => {
                    // ВТОРОЙ ЗАПРОС
                    let с = await fetch("https://filmix.co/profile/nofikoff", {
                        "headers": {
                            "authority": "filmix.co",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36",
                            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                            "sec-fetch-dest": "document",
                            "sec-fetch-mode": "navigate",
                            "sec-fetch-site": "same-origin",
                            "sec-fetch-user": "?1",
                            "upgrade-insecure-requests": "1",
                            "referrer": "https://filmix.co/",
                            "cookie": mykey
                        },

                        "referrerPolicy": "no-referrer-when-downgrade",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    })
                        .then(
                            response => {
                                console.log("XXXXXXXXXXX RESPONSE XXXXXXXXXXXXXX");

                                console.log(response.text()); // Logs the response
                                return response;
                            },
                            response => {
                                console.log("XXXXXXXXXXX ТРАБЛЫ XXXXXXXXXXXXXX");
                                console.log(response);
                            }
                        )


                };
            }, 3000);
            console.log(catId());
        },
        // reject
        function (errorResponse) {
            console.log("Вышли из Promise 1-002 - по REJECT НЕТ КЛЮЧА");
            console.log(errorResponse);
            return new Promise((resolve, reject) => {
                reject("НЕТ КЛЮЧА");
            });

        }
    )


    .then(
        function (e) {
            console.log("Вышли из Promise 1-003 - по RESOLVE ЕСТЬ ДАННЫЕ");
            console.log(e);
            //console.log(e.headers);
        },
        function (e) {
            console.log("Вышли из Promise 1-003 - по REJECT НЕТ ДАННЫХ");
        })
    .catch((error) => console.log(error))


function parseCookies(response) {
    const raw = response.headers.raw()['set-cookie'];
    return raw.map((entry) => {
        const parts = entry.split(';');
        const cookiePart = parts[0];
        return cookiePart;
    }).join(';');
}

