let nd = document.createElement("div")
nd.innerHTML = "Hello World!"
document.body.appendChild(nd);



const oauthInfo = {
    ClientID: "dbcd04607ec374d71003",
    ClientSecret: "10d91bdc6fc31ebccc2cf4a9a8f64365e78e24eb",
    Url: "http://wu-yijun.github.io/testGitLogin/main.html",
    Scope: "public_repo",
};

nd.onclick = () => {
    let code = null;
    let loggedin = false;
    try {
        code = new URLSearchParams(location.search).get("code");
        if (code)
            loggedin = true;
    } catch {
        nd.innerHTML = "Not Logged in!";
    }
    if (loggedin) {
        nd.innerHTML = " code = " + code;

        let params = JSON.stringify({
            client_id: oauthInfo.ClientID,
            client_secret: oauthInfo.ClientSecret,
            code: code
        });
        console.log(params);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://github.com/login/oauth/access_token");
        // 第三步： 设置Content-Type属性 （这一步是固定的写法）
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Conten-Type', 'application/json;charset=UTF-8');
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // 第五步：监听onreadystatechange事件
        xhr.onreadystatechange = function () {
            console.log(xhr);
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText)
            }
        }
        // 第四步： 调用send（）函数，同时将数据以查询字符串的形式，提交给服务器
        // xhr.send(`client_id=${oauthInfo.ClientID}&client_secret=${oauthInfo.ClientSecret}&code=${code}`);
        // xhr.send(null);
        xhr.send(params);
    } else {
        location.href = `https://github.com/login/oauth/authorize?client_id=${oauthInfo.ClientID}&redirect_uri=${oauthInfo.Url}&scope=${oauthInfo.scope}`
    }
}

