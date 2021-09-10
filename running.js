var http = require('http');
var url = require('url');


const {deleteRoom,addRoom,showRoom,searchType,room} = require('./room.js');
const {addGuest,deleteGuest,showGuest,guest} = require('./guest');
const {edit_booking,showBooking,showAllBooking,booking} = require('./booking');

http.createServer(function (req, res) {

    var require_path = url.parse(req.url, true);
    var message = '';
    var status = 200;
    var data = '';

    switch(require_path.pathname) {
        case '/addRoom':
            try {
                let all_room = addRoom(require_path.query.number, parseInt(require_path.query.price), 
                        require_path.query.type, require_path.query.description);
                message += `ได้เพิ่มห้อง ${require_path.query.number} เข้าสู่ระบบแล้ว`
                data = JSON.stringify(all_room)
                showRoom();
            }catch(err) {
                status = 400;
                message += (err)
                console.log(err);
            }
            break;
        case '/addGuest':
            try {
                let show = addGuest(require_path.query.firstname, require_path.query.lastname, parseInt(require_path.query.age),
                    require_path.query.phone_number, require_path.query.email)
                message += `ได้เพิ่มคุณ ${require_path.query.firstname} ${require_path.query.lastname} เข้าสู่รายชื่อผู้เข้าพักแล้ว`
                data += JSON.stringify(show);
                
            }catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }
            break;
        case '/searchType':
            try {
                let show = searchType(require_path.query.key)
                message += `found ${show[0]} item(s)`
                data += JSON.stringify(show[1])
            } catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }
            break;
        case '/edit_booking':
            try {
                let show = edit_booking(require_path.query.id, parseInt(require_path.query.room_id), require_path.query.checkin_date, require_path.query.checkout_date);
                message += `แก้ไข ${show.id} เสร็จสิ้น`;
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
        case '/showBooking':
            try {
                let show = showBooking(parseInt(require_path.query.id));
                message += 'เสร็จสิ้น';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
        case '/showAllBooking':
            try {
                let show = showAllBooking();
                message += 'เสร็จสิ้น';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;

            default: 
                status = 404
                message = 'path not found!'
            break;
    }
   
    let response_objects = {
        status: status,
        message: message,
        data: data
    }

    res.writeHead(status, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_objects));


}).listen(8080);
console.log('Inventory system is running on port 8080.');