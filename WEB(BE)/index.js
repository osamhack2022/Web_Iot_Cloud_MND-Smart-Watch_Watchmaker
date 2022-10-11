var sqlite3 = require('sqlite3').verbose(); // sqlite3 모듈 불러와서 변수에 담기

//const path = require('path'); // path 모듈 불러와서 변수에 담기
//const dbPath = path.resolve(__dirname, './db/Tproject.db');
// 절대 경로 설정하기

let db = new sqlite3.Database('./db/UserDatabase.db'/*dbPath*/, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        console.error(dbPath);
    } else {
        console.log('Connected to the UserDatabase.');
    }
}); // db sqlite3 db에 연결하는 코드!!

const newQuery = `UPDATE Users SET 현위치 = "사지방" WHERE RFID_Tag = 3303;`
db.serialize(() => {
  db.each(newQuery);
  //여기에 쿼리 추가 

});


db.close((err) =>{
  if(err){
    console.error(err.message);
  }
  console.log('Close the database connection.');
}); // db 닫는 코드!!

//node index.js 로 실행