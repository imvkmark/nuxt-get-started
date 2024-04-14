export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('request', (event) => {
        console.log(event.path);
        console.log(event.headers.get('user-agent'));
        if (event.path === '/') {
            return send(event, {
                status: 200,
                body: `<!DOCTYPE html>
    <html lang="zh">
    <head>
    <meta http-equiv="refresh" content="2;https://www.baidu.com/" />
       <title>跳转到手机端</title>
    </head>
    <body></body>
    </html>`
            });
        }
    })
})