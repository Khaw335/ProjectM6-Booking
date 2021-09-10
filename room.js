let reg_id = /^\d+$/;
let reg_number = /^[a-zA-Z]{1}\d{3}$/; 
let reg_type = /\w/;
let reg_price = /^\d+$/;
let reg_viwe = /\w/;
let reg_status= /\w/;
let reg_search = /^[a-zA-Z]+$/

var room = new Array();
    room.push({ room_id : 1, room_number :"001", room_type : "Standard", room_viwe : "ห้องพักวิวสวน",room_price : 990, room_status : "ทำความสะอาดแล้ว"});
    room.push({ room_id : 2, room_number :"101", room_type : "Standard",room_viwe : "ห้องพักวิวสวน",room_price : 990, room_status : "อยู่ระหว่างการทำความสะอาด"});
    room.push({ room_id : 3, room_number :"201", room_type : "Superior",room_viwe : "ห้องพักวิวชายหาด", room_price : 1490,room_status : "ทำความสะอาดแล้ว"});
    room.push({ room_id : 4, room_number :"301", room_type : "Deluxe",room_viwe : "ห้องพักมีสระน้ำ", room_price : 4990,room_status : "ทำความสะอาดแล้ว"})
    room.push({ room_id : 5, room_number :"401", room_type : "Suite",room_viwe : "ห้องพักติดชายหาด", room_price : 8990,room_status : "ทำความสะอาดแล้ว"});

    console.table(room);

searchType = (key) => {
    let check_search = reg_search.test(key);
    if (check_search == true) {
        let answer = room.filter(type => (type.type_name.includes(key)))
        console.table(answer)
        return [answer.length, answer]
    } else {
        throw 'กรอกข้อมูลผิดพลาด กรุณาลองใหม่อีกครั้ง'
    }
        
}


addRoom = (number, price, type,viwe, status) => {
    if ( (reg_number.test(room_number) && reg_price.test(room_price) && reg_type.test(room_type && reg_viwe.test(room_viwe) && reg_status.test(room_status)) == true ) 
    ){
        let similar_number = false;
        room.forEach((room) => {
            if(room.number == number) {
                console.log("ขออภัย!ห้องนี้เต็มแล้วกรุณาเปลี่ยนหมายเลขห้อง");
                similar_number = true;
            } 
        })
        if (similar_number == false) {
            id++;
            room.push({ room_id:id,room_number: number, room_price: price, room_type: type,room_viwe:viwe, room_status: status});
            checkType();
            return room;
        } else if (similar_number == true) {
            throw "ขออภัย!ห้องนี้เต็มแล้วกรุณาเปลี่ยนหมายเลขห้อง";
        }
    } else {
        throw "กรอกข้อมูลผิดพลาด กรุณาลองใหม่อีกครั้ง";
    }
        
}    


showRoom = () => {
    console.table(room)
}

module.exports={
    searchType: searchType,
    addRoom: addRoom,
    showRoom: showRoom,
    room:room
}