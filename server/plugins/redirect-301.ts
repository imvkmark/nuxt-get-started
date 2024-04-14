export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('request', (event) => {
        if (event.path === '/redirect-to-baidu') {
            return send(event, `<!DOCTYPE html>
    <html lang="zh">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="3;https://www.baidu.com/" />
       <title>跳转到百度</title>
    </head>
    <body>
    当前路径 : ${event.path} <br>
    当前UA : ${event.headers.get('user-agent')} <br>
    使用 http-equiv 在 3 秒后跳转到 <a href="https://baidu.com"> 百度 </a>
    </body>
    </html>`);
        }
    })
})