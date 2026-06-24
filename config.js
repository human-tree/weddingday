/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "인목",
    nameEn: "Groom",
    father: "두병록",
    mother: "김기옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "다현",
    nameEn: "Bride",
    father: "김동근",
    mother: "임정희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-27",
    time: "11:40",
    venue: "더링크 호텔",
    hall: "4층 플라자홀 11:40",
    address: "서울특별시 구로구 경인로 610",
    tel: "02-852-5000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/801090941",
      naver: "https://naver.me/FqWtKQUF"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "장담하건대,\n세상이 다 겨울이어도\n우리 사랑은 늘 봄처럼 따뜻하고\n간혹, 여름처럼 뜨거울 겁니다.\n\n-이수동 '사랑가'-"
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "아버지", name: "두병록", bank: "농협은행", number: "302-0816-6005-61" },
      { role: "어머니", name: "김기옥", bank: "국민은행", number: "905425-01-000411" }
    ],
    bride: [
      { role: "어머니", name: "임정희", bank: "농협은행", number: "010-9068-171708" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "인목 ♥ 다현 결혼합니다",
    description: "2026년 12월 27일, 소중한 분들을 초대합니다."
  }
};
