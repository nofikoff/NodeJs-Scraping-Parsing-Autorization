const axios = require('axios');
const fs = require("fs");
const FormData = require('form-data');

let firstname = encodeURIComponent('Руслан');
let lastname = encodeURIComponent('Новиков');
let url = 'https://is.fssp.gov.ru/ajax_search?callback=test&system=ip&is%5Bextended%5D=1&nocache=1&is%5Bvariant%5D=1&is%5Bregion_id%5D%5B0%5D=-1&is%5Blast_name%5D=' + lastname + '&is%5Bfirst_name%5D=' + firstname + '&is%5Bdrtr_name%5D=&is%5Bip_number%5D=&is%5Bpatronymic%5D=&is%5Bdate%5D=&is%5Baddress%5D=&is%5Bid_number%5D=&is%5Bid_type%5D%5B0%5D=&is%5Bid_issuer%5D=';
let code = ''
let connectSid = '';

// НУЛДЕВОЙ ЗАПРОС ДЛЯ ПОЛУЧЕНИ КУКИЕС
// НУЛДЕВОЙ ЗАПРОС ДЛЯ ПОЛУЧЕНИ КУКИЕС
// НУЛДЕВОЙ ЗАПРОС ДЛЯ ПОЛУЧЕНИ КУКИЕС
// НУЛДЕВОЙ ЗАПРОС ДЛЯ ПОЛУЧЕНИ КУКИЕС
axios.get(url,
    {
        headers: {
            'pragma': 'no-cache',
            'cache-control': 'no-cache',
            'accept': '*/*',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            // ВАЖНО !!!
            'referer': url,
            'accept-language': 'en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6',
            //'cookie': 'PHPSESSID=psb0hg31nq2ceekba3cunsm847'
        }
    }
)

    .then((content) => {
        /**
         * ловим живую КУКУ connectSid
         * ловим живую КУКУ connectSid
         * ловим живую КУКУ connectSid
         * ловим живую КУКУ connectSid
         * ловим живую КУКУ connectSid
         * ловим живую КУКУ connectSid
         */
        console.log('ловим живую connectSid');
        connectSid = parseCookiesPHPSessionValue(content.headers['set-cookie']);
    })


    //ДЕЛАЕМ ЗАПРОС С ЖИВОЙ СЕССИЕЙ connectSid, ПОЛУЧАЕМ ЖИВУЮ КАПТЧУ
    //ДЕЛАЕМ ЗАПРОС С ЖИВОЙ СЕССИЕЙ connectSid, ПОЛУЧАЕМ ЖИВУЮ КАПТЧУ
    //ДЕЛАЕМ ЗАПРОС С ЖИВОЙ СЕССИЕЙ connectSid, ПОЛУЧАЕМ ЖИВУЮ КАПТЧУ
    .then(
        () => axios.get(url,
            {
                headers: {
                    'pragma': 'no-cache',
                    'cache-control': 'no-cache',
                    'accept': '*/*',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'referer': url,
                    'accept-language': 'en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6',
                    'cookie': 'connect.sid=' + connectSid
                }
            }
        )
    )


    // ПАРСИМ КАПТЧУ СТАВИМ В ОЧЕРЕДЬ НА РАСПОЗНВАНИЕ
    // ПАРСИМ КАПТЧУ СТАВИМ В ОЧЕРЕДЬ НА РАСПОЗНВАНИЕ
    // ПАРСИМ КАПТЧУ СТАВИМ В ОЧЕРЕДЬ НА РАСПОЗНВАНИЕ
    // ПАРСИМ КАПТЧУ СТАВИМ В ОЧЕРЕДЬ НА РАСПОЗНВАНИЕ
    // ПАРСИМ КАПТЧУ СТАВИМ В ОЧЕРЕДЬ НА РАСПОЗНВАНИЕ
    // ПАРСИМ КАПТЧУ СТАВИМ В ОЧЕРЕДЬ НА РАСПОЗНВАНИЕ
    .then(
        function (content) {

            let myRegexp = /image\/jpeg;base64,([^"]+)\\"/g;
            let match = myRegexp.exec(content.data);
            let image = match[1];
            //console.log(image)

            // фиксируем в фале
            let bitmap = Buffer.from(image, 'base64');
            fs.writeFileSync("1.png", bitmap);

            // спрашиваем ответ у пользователя из командной строки
            let formData = new FormData();
            formData.append('key', 'ad535d494b8d8e358925112dc4bdf7ed');
            formData.append('method', 'base64');
            formData.append('body', image);
            formData.append('language', '1');
            formData.append('json', '1');

            return code = axios.post('https://rucaptcha.com/in.php',
                formData,
                {
                    //     headers: {'Content-Type': 'multipart/form-data'}
                    headers: formData.getHeaders()
                }
            )

        })

    // отправили каптчу ждем очередь ЖДЕМ
    // отправили каптчу ждем очередь ЖДЕМ
    // отправили каптчу ждем очередь ЖДЕМ
    // отправили каптчу ждем очередь ЖДЕМ
    // отправили каптчу ждем очередь ЖДЕМ

    .then((id) => new Promise(resolve => setTimeout(() => {
        console.log("ЖДЕМ ЖДЕМ ЖДЕМ")
        resolve(id)
    }, 8000)))

    // ПОЛУЧИЛИ ОТВЕТ ПО КАПЧЕ
    // ПОЛУЧИЛИ ОТВЕТ ПО КАПЧЕ
    // ПОЛУЧИЛИ ОТВЕТ ПО КАПЧЕ
    // ПОЛУЧИЛИ ОТВЕТ ПО КАПЧЕ
    // ПОЛУЧИЛИ ОТВЕТ ПО КАПЧЕ
    // ПОЛУЧИЛИ ОТВЕТ ПО КАПЧЕ
    // ПОЛУЧИЛИ ОТВЕТ ПО КАПЧЕ
    .then((code) => {
        console.log("ОТЧЕТ каптчи ", code.data)
        return axios.get(
            'https://rucaptcha.com/res.php?key=ad535d494b8d8e358925112dc4bdf7ed&id=' + code.data.request + '&json=1&action=get'
        )
    })

    .then(
        (code) => {

            console.log("ОТВЕТ ", code.data.request, encodeURIComponent(code.data.request));
            //
            let lastUrl = url + '&code=' + encodeURIComponent(code.data.request);
            console.log("ЛОВИМ УДАЧУ", lastUrl);

//ОСНОВНОЕ МЯСО
//ОСНОВНОЕ МЯСО
//ОСНОВНОЕ МЯСО
//ОСНОВНОЕ МЯСО
//ОСНОВНОЕ МЯСО
            return axios.get(lastUrl,
                {
                    headers: {
                        'pragma': 'no-cache',
                        'cache-control': 'no-cache',
                        'accept': '*/*',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
                        'x-requested-with': 'XMLHttpRequest',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-dest': 'empty',
                        // ВАЖНО !!!
                        'referer': url,
                        'accept-language': 'en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6',
                        'cookie': 'connect.sid=' + connectSid
                    }
                }
            )

        })


    .then((content) => {
        console.log(content.data);
    })


function parseCookiesPHPSessionValue(response) {

    let result;
    response.forEach((entry) => {
        let parts001 = entry.split(';');
        let parts002 = parts001[0].split('=');
        if (parts002[0] === 'connect.sid') {
            result = parts002[1];
        }
    });
    return result;
}



