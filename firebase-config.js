// myaccountbook Firebase 설정
// Firebase 웹 설정값은 브라우저가 읽는 공개 값이에요. 실제 보호는 firestore.rules(두 이메일만 허용)가 해요.
window.MYACCOUNTBOOK_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDCsdiB8kqV30L9UltP_FR-6ndVZmK5JLE",
    authDomain: "shmyaccount.firebaseapp.com",
    projectId: "shmyaccount",
    storageBucket: "shmyaccount.firebasestorage.app",
    messagingSenderId: "792209283763",
    appId: "1:792209283763:web:9dfe041c6e72d62aa9aec6",
    measurementId: "G-KFXJ57XSS8"
  },
  // 함께 쓸 두 사람의 구글 계정 이메일 (firestore.rules와 같게)
  allowedEmails: [
    "shlee5316@gmail.com",
    "ljs9323@gmail.com"
  ],
  // 가계부 이름(저장 위치). 바꾸면 새 가계부가 만들어져요.
  bookId: "main"
};
