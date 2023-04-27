
//dùng hàm check
// let newuser1 = [];
//
// function dangKyTK() {
//     let usernameDK = document.getElementById("username").value;
//     let psw1 = document.getElementById("psw").value;
//     let psw2 = document.getElementById("psw-repeat").value;
//     let users1 = JSON.parse(localStorage.getItem("users"));
//     if (users1 == null) {
//         users1 = []
//     }
//     if (usernameDK === '' || psw1 === '' || psw2 === '' || psw1 != psw2) {
//         alert("cần nhập đủ thông tin");
//         // còn phần check điều kiện 2 tk ko đc giống nhau khi tạo
//     } else if (!checkUserName(usernameDK, newuser1)) {
//         alert("Tài khoản dã tồn  tại");
//     } else {
//         let newUser = [usernameDK, psw1];
//         users1.push(newUser);
//         newuser1.push(newUser);
//         localStorage.setItem("users", JSON.stringify(users1));
//         alert("đăng ký thành công");
//         window.location.href = 'dangnhap.html';
//     }
// };
//
// function checkUserName() {
//     for (let i = 0; i < user1.length; i++) {
//         if (user1[i][0] === usernameDK) {
//             return false;
//         }
//         return true;
//     }
// };



function dangKyTK() {
    let usernameDK = document.getElementById("username").value;
    let psw1 = document.getElementById("psw").value;
    let psw2 = document.getElementById("psw-repeat").value;
    let users1 = JSON.parse(localStorage.getItem("users"));
    if (users1 == null) {
        users1 = []
    }

    let newuser1 = users1.slice();
    console.log(newuser1)
    if (usernameDK === '' || psw1 === '' || psw2 === '' || psw1 != psw2) {
        alert("cần nhập đủ thông tin");
    } else if (newuser1.some(tenDn => tenDn[0] === usernameDK)) {
        alert("Tài khoản đã tồn tại");
    } else {
        let newUser = [usernameDK, psw1];
        newuser1.push(newUser);
        localStorage.setItem("users", JSON.stringify(newuser1)); // lưu trữ newuser1 vào localStorage
        alert("đăng ký thành công");
    }

};

function quayLaiDN() {
    window.location.href="dangnhap.html";
}


















// gắn cờ

// let checkTK = false;
// for (let i = 0; i < users1.length; i++) {
//     if (users1[i][0] === usernameDK) {
//         checkTK = true;
//         break;
//     }
// }
//
// if (usernameDK === '' || psw1 === '' || psw2 === '' || psw1 != psw2) {
//     alert("cần nhập đủ thông tin");
// } else if (checkTK) {
//     alert("Tài khoản đã tồn tại");
// } else {
//     let newUser = [usernameDK, psw1];
//     users1.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users1)); // lưu trữ newuser1 vào localStorage
//     alert("đăng ký thành công");
//     window.location.href="dangnhap.html";
// }
