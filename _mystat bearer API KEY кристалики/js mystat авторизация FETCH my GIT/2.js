console.log("start");
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// источник https://stackoverflow.com/a/30265431/1932494
// mystat авторизация
function requestPromise(params) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(params.method, params.url, true);
        xhr.setRequestHeader(params.type, params.value);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.responseType = 'json';
        xhr.send(params.json);
    });
}


requestPromise(
    {
        method: 'POST',
        url: 'https://msapi.itstep.org/api/v2/auth/login',
        json: JSON.stringify(
            {
                "application_key": "6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6",
                "id_city": null,
                "password": "47yNq09O",
                "username": "Hili_ha71"
            }
        ),
        type: "Content-Type",
        value: "application/json;charset=UTF-8"
    }
)


    .then(
        // resolve
        function (responseNoError) {
            console.log("Вышли из Promise 1-001 - по RESOLVE ЕСТЬ КЛЮЧ");
            let mykey = JSON.parse(responseNoError).access_token;
            //console.log('response 001', e); // JSON response
            console.log('API KEY: ', mykey); // JSON response

            //для передачи ответа = положительного резульатат - возващаем PROMISE / RESOLVE / API KEY
            return new Promise((resolve, reject) => {
                console.log("Выходим из Promise 1-002 - по RESOLVE");
                resolve(mykey);
            });
        },
        //reject
        function (errorResponse) {
            console.log("Вышли из Promise 1-001 - по REJECT НЕТ КЛЮЧА");
            return new Promise((resolve, reject) => {
                //для передачи ответа = ОТРИЦАТЕЛЬНОГО резульатат - возващаем PROMISE / REJECT / сообщение
                reject("1 Не могу прочитать ключ - логин пароль не правильный");
            });

        })


    .then(
        // resolve
        function (mykey) {
            console.log("Вышли из Promise 1-002 - по RESOLVE ЕСТЬ КЛЮЧ");

            // ВТОРОЙ ЗАПРОС
            return requestPromise(
                {
                    method: 'GET',
                    url: 'https://msapi.itstep.org/api/v2/settings/user-info',
                    json: '',
                    type: 'Authorization',
                    value: 'Bearer ' + mykey
                }
            )

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
        },
        function (e) {
            console.log("Вышли из Promise 1-003 - по REJECT НЕТ ДАННЫХ");
        });


