import myFloatingNotify from "/include/MyFloatingNotify.js";

const oauthInfo = {
    Owner: "Wu-Yijun",
    Repo: "git-comment",
    Issue: "2",
    CorsUrl: "https://cors-anywhere.azm.workers.dev/",
    // CorsUrl: "https://cors-anywhere.herokuapp.com/",
    Scope: "public_repo",

    /** Release */
    ClientID: "dbcd04607ec374d71003",
    ClientSecret: "10d91bdc6fc31ebccc2cf4a9a8f64365e78e24eb",
    Url: "https://wu-yijun.github.io/testGitLogin/main.html",
    /** Debug */
    // ClientID: "16fbb434c9ac82d2bb67",
    // ClientSecret: "37b893febb019776f791e3db171b9fcf6d0e9fcc",
    // Url: "http://localhost:5500/testGitLogin/main.html",
};

const GithubAuthUrl = "https://github.com/login/oauth/authorize?";
const GithubAccessTokenUrl = "https://github.com/login/oauth/access_token";

function POST(url, header, data, resposeFun) {
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.timeout = 0;
    request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
            return;
        }
        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
        }
        resposeFun(request);
        request = null;
    };
    for (let i in header) {
        request.setRequestHeader(i, header[i]);
    }
    request.send(data);
}

window.onload = () => {
    document.getElementById("SubmitComment").onclick = () => {
        // myFloatingNotify(document.getElementById("CommentArea").value);
        CreateComment(access_token, document.getElementById("CommentArea").value);
        // CreateComment(access_token, "Hello, world! --From Javascript.");
    };
    let access_token = localStorage.getItem("access_token");
    if (access_token && (typeof access_token === "string" || access_token instanceof String) && access_token.length > 0) {
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
};

function enableLogin() {
    let nd = document.createElement("div");
    nd.innerHTML = "Click to login to Github!";
    document.body.appendChild(nd);
    nd.onclick = () => {
        location.href = GithubAuthUrl + `client_id=${oauthInfo.ClientID}&redirect_uri=${oauthInfo.Url}&scope=${oauthInfo.Scope}`;
    };
    myFloatingNotify("You can login to github");
}

function getAuthorization(code) {
    // var request = new XMLHttpRequest();
    const url = oauthInfo.CorsUrl + GithubAccessTokenUrl;
    // request.open("POST", url, true);
    // request.timeout = 0;
    // // 第五步：监听onreadystatechange事件
    // request.onreadystatechange = function handleLoad() {
    //     if (!request || request.readyState !== 4) {
    //         return;
    //     }
    //     // The request errored out and we didn't get a response, this will be
    //     // handled by onerror instead
    //     // With one exception: request that using file: protocol, most browsers
    //     // will return status as 0 even though it's a successful request
    //     if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
    //         return;
    //     }
    function handleLoad(request) {
        const info = JSON.parse(request.responseText);
        if (info.token_type == "bearer") {
            myFloatingNotify("access_token = " + info.access_token);
            localStorage.setItem("access_token", info.access_token);
            location.href = oauthInfo.Url;
            getInfo(info.access_token);
        }
    };
    const header = {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=utf-8",
    };
    const content = JSON.stringify({
        code: code,
        client_id: oauthInfo.ClientID,
        client_secret: oauthInfo.ClientSecret,
    });
    POST(url, header, content, handleLoad);
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
                myFloatingNotify("Successfully get info!", 10 * 1000);
                return;
            }
        }
    };
}


// import { Octokit } from "https://esm.sh/octokit";

function CreateComment(access_token, content) {
    const url = "https://api.github.com/repos/Wu-Yijun/git-comment/issues/2/comments";
    const header = {
        "Accept": "application/vnd.github.v3.full+json",
        "Authorization": "token " + access_token,
        "Content-Type": "application/json;charset=utf-8",
    };
    const data = JSON.stringify({
        body: content,
    });
    POST(url, header, data, (request) => {
        console.log(request);
    });
}