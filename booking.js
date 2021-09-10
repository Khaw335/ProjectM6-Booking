let reg_id = /^\d+$/;
let reg_room_id = /^\d+$/;
let reg_checkin_date = /^\d{2}-\d{2}-\d{4}$/;
let reg_checkout_date = /^\d{2}-\d{2}-\d{4}$/;

var booking = []
booking.push({id: 1, room_id: 1, booking_id: 1, checkin_date: "14/11/2020", checkout_date: "20/11/2020"});
booking.push({id: 2, room_id: 3, booking_id: 2, checkin_date: "14/11/2020", checkout_date: "20/11/2020"});
booking.push({id: 3, room_id: 4, booking_id: 3, checkin_date: "14/11/2020", checkout_date: "20/11/2020"});

console.table(booking);

showBooking = (id) => {
    let check_id = reg_id.test(id)
    let hasBooking = false
    let index = 0
    let saveIndex;
    console.log(check_id)
    if(check_id == true) {

        booking.forEach((booking) => {
            if (booking.id == id) {
                saveIndex = index;
                hasBooking = true;
            }
            index++
        });

        if (hasBooking == true) {
            return booking[saveIndex];
            
        } else {
            throw 'ขออภัยIDนี้ยังไม่ได้จองห้องพัก'; 
        }
        
    } else {
        throw 'กรอกข้อมูลผิดพลาด กรุณาลองใหม่อีกครั้ง'
    }
    
}


showAllBooking = () => {
    return booking;
}


edit_booking = (id, room_id, checkin_date, checkout_date) => {
    let index = 0;
    let saveIndex = 0;
    let hasId = false;
    if ( (reg_id.test(id) && reg_room_id.test(room_id) && reg_checkin_date.test(checkin_date) && reg_checkout_date.test(checkout_date)) == true) {
        booking.forEach((booking) => {
            if(booking.id == id) {
                hasId = true;
                saveIndex = index;
            }
            index++;
        })
        if (hasId == true) {
            booking[saveIndex].room_id = room_id
            booking[saveIndex].checkin_date = checkin_date
            booking[saveIndex].checkout_date = checkout_date

            return booking[saveIndex];
        }else if(hasId == false) {
            throw "รหัสการจองผิดพลาด";
        }
    } else {
        throw "กรอกข้อมูลผิดพลาด กรุณาลองใหม่อีกครั้ง";
    }
    
    
}


module.exports = {
    showBooking: showBooking,
    showAllBooking: showAllBooking,
    edit_booking: edit_booking,
    booking: booking
}