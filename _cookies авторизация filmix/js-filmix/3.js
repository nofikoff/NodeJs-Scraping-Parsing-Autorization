console.log("start");
const fetch = require('node-fetch');


fetch("http://seasonvar.ru/?mod=login", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "pragma": "no-cache",
        "upgrade-insecure-requests": "1",
    },
    "referrer": "http://seasonvar.ru/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "login=ruslan.novikov%40gmail.com&password=5124315",
    "method": "POST",
    "mode": "cors"
})

    .then(
        // resolve
        function (responseNoError) {
            console.log("Вышли из Promise 1-001 - по RESOLVE есть первый ответ");
            console.log(responseNoError.headers);
            let mykey = parseCookies(responseNoError);
            //console.log('response 001', e); // JSON response
            console.log('КУКИ:', mykey); // JSON response

            //для передачи ответа = положительного резульатат - возващаем PROMISE / RESOLVE / API KEY
            return new Promise((resolve, reject) => {
                console.log("Выходим из Promise 1-002 - по RESOLVE");
                resolve(mykey);
            });
        }
        //reject
        // function (errorResponse) {
        //     console.log("Вышли из Promise 1-001 - по REJECT НЕТ КУКИЫ");
        //     return new Promise((resolve, reject) => {
        //         //для передачи ответа = ОТРИЦАТЕЛЬНОГО резульатат - возващаем PROMISE / REJECT / сообщение
        //         reject("1 Не могу прочитать ключ - логин пароль не правильный");
        //     });
        //
        //  }
    )


    .then(
        // resolve
        function (mykey) {
            console.log("Вышли из Promise 1-002 - по RESOLVE ЕСТЬ КЛЮЧ");

            console.log("$$$$$$$$$$$$$$$$$$$$$$"+mykey);
            return fetch("http://seasonvar.ru/?mod=login", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6",
                    "cache-control": "no-cache",
                    "content-type": "application/x-www-form-urlencoded",
                    "pragma": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "cookie": mykey
                },
                "referrer": "http://seasonvar.ru/",
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": "login=ruslan.novikov%40gmail.com&password=5124315",
                "method": "POST",
                "mode": "cors"
            }).then(
                // resolve
                function (responseNoError) {
                    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                    console.log(responseNoError.headers);


                    let mykey = parseCookies(responseNoError);
                    //console.log('response 001', e); // JSON response
                    console.log('КУКИ2:', mykey); // JSON response

                    //для передачи ответа = положительного резульатат - возващаем PROMISE / RESOLVE / API KEY
                    return new Promise((resolve, reject) => {
                        console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
                        resolve(mykey);
                    });
                }
            )
        },
        // // reject
        // function (errorResponse) {
        //     console.log("Вышли из Promise 1-002 - по REJECT НЕТ КЛЮЧА !!!!!!!!!!!!!!!");
        //     console.log(errorResponse);
        //     return new Promise((resolve, reject) => {
        //         reject("НЕТ КЛЮЧА");
        //     });
        //
        // }
    )

    .then(
        // resolve
        function (responseNoError) {
            console.log("Вышли из Promise 1-001 - по RESOLVE есть первый ответ");
            let mykey = parseCookies(responseNoError);
            //console.log('response 001', e); // JSON response
            console.log('КУКИ:', mykey); // JSON response

            //для передачи ответа = положительного резульатат - возващаем PROMISE / RESOLVE / API KEY
            return new Promise((resolve, reject) => {
                console.log("Выходим из Promise 1-002 - по RESOLVE");
                resolve(mykey);
            });
        },
        //reject
        function (errorResponse) {
            console.log("Вышли из Promise 1-001 - по REJECT НЕТ КУКИЫ ????????????????????");
            return new Promise((resolve, reject) => {
                //для передачи ответа = ОТРИЦАТЕЛЬНОГО резульатат - возващаем PROMISE / REJECT / сообщение
                reject("1 Не могу прочитать ключ - логин пароль не правильный");
            });

        })


    .then(
        // resolve
        function (mykey) {
            console.log("Вышли из Promise 1-002 - по RESOLVE ЕСТЬ КЛЮЧ");


            return fetch("http://seasonvar.ru/profile/1990249", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "cookie": mykey
                },
                "referrer": "http://seasonvar.ru/",
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": null,
                "method": "GET",
                "mode": "cors"
            });
        },
        // reject
        function (errorResponse) {
            console.log("Вышли из Promise 1-002 - по REJECT НЕТ КЛЮЧА ???????????????????????");
            console.log(errorResponse);
            return new Promise((resolve, reject) => {
                reject("НЕТ КЛЮЧА");
            });

        }
    )


    .then(function (response) {
        return response.text();
    })
    .then(function (json) {
        console.log(json);
    });


function parseCookies(response) {
    const raw = response.headers.raw()['set-cookie'];
    return raw.map((entry) => {
        const parts = entry.split(';');
        const cookiePart = parts[0];
        return cookiePart;
    }).join(';');
}

