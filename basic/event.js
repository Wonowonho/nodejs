/*
`    //event 모듈 사용
    var events = require("events");

    //EventEmitter 객체 생성
    var eventEmitter = new events.eventEmitter();

    //이벤트핸들러와 이벤트를 연동시키기
    //eventName은 임의로 설정 가능
    eventEmitter.on('eventName',eventHandler);

    //프로그램 안에서 이벤트를 방생시키려면
    eventEmitter.emit('eventName');`
*/

// events 모듈 사용
var events = require('events');

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
var connectHandler = function connected(){
    console.log("Connection Successful");
    
    // data_recevied 이벤트를 발생시키기
    eventEmitter.emit("data_received");
}

// connection 이벤트와 connectHandler 이벤트 핸들러를 연동
eventEmitter.on('connection', connectHandler);

// data_received 이벤트와 익명 함수와 연동
// 함수를 변수안에 담는 대신에, .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('data_received', function(){
    console.log("Data Received");
});

// connection 이벤트 발생시키기
eventEmitter.emit('connection');