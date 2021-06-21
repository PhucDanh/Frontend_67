document.querySelector("#btnHienThi").onclick = function() {
    // Lấy thông tin người dùng nhập vào
    let arrInput = document.querySelectorAll("form input, form select");
    let hocVien = {maHocVien:"123", hoTen:"abc"};
    for(let element of arrInput) {
        let {value,id,name} = element;
        hocVien = {...hocVien,[name]:value};
    }
    // console.log(hocVien);

    // Duyệt các tên thuộc tính và giá trị thuộc tính object
    let contentTable = "<tr>";
    for(let tenThuocTinh in hocVien) {
        contentTable += `
            <td>${hocVien[tenThuocTinh]}</td> 
        `;
        // console.log(contentTable);
    }
    contentTable += "</tr>";
    document.querySelector("#tblHocVien").innerHTML = contentTable;
}