"use strict";
let btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", () => {

    fetch("https://msapi.itstep.org/api/v2/auth/login", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "authorization": "Bearer null",
                "content-type": "application/json",
            },
            "body": "{\"application_key\":\"6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6\",\"id_city\":null,\"password\":\"1Mn87Wu4\",\"username\":\"Dubo_qv12\"}",
            "method": "POST",
            "mode": "cors"
        })
        .then((data) => {
            console.log(data);
            return data.json()
        })
        .then((prom) => {
            console.log(prom.access_token)
            return prom.access_token
        })
        .then((token) => {
            console.log(token)
            fetch("https://msapi.itstep.org/api/v2/settings/user-info", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "authorization": `Bearer ${token}`,
                    
                },
                "body": null,
                "method": "GET",
            }).then((info)=>{
                return info.json()
            })
            .then((obj)=>{
                console.log(obj.gaming_points[0].points)
                obj.gaming_points[0].points;
                let kristal = document.querySelector('#kristal');
                kristal.innerText = obj.gaming_points[0].points;

            })
        })

})