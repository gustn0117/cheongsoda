export const COMPANY = {
  name: '청소다',
  nameEn: 'CHEONG SO DA',
  tagline: '종합청소업체 본사',
  phone: '010-7725-7744',
  phoneTel: '01077257744',
  kakao: 'http://pf.kakao.com/_wxctWn/chat',
  kakaoHandle: 'pf.kakao.com/_wxctWn',
  blog: 'https://blog.naver.com/cheongsoda',
  blogHandle: 'blog.naver.com/cheongsoda',
  serviceArea: '서울 · 경기 · 인천 · 전국 직영팀 보유',
  hours: '연중무휴 · 오전 9시 ~ 오후 9시',
  ceo: '청소다 본사',
  insurance: '대물 1억원 영업 배상책임 보험 가입',
  team: '하청X · 알바X · 20~40대 직영팀 50팀 운영',
};

export type Service = {
  slug: string;
  title: string;
  hashtag: string;
  summary: string;
  detail: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'move-in',
    title: '입주·이사 청소',
    hashtag: '#입주청소',
    summary: '새 집·이사 후 빈 집 정밀 청소 + 살균 마감',
    detail:
      '수납함·붙박이 전체 탈거, 분진·이염 제거 후 피톤치드·스팀살균까지 무료 진행합니다. 직영팀 2~4인이 평균 4~8시간 동안 빈틈없이 마감합니다.',
    image: '/services/cover-main.jpeg',
  },
  {
    slug: 'live',
    title: '거주 청소',
    hashtag: '#거주청소',
    summary: '가구가 있는 상태에서 진행되는 정기·일반 청소',
    detail:
      '주방·욕실·창틀·베란다 등 일상 공간을 베테랑 팀이 꼼꼼하게 청소합니다. 평수에 맞춰 합리적인 견적을 제공합니다.',
    image: '/services/floor.jpeg',
  },
  {
    slug: 'shop',
    title: '상가·사무실 청소',
    hashtag: '#상가청소',
    summary: '오픈 전·후 매장과 사무실 정밀 청소',
    detail:
      '영업 동선과 마감 시간을 고려해 야간·주말 작업도 가능합니다. 유리·창문·전등·바닥까지 살균 마감으로 끝맺습니다.',
    image: '/services/window.jpeg',
  },
  {
    slug: 'bathroom',
    title: '욕실 청소',
    hashtag: '#욕실청소',
    summary: '하수구·트랩·환풍구·벽면·타일·거울·상판까지',
    detail:
      '분진청소 및 습식청소를 기본으로 진행하며, 욕실 하수구 트랩, 환풍구 커버, 벽면, 타일바닥, 거울, 상판 등 모든 부분에 청소를 진행합니다.',
    image: '/services/bathroom.jpeg',
  },
  {
    slug: 'storage',
    title: '수납함·전등 탈거',
    hashtag: '#수납함청소',
    summary: '붙박이장·수납함·전등 전체 탈거 후 분진 제거',
    detail:
      '붙박이장의 수납함은 모두 탈거 후 청소가 진행되며, 내·외부 분진과 이염을 제거합니다. 전등 또한 탈거 청소 후 재결합됩니다.',
    image: '/services/storage.jpeg',
  },
  {
    slug: 'aircon',
    title: '에어컨 청소',
    hashtag: '#에어컨청소',
    summary: '커버·필터 분리 청소로 호흡기 건강까지',
    detail:
      '커버와 필터를 분리하여 청소합니다. 건축기간 동안 쌓여 있던 분진을 청소하여 호흡기 건강을 지키고, 에어컨 효율을 높일 수 있습니다.',
    image: '/services/aircon.jpeg',
  },
  {
    slug: 'window',
    title: '창·샷시·창틀',
    hashtag: '#창청소',
    summary: '방충망 손상 없이 스팀으로 분진 제거',
    detail:
      '방충망은 직접적인 힘을 가하면 늘어 날 위험이 있어 스팀으로 분진을 날립니다. 청소 후 창문 여/닫을 시 창틀 내부에 끼어 있던 이물질이 당분간 나올 수 있습니다.',
    image: '/services/window.jpeg',
  },
  {
    slug: 'floor',
    title: '바닥 청소',
    hashtag: '#바닥청소',
    summary: '전용 장비·세제·살균 소독으로 마감까지 깔끔',
    detail:
      '바닥 전용 장비에 전용 세제와 살균 소독제를 섞어 청소합니다. 마지막에 남은 물기는 바로 닦아 마루에 손상이 가지 않도록 작업합니다.',
    image: '/services/floor.jpeg',
  },
  {
    slug: 'kitchen',
    title: '주방 청소',
    hashtag: '#주방청소',
    summary: '걸레받이·선반·상판하부·싱크볼 등 다양한 부분',
    detail:
      '주방은 걸레받이 내부, 선반, 상판하부, 싱크볼 등 다양한 청소 진행이 이뤄집니다. 진행하는 청소과정에서 스팀기, 송풍기 등 다양한 장비를 사용합니다.',
    image: '/services/kitchen.jpeg',
  },
  {
    slug: 'hood',
    title: '후드·환풍기 기름때',
    hashtag: '#기름때제거',
    summary: '화장실 환풍기부터 주방 후드까지 깔끔하게',
    detail:
      '분리 가능한 모든 부분을 탈거하여 기름때를 깔끔하게 제거합니다. 베이스 거울&수전은 추가 비용 없이 오염방지 코팅을 진행합니다.',
    image: '/services/hood.jpeg',
  },
  {
    slug: 'mold',
    title: '곰팡이 제거',
    hashtag: '#곰팡이제거',
    summary: '베란다·욕실·창틀까지 싹 제거',
    detail:
      '베란다 곰팡이부터 창틀, 욕실 실리콘까지 깔끔하게 제거합니다. 고온 스팀 살균소독으로 재발까지 억제합니다.',
    image: '/services/mold.jpeg',
  },
  {
    slug: 'phytoncide',
    title: '피톤치드·스팀살균',
    hashtag: '#피톤치드',
    summary: '청소다에 의뢰주신 모든 분께 무료 제공',
    detail:
      '청소 종료 후 피톤치드 소독으로 새집증후군을 잡고, 고온 스팀 살균으로 공기와 해충 예방까지 마감합니다. 모든 고객 무료 서비스.',
    image: '/services/phytoncide.jpeg',
  },
  {
    slug: 'grout',
    title: '줄눈 시공',
    hashtag: '#줄눈시공',
    summary: '욕실·주방 줄눈 시공으로 새 공간처럼',
    detail:
      '곰팡이와 오염에 강한 에폭시 줄눈으로 시공하여 욕실·주방을 새 공간처럼 만들어 드립니다. 청소 + 시공 패키지로 견적해 드립니다.',
    image: '/services/bathroom.jpeg',
  },
  {
    slug: 'coating',
    title: '탄성 코팅',
    hashtag: '#탄성코팅',
    summary: '욕실·주방 표면 보호 코팅',
    detail:
      '거울·수전·세면대·타일에 탄성 코팅을 시공하여 물때와 오염을 강력 차단합니다. 입주청소와 함께 시공하시면 효과가 가장 좋습니다.',
    image: '/services/floor.jpeg',
  },
  {
    slug: 'waste',
    title: '폐기물 처리',
    hashtag: '#폐기물처리',
    summary: '청소 중 발생한 폐기물 분리·반출까지',
    detail:
      '청소 중 발생한 폐기물과 사용하지 않는 가구·생활용품까지 분리·반출 처리해 드립니다. 추가 비용 발생 시 사전 안내 후 진행합니다.',
    image: '/services/storage.jpeg',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: '카카오톡 상담',
    desc: '카카오 플러스 친구 추가 후 평수·옵션을 알려주시면 즉시 견적을 안내드립니다.',
  },
  {
    step: '02',
    title: '방문 일정 확정',
    desc: '편하신 일정·시간으로 방문 예약을 잡고, 사전 체크리스트를 발송합니다.',
  },
  {
    step: '03',
    title: '꼼꼼한 청소 진행',
    desc: '직영팀 2~4인이 평균 4~8시간 동안 빈틈없이 청소합니다. 알바·하청 없이 직영만.',
  },
  {
    step: '04',
    title: '현장검수 + 살균 마감',
    desc: '고객님과 함께 현장검수 후 피톤치드·스팀살균을 무료로 진행하여 마감합니다.',
  },
];

export const PROMISES = [
  {
    no: '01',
    title: '하청·알바 없는 직영팀',
    desc: '20~40대 베테랑으로만 구성된 직영팀 50팀 이상이 청소다 본사에서 직접 운영합니다.',
  },
  {
    no: '02',
    title: '5일 이내 A/S 보장',
    desc: '청소 후 부족한 부분이 있으면, 만족하실 때까지 5일 이내 A/S와 사후처리까지 책임집니다.',
  },
  {
    no: '03',
    title: '예약금 외 청소 후 결제',
    desc: '청소가 끝나고 만족하신 뒤 잔금을 결제해 주시면 됩니다. 부담 없이 시작하세요.',
  },
  {
    no: '04',
    title: '대물 1억원 배상책임 보험',
    desc: '혹시 모를 사고에도 안심하실 수 있도록 영업 배상책임 보험에 가입되어 있습니다.',
  },
  {
    no: '05',
    title: '평일·주말 동일 가격',
    desc: '전국 어디든 출장비가 없습니다. 평일·주말 비용도 동일하게 적용됩니다.',
  },
];

export const REVIEWS = [
  {
    name: '김수x 고객님',
    date: '2024.08.24',
    rating: 5,
    image: '/reviews/review-01.jpeg',
    text: '팀장님들도 완전 친절하시고 하나부터 열까지 다 가르쳐주시고 사진보내주시고 꼼꼼하게 해주시니 믿고 맡길수있었습니다. 또한 모든 장들을 탈거하고 해주셔서 더욱 좋았어요.',
    service: '입주청소',
  },
  {
    name: '송영x 고객님',
    date: '2024.10.01',
    rating: 5,
    image: '/reviews/review-02.jpeg',
    text: '평당 만원으로 진행 해주셨으며 피톤치드와 스팀살균도 서비스로 해주셨습니다. 평당 1만원씩 34만원에 진행했고 다른 추가부분에 대해서도 비용없이 잘 해주셨습니다.',
    service: '이사청소',
  },
  {
    name: '윤재x 고객님',
    date: '2024.10.19',
    rating: 5,
    image: '/reviews/review-03.jpeg',
    text: '다른데는 괜찮았는데 기존세입자가 싱크대랑 후드를 너무 지저분하게 쓰셔서.. 입주청소로 이게 잘 지워질까? 생각했는데 청소다에 맡긴 뒤 완전 새거나 다름없게.. 바뀌었습니다.',
    service: '입주청소',
  },
  {
    name: '정영x 고객님',
    date: '2024.06.24',
    rating: 5,
    image: '/reviews/review-04.jpeg',
    text: '베란다에 먼지낀거랑 창틀이랑 완전히 말끔하게 제거되었어요. 생각보다 안지워지고 꼼꼼히 안될줄 알았는데 청소다는 뭔가 다르긴하더라고요.',
    service: '거주청소',
  },
  {
    name: '은유x 고객님',
    date: '2024.06.29',
    rating: 5,
    image: '/reviews/review-05.jpeg',
    text: '청소다 팀장님이 오셨을때 화장실을 중점적으로 해달라고요청했어요. 곰팡이랑 환풍기부분이 많이 더러웠거든요. 근데 청소다에 맡긴 후 완전 화장실이 빼까번쩍.',
    service: '입주청소',
  },
  {
    name: '양현x 고객님',
    date: '2024.09.15',
    rating: 5,
    image: '/reviews/review-06.jpeg',
    text: '제가 좀 꼼꼼한 성격이라 자꾸 물어보고 자꾸 체크하고 하셨는데도 싫은 티 하나도 안내시고 열심히 하시는 청소다 청소팀장님들을 보고 이 업체는 괜찮다 생각들었습니다.',
    service: '이사청소',
  },
  {
    name: '임명x 고객님',
    date: '2024.10.18',
    rating: 5,
    image: '/reviews/review-07.jpeg',
    text: '청소다에서 할인이벤트 하길래 진행한 빌라청소인데 분진부터 탈거까지 완전 꼼꼼하게 해주시네요. 다하고나서 리뷰까지 작성하여 2만원 페이백 받았어요.',
    service: '입주청소',
  },
  {
    name: '정구x 고객님',
    date: '2024.09.18',
    rating: 5,
    image: '/reviews/review-08.jpeg',
    text: '입주/이사청소 뭐 거기서 거기다 생각하시겠지만 저도 신생업체라 조금 걱정하였으나 엄청나게 세밀히 꼼꼼하게 집계 이받았습니다. 강력추천합니다.',
    service: '이사청소',
  },
  {
    name: '박소x 고객님',
    date: '2024.09.29',
    rating: 5,
    image: '/reviews/review-09.jpeg',
    text: '다른데 시스템에어컨 추가 비용 다 받았는데 청소다 청소팀장님께서 무료로 해주셨어요. 이게 말이되나. 그리고 1-2만원에 다들 청소업체 경쟁이된데.. 여긴.. 너무 정직한곳이네요.',
    service: '거주청소',
  },
];

export const FAQS = [
  {
    q: '청소 견적은 어떻게 산정되나요?',
    a: '평수와 옵션(에어컨 대수, 곰팡이·후드 추가 등)에 따라 산정됩니다. 카카오톡으로 평수와 사진을 보내주시면 정확한 견적을 무료로 안내드립니다. 평일·주말 비용 동일, 전국 어디든 출장비 없음입니다.',
  },
  {
    q: '피톤치드·스팀살균은 정말 무료인가요?',
    a: '네, 청소다에 의뢰해 주신 모든 고객님께 피톤치드 살균과 고온 스팀 살균을 추가 비용 없이 기본 서비스로 제공합니다. 새집증후군 제거와 해충 예방까지 한 번에 잡아 드립니다.',
  },
  {
    q: '청소 후 부족한 부분은 어떻게 처리되나요?',
    a: '청소 종료 시 직영팀과 고객님이 함께 현장검수를 진행합니다. 아쉬운 부분이 있으시면 즉시 보완하며, 5일 이내 추가 A/S까지 책임감 있게 마무리해 드립니다.',
  },
  {
    q: '입주청소 / 이사청소 / 거주청소 차이가 뭔가요?',
    a: '입주청소는 새 집 입주 전 빈 집 기준 전체 청소, 이사청소는 이전 거주자 흔적까지 깔끔하게 제거, 거주청소는 가구가 있는 상태에서 진행되는 정기·일반 청소입니다. 상황에 맞는 옵션을 추천드립니다.',
  },
  {
    q: '결제는 어떻게 진행되나요?',
    a: '예약금 외 잔금은 청소가 모두 끝나고 만족하신 뒤 결제하시면 됩니다. 청소 품질에 자신이 있기에 가능한 결제 방식입니다.',
  },
  {
    q: '리뷰 작성 시 페이백이 있나요?',
    a: '네, 진행하신 청소에 대한 리얼 리뷰 작성 시 최대 2만원 현금 페이백 이벤트를 상시 진행 중입니다. 자세한 안내는 카카오톡으로 문의해 주세요.',
  },
  {
    q: '서비스 가능한 지역은 어디인가요?',
    a: '서울·경기·인천을 비롯해 전국에 직영팀 50팀 이상을 보유하여 전국 어디든 서비스가 가능합니다. 전국 출장비 0원, 권역에 따른 추가 비용은 없습니다.',
  },
  {
    q: '보험 가입은 되어 있나요?',
    a: '네, 대물 1억원 영업 배상책임 보험에 가입되어 있어 혹시 모를 사고에도 안심하실 수 있습니다.',
  },
];

export const STATS = [
  { value: '50팀+', label: '전국 직영팀 운영' },
  { value: '4.98', label: '평균 만족도 (5점 만점)' },
  { value: '7년', label: '청소팀장 경력 노하우' },
  { value: '5일', label: 'A/S 책임 보장 기간' },
];

export const REGIONS = [
  '서울/경기',
  '인천',
  '충남/충북/세종',
  '경남/경북',
  '전남/전북',
  '강원',
  '제주',
  '부산/울산',
];

export const PYEONG_OPTIONS = [
  '20평 이하',
  '20~30평',
  '30~40평',
  '40~50평',
  '50평 이상',
];

export const SERVICE_OPTIONS = [
  '입주청소',
  '이사청소',
  '거주청소',
  '상가청소',
  '줄눈시공',
  '탄성코팅',
  '폐기물처리',
];

export const PLATFORM_BADGES = [
  { name: '숨고', label: '만족도 리뷰 100%' },
  { name: '당근', label: '동네 평점 5.0' },
  { name: '미소', label: '플랫폼 만족도 1위' },
];
