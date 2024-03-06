let nd = document.createElement("div")
nd.innerHTML = "Hello World!"
document.body.appendChild(nd);

const oauthInfo = {
    ClientID: "dbcd04607ec374d71003",
    ClientSecrets: "c8e390989992649624fa42640350ea8c0f0b40f0",
    Url: "http://Wu-Yijun.github.io/test/testGitLogin/main.html",
};

nd.onclick = () => {
    let code = null;
    let loggedin = false;
    try {
        code = new URLSearchParams(location.search).get("code");
        if(code)
            loggedin = true;
    } catch {
        nd.innerHTML = "Not Logged in!";
    }
    if (loggedin) {
        nd.innerHTML = " code = " + code;
    } else {
        location.href = `https://github.com/login/oauth/authorize?client_id=${oauthInfo.ClientID}&redirect_uri=${oauthInfo.Url}`
    }
}