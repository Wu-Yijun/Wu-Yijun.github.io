import myFloatingNotify from "/include/MyFloatingNotify.js"

const oauthInfo = {
    ClientID: "dbcd04607ec374d71003",
    ClientSecret: "10d91bdc6fc31ebccc2cf4a9a8f64365e78e24eb",
    Url: "http://wu-yijun.github.io/testGitLogin/main.html",
    // Url: "http://localhost:5500/testGitLogin/main.html",
    Scope: "public_repo",
};

window.onload = () => {
    let access_token = localStorage.getItem("access_token");
    if (access_token) {
        getInfo(access_token);
        return;
    }
    let code = null;
    let loggedin = false;
    try {
        code = new URLSearchParams(location.search).get("code");
        if (code)
            loggedin = true;
    } catch (e) {
        console.log("Error: ", e);
    }
    if (loggedin) {
        myFloatingNotify(" code = " + code);
        getAuthorization(code);
    } else {
        enableLogin();
    }
}

function enableLogin() {
    let nd = document.createElement("div")
    nd.innerHTML = "Click to login to Github!"
    document.body.appendChild(nd);
    nd.onclick = () => {
        location.href = `https://github.com/login/oauth/authorize?client_id=${oauthInfo.ClientID}&redirect_uri=${oauthInfo.Url}&scope=${oauthInfo.Scope}`
    }
    myFloatingNotify("You can login to github");
}

function getAuthorization(code) {
    var xhr = new XMLHttpRequest();
    const url = "https://cors-anywhere.herokuapp.com/" +
        "https://github.com/login/oauth/access_token?" +
        `client_id=${oauthInfo.ClientID}&` +
        `client_secret=${oauthInfo.ClientSecret}&` +
        `code=${code}`;
    xhr.open("POST", url);
    // 第三步： 设置Content-Type属性 （这一步是固定的写法）
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Conten-Type', 'application/json');
    xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:5500");
    // 第五步：监听onreadystatechange事件
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const info = JSON.parse(xhr.responseText);
            if (info.token_type == "bearer") {
                myFloatingNotify("access_token = " + info.access_token);
                localStorage.setItem("access_token", info.access_token);
                location.href = oauthInfo.Url;
            }
        }
    }
    xhr.send();
}

function getInfo(access_token, retried = 3) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.github.com/user", true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.setRequestHeader("Authorization", "token " + access_token);
    xmlHttp.send();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            let returnData = null;
            let failed = (xmlHttp.status != 200);
            try {
                returnData = xmlHttp.responseText;
                returnData = JSON.parse(xmlHttp.responseText);
            } catch (e) {
                console.log(e);
                failed = true;
            }
            console.log(returnData);
            if (failed) {
                if (retried > 0) {
                    myFloatingNotify("Retrying Authorization... " + retried);
                    getInfo(access_token, retried - 1);
                } else {
                    myFloatingNotify("Authorization Invalid! Need to login again!");
                    localStorage.removeItem("access_token");
                    location.reload();
                }
                return;
            } else {
                myFloatingNotify("Successfully get info!");
            }
        }
    }
}