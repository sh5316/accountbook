// myaccountbook Firebase 설정
// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에 나오는 firebaseConfig 값을 아래에 붙여 넣으세요.
// 이 값들은 웹페이지에 공개되는 값이라 GitHub에 올려도 괜찮아요. 실제 보호는 firestore.rules 보안 규칙이 해요.
window.MYACCOUNTBOOK_CONFIG = {
  firebase: {
    apiKey: "여기에_apiKey",
    authDomain: "여기에_프로젝트ID.firebaseapp.com",
    projectId: "여기에_프로젝트ID",
    storageBucket: "여기에_프로젝트ID.appspot.com",
    messagingSenderId: "여기에_messagingSenderId",
    appId: "여기에_appId"
  },
  // 함께 쓸 두 사람의 구글 계정 이메일 (firestore.rules에도 똑같이 넣어 주세요)
  allowedEmails: [
    "첫번째@gmail.com",
    "두번째@gmail.com"
  ],
  // 가계부 이름(저장 위치). 바꾸면 새 가계부가 만들어져요.
  bookId: "main"
};
