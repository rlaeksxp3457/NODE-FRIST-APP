const path = require('path');

/* 현재 실행 중인 스크립트가 있는 디렉토리의 경로를 내보냅니다. */
// require.main.filename 현재 실행한 서버 파일의 app.js 의 주소
module.exports = path.dirname(require.main.filename);