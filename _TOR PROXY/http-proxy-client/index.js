//npm i node-fetch https-proxy-agent
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');






    fetch('https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables={"id":"187083663","first":50,"after":""}', {

                                                                                                                                                                                   	
	//https://stackoverflow.com/questions/40047774/repeat-a-promise-until-its-not-rejected-or-reach-a-timeout КАК ПОВТОРИТЬ ПРОМИС
        "agent": new HttpsProxyAgent('http://83.149.70.159:13010'),

        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-csrftoken": "RLr6NSuuN0DM4jzfvqewAlo13d0vI2SU",
            "x-ig-app-id": "936619743392459",
            "x-ig-www-claim": "hmac.AR0-3g25kU_lcm3i3D7pb8RBW8fEYK5pbHZUBapYOTyRy3UL",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "ig_did=63D41D5D-2CA4-4968-9458-7D344564C747; mid=XyRa9wALAAFXpuKij8GSog0z9gZ-; fbm_124024574287414=base_domain=.instagram.com; ig_cb=1; rur=FTW; fbsr_124024574287414=u9RRO2M3If5D3jswnc1tVmdi7O0El4BY__iJKOhS_Tk.eyJ1c2VyX2lkIjoiMTAwMDAxNDA5Mjc3MDM1IiwiY29kZSI6IkFRQTB2YTRpRzBKR2VXWmRsdXF1NmxzbFJkamdsOUw4VC1EaW03RjZCQjdQSzd1bG1ZZWRHQVllQVBjdlE3YzVaRXd0cHhNd0xkc3RVZU1Zc2otWjFnTkNVTnRnN2RMTGFjd2FIclhrSDdzRjZ1b0MxR1NmYzJZTS1xamhBVndBdWp1M2lxWG5TRmU1NzktTkdpVFBQUTlUbjVHVEZGZDhvQzJ4eENRbjJsU1ZPZUxVczYzaVUwdUxIUDB0bmEwTktvT1RBUEZQZ2dFWFVMcVY4WS1zNGszcXRNakZqUkt1ME9IbFFIZnhkM3dEUGFQcXFZR1c4QklHbHJWY0IwR3hBaWhVYkRQbGZPcklldFhhZmwxdEhJSlBGLXhuamdGX0l5d2ZfUFdnNjZJM1pBa3JrTzBSR3ROZWljOW1aSFhtRG1jRUdOYTFmemNyY0xEVlhYWHVMRkV2Iiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUx4dEo4VkhRcGhHR1c2QkMwZlVrUEQza0Zub2l3eUtuZUNmNmk4akpMQnpKWGd3TEg5WkFIczQ4Zk1Kb3ZtQzhzejNhRkk3am5OalpCZFh5dGVPRHlwWkNxMTdpVVpCWkM2SHRoeE9vbVlscVNmeWVYdDVMaTRaQ1A1M3puR0NEamlZNTVYeVlnaEpSWkF4NTQ0SHh2WkJiZDhyejdIUHdyYjN2aXI0b0NyQyIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNTk4Mjg3MTA0fQ; csrftoken=RLr6NSuuN0DM4jzfvqewAlo13d0vI2SU; ds_user_id=40426039247; sessionid=40426039247%3AIk82AZTqdkCJhQ%3A23; urlgen=\"{\\\"176.9.151.51\\\": 24940\\054 \\\"46.219.57.140\\\": 31148\\054 \\\"31.43.15.40\\\": 50004\\054 \\\"46.219.78.155\\\": 31148}:1kAUf0:mq8eXnuqXlw8eg1F7PgVE8U_W_Q\""
        },
        "referrer": "https://www.instagram.com/dccomics/followers/?hl=ru",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors"
    })

        .then((response) => response.text())

        .then(text => {
                // если заблокировали - проверим
            console.log(text);
        });