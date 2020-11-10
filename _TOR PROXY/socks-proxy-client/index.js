"use strict";
//npm i node-fetch https-proxy-agent
const fetch = require('node-fetch');
const SocksProxyAgent = require('socks-proxy-agent');


//https://stackoverflow.com/questions/40047774/repeat-a-promise-until-its-not-rejected-or-reach-a-timeout КАК ПОВТОРИТЬ ПРОМИС


class Insta {

    //params : {
    // headers: "",
    // id_source: "",
    // nickname_source: "",
    // page: ""
    // }
    constructor(i) {
        this.i = i;
        this.tiktok();
    }

    tiktok() {

        fetch("https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=%7B%22id%22%3A%22787132%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Afalse%2C%22first%22%3A12%2C%22after%22%3A%22QVFDdVdYM1RFM3NRTzdickt5b25RVXFSa2FmUXhWN2NBSlFuYUE3SGV4c3hiT1R5d2llZFRteVJoc1N4YzJoRGZUelhBdGpsMUpnU3p3LUFUWVZySFlQMQ%3D%3D%22%7D", {
            "agent": new SocksProxyAgent('socks://localhost:9050'),
            "headers": {
                "accept": "*/*",
                "accept-language": "en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-csrftoken": "OuLdtdlSc7MojCcxG3g6V3wPe5pCq2ob",
                "x-ig-app-id": "936619743392459",
                "x-ig-www-claim": "hmac.AR3RpwreaLkYJ5UekW9S-HBh1kmrMCPRWAw0nxQMagREBL3o",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "ig_did=2BFA01FE-878E-444B-A158-3FAFBFB0F92F; mid=Xu5KqwAAAAFqoNa_jBy-TfstLP9Q; fbm_124024574287414=base_domain=.instagram.com; ig_cb=1; shbid=7029; datr=1FI9X39J78HEAx-YijjcnV3b; shbts=1598287760.8923707; rur=ATN; fbsr_124024574287414=M4kduh53vZHqPKbDEpnXGcUDD6eo_H1zj5uibcWiYTI.eyJ1c2VyX2lkIjoiMTAwMDAxNDA5Mjc3MDM1IiwiY29kZSI6IkFRQmFiN245QWg5S3RNNEViRWF5VjloanlneHQ2NzJFd1NCazhwVHk4ZFc1aFl5THhhaEh6cFlLbm1rUzl3Y2NUUXZoRVVYbFFjSmIzWHIxMl9MaE9zbEhwckw5ajhkY0VaSmdnRzhqT0dlcEFHS0FCeGNtYVNTZWZnSnhfZFBLRVVyb1pJNk15MU01WTVnU18teENmbVFRX1h3UUozWHRfbXdLbnhvc1poMmFfNFhfbnpYNjg3eElLckxmYkRuenZoWm5SZTBJZE9ZV1MxanVNT0ltb28ybWNiTzVHTmUwLVRIcF9MQ3p0X3pYdS0xdXd3dURnRG5KVlBKLXMxMGdKeEdjMksxTTJ3TjN5VFVBR2tPMkRPQjdwV2RCa3ZlaFVRQVVPQllKNkdEUnFydjAwaHVCb2gxVTBxcGdNbEtTUktJIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQVAwQmo3ZWFoRDRqMGZNVTJjSE5mSWNzWUVjb0VTRlk2TTVoWkFvcFU5VHhVM0lqVGN0RkFOWkMzNUY2OVZndkl0U085b05ORUo4elFQemhTYzlLSjlXMUdocnozdXRYeTZmOGRBbHFaQlFZM2JodUtWTURsMDR2UUQzUjliT0VZd2M0dERNQVVocm52bGhvWkNPWkJpalpBaHZ5UHV0ek1YY3BJQmJOeVMiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTU5ODQ0NTkxMX0; csrftoken=OuLdtdlSc7MojCcxG3g6V3wPe5pCq2ob; ds_user_id=40887464688; sessionid=40887464688%3ASjkbRn9knMMg6Y%3A9; urlgen=\"{\\\"46.219.78.155\\\": 31148\\054 \\\"176.9.151.51\\\": 24940\\054 \\\"46.219.57.140\\\": 31148\\054 \\\"31.43.15.40\\\": 50004}:1kAuxp:NA3_jZs5oT7YIqGZB7IVuLKYKks\""
            },
            "referrer": "https://www.instagram.com/natgeo/followers/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors"
        })

            .then((response) => response.text())

            // ОСНОВЕ МЯСО
            .then(text => {

                // если заблокировали - проверим
                console.log(JSON.parse(text));


                return new Promise(function (resolve, reject) {

                    // connection.query(query_str, query_var, function (err, rows, fields) {
                    //   // Call reject on error states,
                    //   // call resolve with results
                    //   if (err) {
                    //     return reject(err);
                    //   }
                    //   resolve(rows);
                    // });

                    setTimeout(function () {
                        resolve("СОХРАНИЛИ В БД ");
                    }, 500);


                });


            })

            //ВЫХОД принудительно
            .then((message) => {

                console.log(message + " " + this.i);
                console.log("ПРИНУДИТЕЛЬНО ЗАКРЫВАЕМ! " + this.i);

            });
    }

}


for (let i = 0; i < 3; i++) {
    console.log(i);
    new Insta(i);
}
