# myaccountbook

부부가 함께 쓰는 가계부 · 일정 캘린더 · 체크리스트 다이어리.

- 사이트: https://sh5316.github.io/accountbook/
- 파일 하나(`myaccountbook.html`)로 동작하고, 여는 곳에 따라 저장 위치가 정해져요.

| 여는 곳 | 저장 위치 | 함께 쓰기 |
|---|---|---|
| GitHub Pages + Firebase 설정 | Firebase (구글 로그인) | 실시간 공유 |
| claude.ai 공유 링크 | claude.ai 공유 저장소 | 실시간 공유 |
| 설정 없이 열기 / 파일로 열기 | 이 브라우저 | 혼자 (백업 파일로 옮기기) |

## Firebase로 함께 쓰기 설정 (처음 한 번, 약 10분)

### 1. Firebase 프로젝트 만들기
1. https://console.firebase.google.com 에서 **프로젝트 추가** (이름 예: `myaccountbook`). Google 애널리틱스는 꺼도 돼요.
2. 무료 요금제(Spark)로 충분해요.

### 2. 데이터베이스 만들기
1. 왼쪽 메뉴 **빌드 > Firestore Database > 데이터베이스 만들기**
2. 위치는 `asia-northeast3 (서울)` 추천, **프로덕션 모드**로 시작
3. **규칙** 탭에 이 저장소의 [`firestore.rules`](firestore.rules) 내용을 붙여 넣고 **게시** (두 사람 이메일은 이미 들어 있어요)

### 3. 구글 로그인 켜기
1. **빌드 > Authentication > 시작하기 > 로그인 방법 > Google** 사용 설정 후 저장
2. **Authentication > 설정 > 승인된 도메인**에 `sh5316.github.io` 추가

### 4. 웹 앱 등록하고 설정값 넣기
1. **프로젝트 설정(톱니바퀴) > 일반 > 내 앱 > 웹(</>)** 으로 앱 등록 (SDK 추가 방식은 아무거나, 호스팅은 체크하지 않아도 돼요)
2. 화면의 `firebaseConfig` 값을 [`firebase-config.js`](firebase-config.js)의 `firebase` 부분에 넣고, `allowedEmails`에 두 사람 이메일 넣기
3. 커밋하고 `main`에 반영하면 1~2분 뒤 사이트에 적용돼요.

### 5. API 키 사용처 제한 (권장)
Firebase 웹 설정값은 브라우저가 읽어야 해서 누구나 볼 수 있어요. 실제 보호는 `firestore.rules`(두 이메일만 허용)가 하고, 아래 제한을 더하면 다른 사이트에서 이 키를 쓰지 못해요.
- Google Cloud 콘솔 > API 및 서비스 > 사용자 인증 정보 > 해당 API 키 > **애플리케이션 제한사항: 웹사이트**
- `https://sh5316.github.io/*`, `https://shmyaccount.firebaseapp.com/*` 추가

### 6. 사용하기
- https://sh5316.github.io/accountbook/ 에서 **Google 계정으로 로그인**
- 두 사람이 적은 내역·일정·다이어리가 실시간으로 함께 보여요.
- 카카오톡 등 앱 안의 브라우저에서는 구글 로그인이 막힐 수 있어요. Chrome이나 Safari로 열어 주세요.

## 기존 기록 옮기기
1. 기록이 있는 곳(claude.ai 링크 또는 브라우저)에서 **설정 > 데이터 백업 > 백업 파일 저장**
2. Firebase 사이트에 로그인한 뒤 **설정 > 데이터 백업 > 백업 불러오기**

## 파일
- `myaccountbook.html` — 앱 전체
- `index.html` — 사이트 첫 주소에서 앱으로 이동
- `firebase-config.js` — Firebase 연결 설정과 허용 이메일
- `firestore.rules` — 두 사람만 읽고 쓰게 하는 보안 규칙
