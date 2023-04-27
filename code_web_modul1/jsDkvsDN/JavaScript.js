

function findProductById() {

    // Hiển thị dữ liệu sản phẩm trong bảng HTML
    let tbody = document.getElementById("nd")
    // let idsp = document.getElementById("productId").value;
    let  sp = localStorage.getItem('arrayPoduct');
    sp = JSON.parse(sp)
    console.log(sp)
     let newarr='';
    for (let i = 1; i < sp.length; i++) {
        console.log(sp[i])
            newarr +=
                "<tr>"+
                    "<td>" + sp[i][0] + "</td>"+
                    "<td>" + sp[i][1] + "</td>"+
                    "<td>" + sp[i][2] + "</td>"+
                    "<td> <img src=' " + sp[i][3]+ "'width='300' height='300'></td>"+
                    "<td>" + sp[i][4] + "</td>"+
                "</tr>";
    }
document.getElementById("nd").innerHTML= newarr;
}
