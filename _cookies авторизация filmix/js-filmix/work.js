console.log("start");
const fetch = require('node-fetch');
const jsdom = require("jsdom");
const fs = require('fs');



// ЧИТАЕМ КЛЮЧ В КУКИЕСЫ
fetch("https://filmix.co/engine/ajax/user_auth.php", {
    "headers": {
        "accept": "*/*",
        "cache-control": "no-cache",
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
    "mode": "cors"
})

// ПРОЧИТАЛИ ПЕРВЫЕ КУКИ
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
            console.log("Вышли из Promise 1-001 - по REJECT НЕТ КУКИЫ");
            return new Promise((resolve, reject) => {
                //для передачи ответа = ОТРИЦАТЕЛЬНОГО резульатат - возващаем PROMISE / REJECT / сообщение
                reject("1 Не могу прочитать ключ - логин пароль не правильный");
            });

        })


// ОСНОВНОЕ МЯСО ЗАПРОС С ЛОГИНОМ ПАРОЛЕМ
    .then(
        // resolve
        function (mykey) {
            console.log("Вышли из Promise 1-002 - по RESOLVE ЕСТЬ КЛЮЧ");

            return fetch("https://filmix.co/engine/ajax/user_auth.php", {
                "headers": {
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest",
                    "cookie": mykey
                },
                "referrer": "https://filmix.co/",
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": "login_name=nofikoff&login_password=5124315&login_not_save=1&login=submit",
                "method": "POST",
                "mode": "cors"
            })
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

   //ЛОВИМ ОСНОВНОЙ КУКИЕС ПОСЛЕ АВТОРИЗАЦИИ
    .then(
        // resolve
        function (responseNoError) {
            console.log("Вышли из Promise 1-001 - по RESOLVE есть второй ответ");
            let mykey = parseCookies(responseNoError);

         


            //console.log('response 001', e); // JSON response
            console.log('КУКИ2:', mykey); // JSON response

            //для передачи ответа = положительного резульатат - возващаем PROMISE / RESOLVE / API KEY
            return new Promise((resolve, reject) => {
                console.log("Выходим из Promise 1-002 - по RESOLVE");
                resolve(mykey);
            });
        },
        //reject
        function (errorResponse) {
            console.log("Вышли из Promise 1-001 - по REJECT НЕТ КУКИЫ");
            return new Promise((resolve, reject) => {
                //для передачи ответа = ОТРИЦАТЕЛЬНОГО резульатат - возващаем PROMISE / REJECT / сообщение
                reject("1 Не могу прочитать ключ - логин пароль не правильный");
            });

        })


// СТРАНИЦА ПЕРСОАЛЬНОГО КАБИНЕТА
    .then(
        // resolve
        function (mykey) {
            console.log("Вышли из Promise 1-002 - по RESOLVE ЕСТЬ КЛЮЧ");

                return fetch("https://filmix.co/profile/nofikoff", {
                "headers": {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1",
                    "cookie": mykey
                },
                "referrer": "https://filmix.co/",
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": null,
                "method": "GET",
                "mode": "cors"
            });

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


    .then(function (response) {
        // не трогаем, он еще только пытается скачать в несколько присестов
        // НЕ КОНВРЕТИРУЕТ win в utf
        //return response.text();
        // КОНВРЕТИРУЕТ win в utf !!!!
        return response.textConverted();
    })

    .then(function (json) {

        // ПИШЕМ В ФАЛ ДЛЯ ОТЛАДКИ
        fs.writeFile("1.html", json, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved! 1.html");
        });
        //

        // ПЫТАЕМСЯ ПАРСИТЬ string ЧЕРЕЗ DOM

        //       console.log(json);
        // const dom = new jsdom.JSDOM(json);
        // //return dom.window.document.getElementsByClassName("profile-info")[0].innerText;
        // console.log(dom.window.document.getElementsByClassName("profile-info"));
        // console.log(dom.window.document.querySelector(".profile-info"));


        // var DOMParser = require('xmldom').DOMParser;
        // var doc = new DOMParser().parseFromString(json, "text/xml");
        // console.log(doc.getElementsByClassName("profile-info")[0].innerHTML);
        //console.log(doc.getSelection(".profile-info"));



//        let result = json.match(/right-info[ ctyi]*">(.*?)(<\/span>)/g);
        let result = json.match(/<article id="profile"[^>]>(.*?)(<\/article>)/g);

        console.log(result)
    });


function parseCookies(response) {
    const raw = response.headers.raw()['set-cookie'];
    return raw.map((entry) => {
        const parts = entry.split(';');
        const cookiePart = parts[0];
        return cookiePart;
    }).join(';');
}

