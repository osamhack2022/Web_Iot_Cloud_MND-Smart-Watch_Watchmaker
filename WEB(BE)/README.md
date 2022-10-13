

node index.js
프론트엔드 서버만 열어놓고 쿼리 들어올 시 백엔드 스크립트를 실행할 것인지 -> 불가능.
백엔드 서버와 프론트엔드 서버가 둘다 열린 상태에서 상호 통신할 것인지 o

backend/bin/www


/workspaces/Web_Iot_Cloud_MND-Smart-Watch_Watchmaker/WEB_FE/vue-argon-dashboard-main/src/views/components/AuthorsTable.vue
-> 프론트엔드 인원 목록 

https://web-iot-cloud-mnd-smart-watch-watchmaker-rr5gw44v7vw39j4-8080.githubpreview.dev/api -> 백엔드 서버로 연결





사이트 참조

0순위 https://mrw0119.tistory.com/138?category=938676
1순위 https://vlee.kr/4155 (vue.js <-> express/pug )
2순위 https://velog.io/@ye050425/sqlite3Setting (sqlite사용방법)
3순위 https://ms4hat.tistory.com/17

codespace에서 node.js 서버 설정하기
https://www.youtube.com/watch?v=jRtrDpzN_5o
-> container 없이는 통신 x





npm i @vue/cli-service
npm i @vue/cli-plugin-babel
npm i @vue/cli-plugin-eslint
npm install -g sass-migrator

npm install mysql

docker pull mysql

프로세스 보기
docker ps


docker exec  -it 2882a0b6ba2f bash

mysql -u root -p


jason-mysql 컨테이너는 node.js 환경 아님



vue.js 돌아가는 jason-vue 컨테이너만 node.js 환경임.
여기서 npm install mysql

