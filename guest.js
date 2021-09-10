let reg_firstname = /^[a-zA-Z]{1,30}$/;
let reg_lastname = /^[a-zA-Z]{1,30}$/;
let reg_age = /\d+/;
let reg_phonenum = /^[0][689]\d{8}$/;
let reg_email = /^([a-zA-Z.-_]+)@(\w+)(\.[a-zA-Z.]+)$/;
let reg_id = /^\d+$/;



var guest = []
guest.push({id: 1,firstname: "Yuji", lastname: "Itadori", age: 20, phone_number: "0622545556", email: "yuujisan555@gmail.com"});
guest.push({id: 2,firstname: "Megumi", lastname: "Fushiguro", age: 20, phone_number: "0882696125", email: "fushimegumi@gmail.com"});
guest.push({id: 3,firstname: "Toge", lastname: "Inumagi", age: 23, phone_number: "0848150032", email: "inumagishake@gmail.com"});
guest.push({id: 4,firstname: "Kento", lastname: "Nanami", age: 31, phone_number: "0931805259", email: "nanami_kento@gmail.com"});
guest.push({id: 5,firstname: "Gojo", lastname: "Satoru", age: 32, phone_number: "0989999999", email: "gojosixeyes@hotmail.com"});

console.table(guest);


let id = 5;

addGuest = (firstname, lastname, age, phone_number, email) => {
    
    if ((reg_firstname.test(firstname) && reg_lastname.test(lastname) && reg_age.test(age) && reg_phonenum.test(phone_number) && reg_email.test(email)) == true) {
        if (age >= 20) {
            id++;
            guest.push({id: id,firstname: firstname, lastname: lastname, age: age, phone_number: phone_number, email: email})
            return guest;
        } else {
            throw "ขออภัย!อายุต่ำกว่า20ปีไม่สามารถจองได้";
        }
    } else {
        throw "กรอกข้อมูลผิดพลาด กรุณาลองใหม่อีกครั้ง"
    }
    
}


showGuest = () => {
    console.table(guest);
}

module.exports = {
    addGuest: addGuest,
    showGuest: showGuest,
    guest: guest
}