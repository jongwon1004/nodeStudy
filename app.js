const express = require('express');
const memberController = require('./routes/memberController'); // 사용자 라우트 파일 가져오기

const app = express();

app.use(express.json()); // JSON 요청 본문을 파싱하는 미들웨어 설정

// 라우트 설정
app.use('/member', memberController); // '/member' 경로로 들어오는 요청을 memberController 라우팅

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
