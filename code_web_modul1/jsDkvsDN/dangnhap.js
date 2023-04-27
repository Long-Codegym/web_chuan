
// let userNameDK = localStorage.getItem("username");
// let passwordDK = localStorage.getItem("password");
// // userNameDK = JSON.parse(userNameDK);
// // passwordDK = JSON.parse(passwordDK);


//lấy dữu liệu localStorage từ đăng ký

// for (let i = 0; i < users.length; i++) {
//     let userNameDK = users[i].usernameDK;
//     let passwordDK = users[i].psw1;
// }


function dangNhap() {
    let userNameDN = document.getElementById("nameDN").value;
    let passwordDn = document.getElementById("passwordDN").value;
    let users1 = JSON.parse(localStorage.getItem("users"));
    let check=false;
    let userDK;
    let passwordDK;
    for (let i = 0; i < users1.length; i++) {
        if (userNameDN == users1[i][0] && passwordDn == users1[i][1]) {
            check= true;
            break;
        }
    } if (userNameDN === "" || passwordDn === "") {
        alert("bạn chưa nhập tài khoản hoặc mật khẩu")
    } else if (check) {
        window.location.href = "Case_web_ban_xe.html";
    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }
    // }if (check){
    //     window.location.href = "Case_web_ban_xe.html";
    // } else {
    //     alert("Tài khoản hoặc mật khẩu không chính xác");
    // }

}

function dangKy() {
    window.location.href="dangky.html"
}











//     if (userNameDN==userDK){
//         if (passwordDn==passwordDK){
//             window.location.href = "Case_web_ban_xe.html";
//         }else {
//             alert("Tài khoản hoặc mật khẩu không chính xác");
//         }
//     }else {
//         alert("Tài khoản hoặc mật khẩu không chính xác")
// }
// }



// userDK = users1[i][0];
// passwordDK = users1[i][1];


    // for (let i = 0; i < users.length; i++) {
    //     let userNameDK = users[i].usernameDK;
    //     let passwordDK = users[i].psw1;
    // }
    // if (userNameDN===userNameDK){
    //     if (passwordDn===passwordDK){
    //         window.location.href = "Case_web_ban_xe.html";
    //     }else {
    //         alert("Tài khoản hoặc mật khẩu không chính xác");
    //     }
    // }else {
    //     alert("Tài khoản hoặc mật khẩu không chính xác")
    // }

