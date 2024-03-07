import { Octokit } from "https://esm.sh/octokit";
import { createOAuthUserAuth } from "https://esm.sh/@octokit/auth-oauth-user";
import myFloatingNotify from "/include/MyFloatingNotify.js"

const oauthInfo = {
    Scope: "public_repo",
    /** Release */
    // ClientID: "dbcd04607ec374d71003",
    // ClientSecret: "10d91bdc6fc31ebccc2cf4a9a8f64365e78e24eb",
    // Url: "https://wu-yijun.github.io/testGitLogin/main.html",
    /** Debug */
    ClientID: "16fbb434c9ac82d2bb67",
    ClientSecret: "37b893febb019776f791e3db171b9fcf6d0e9fcc",
    Url: "http://localhost:5500/testGitLogin/main.html",
};

function getAuthorization(code) {
    const auth = createOAuthUserAuth({
        clientId: oauthInfo.clientId,
        clientSecret: oauthInfo.clientSecret,
        code: code,
        // optional
        // state: "state123",
        // redirectUrl: "https://acme-inc.com/login",
    });

    // Exchanges the code for the user access token authentication on first call
    // and caches the authentication for successive calls
    auth().then((token) => {
        console.log(token);
        localStorage.setItem("access_token", token);
        location.href = oauthInfo.Url;
    });
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

window.onload = () => {
    // let access_token = localStorage.getItem("access_token");
    // if (access_token) {
    //     getInfo(access_token);
    //     return;
    // }
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
