

const form =document.getElementById("form");
// form.onsubmit = function(event) {
//     event.preventDefault();
// const fullname = document.getElementById("fullname");
// const address = document.getElementById("address");
// const accountNo = document.getElementById("accounno");
// const typeofaccount = document.getElementById("typeofaccount");

//     alert(`
//     FullName: ${fullname.value});
//     Address: ${address.value};
//     AccountNo = ${accountNo.value};
//     Type Of Account = ${typeofaccount.value};
//     `)

// }
// form.addEventListener(submit,
    form.onsubmit = (event) => {
    event.preventDefault();
const fullname = document.getElementById("fullname");
const address = document.getElementById("txtarea");
const accountNo = document.getElementById("accountno");
const typeofaccount = document.getElementById("typeofaccount");

const output = 
    `FullName: ${fullname.value});
    Address: ${address.value};
    AccountNo = ${accountNo.value};
    Type Of Account = ${typeofaccount.value};
    `;
    alert(output);


}


