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
  instagram: 'https://www.instagram.com/cheongso_da',
  instagramHandle: '@cheongso_da',
  soomgo: 'https://soomgo.com/profile/users/12040020',
  soomgoHandle: 'soomgo.com/cheongsoda',
  serviceArea: '서울 · 경기 · 인천 · 전국 직영팀 보유',
  hours: '연중무휴 · 오전 9시 ~ 오후 9시',
  ceo: '청소다 본사',
  insurance: '대물 1억원 영업 배상책임 보험 가입',
  team: '하청X · 알바X · 20~40대 직영팀 50팀 운영',
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'move-in',
    title: '입주/이사청소',
    summary: '입주 전·이사 후 빈 집 정밀 청소',
    detail:
      '새로 입주하시기 전, 집 안 곳곳에 남아있는 공사 먼지·오염물질·생활 흔적을 깨끗하게 제거하는 전문 청소 서비스입니다. 바닥, 창틀, 주방, 화장실, 베란다 등 보이지 않는 구석까지 꼼꼼하게 청소하여 쾌적하고 안심되는 새집 환경을 만들어드립니다.',
    image: '/services/v2-move-in.png',
  },
  {
    slug: 'live',
    title: '거주청소',
    summary: '생활 중인 공간의 정기·일반 청소',
    detail:
      '짐이 있는 상태에서 생활하며 쌓인 먼지와 찌든 때를 깨끗하게 제거하는 전문 청소 서비스입니다. 주방·화장실·바닥·창틀까지 꼼꼼하게 관리해 쾌적한 생활공간을 만들어드립니다.',
    image: '/services/v2-live.png',
  },
  {
    slug: 'remodel',
    title: '리모델링후청소',
    summary: '인테리어 공사 후 분진·자국 제거',
    detail:
      '인테리어 공사 후 남은 먼지, 분진, 본드 자국 등을 깨끗하게 제거하는 전문 청소 서비스입니다. 바닥·창틀·주방·욕실 등 공간 전체를 꼼꼼하게 정리해 바로 생활 가능한 깨끗한 환경을 만들어드립니다.',
    image: '/services/v2-remodel.png',
  },
  {
    slug: 'shop',
    title: '상가/사무실청소',
    summary: '오픈 전·후 매장과 사무실 정밀 청소',
    detail:
      '매장·사무실·상업공간에 쌓인 먼지와 오염을 정리하여 고객과 직원 모두가 쾌적하게 이용할 수 있는 깨끗한 환경으로 완성해드립니다.',
    image: '/services/v2-shop.png',
  },
  {
    slug: 'special',
    title: '특수청소(고독사·화재청소)',
    summary: '일반 청소로 어려운 특수 현장',
    detail:
      '고독사 현장, 쓰레기집, 장기간 방치 공간 등 일반 청소로 해결하기 어려운 현장을 전문 장비와 체계적인 작업으로 정리·복구하는 서비스입니다. 악취 제거, 폐기물 처리, 위생 관리까지 진행하여 안전하고 쾌적한 공간으로 회복해드립니다.',
    image: '/services/v2-special.png',
  },
  {
    slug: 'waste',
    title: '각종 생활쓰레기 및 폐기물 처리',
    summary: '생활·대형 폐기물 수거 정리',
    detail:
      '생활폐기물, 대형폐기물, 방치된 잡동사니 등 각종 불필요한 물품을 신속하고 체계적으로 수거·정리하는 서비스입니다. 공간 정돈부터 분리 배출, 깔끔한 마무리까지 진행하여 쾌적한 환경으로 만들어드립니다.',
    image: '/services/v2-waste.png',
  },
  {
    slug: 'appliance',
    title: '가전청소',
    summary: '에어컨·세탁기·냉장고·건조기 청소',
    detail:
      '에어컨을 비롯한 세탁기, 냉장고, 건조기 등 생활 가전 내부와 외부에 쌓인 먼지·곰팡이·오염물을 꼼꼼하게 관리하는 전문 청소 서비스입니다. 쾌적한 사용 환경을 유지하고 제품 성능 향상과 위생 관리에 도움을 드립니다.',
    image: '/services/v2-appliance.png',
  },
  {
    slug: 'organize',
    title: '맞춤형 공간정리',
    summary: '옷장·팬트리·주방·창고 정리',
    detail:
      '옷장, 팬트리, 주방, 창고 등 생활 공간을 효율적인 동선에 맞춰 체계적으로 정리하는 서비스입니다. 물건 분류부터 공간 활용, 깔끔한 배치까지 진행하여 넓고 쾌적한 생활환경으로 만들어드립니다.',
    image: '/services/v2-organize.png',
  },
  {
    slug: 'grout-coating',
    title: '줄눈시공/탄성코팅',
    summary: '욕실·주방·베란다 줄눈 + 코팅',
    detail:
      '욕실·주방·베란다 등 공간의 타일 줄눈과 벽면을 전문 시공하여 오염, 곰팡이, 결로 발생을 줄이고 깔끔하고 쾌적한 환경으로 완성해드립니다.',
    image: '/services/v2-grout-coating.png',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: '카카오톡 · 전화 상담 접수',
    desc: '카카오톡 채널 또는 전화 상담을 통해 1:1 빠른 상담이 진행됩니다.',
  },
  {
    step: '02',
    title: '방문 일정 확정 및 사전 안내',
    desc: '고객님의 일정과 현장 상황을 확인하고, 청소 전 준비사항을 친절하게 안내해드립니다.',
  },
  {
    step: '03',
    title: '전문진 청소 진행',
    desc: '경험 많은 전문진과 2~4인 팀의 베테랑이 체계적으로 청소를 진행하며, 모든 영역에 책임감 있는 작업을 보장합니다.',
  },
  {
    step: '04',
    title: '현장 점검 및 살균 마감',
    desc: '청소 종료 후 고객님과 함께 현장 검수 후 피톤치드·스팀 살균 소독으로 깔끔하게 마무리됩니다.',
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

export const REVIEWS = Array.from({ length: 10 }, (_, i) => ({
  image: `/reviews/v2-review-${String(i + 1).padStart(2, '0')}.png`,
  alt: `청소다 실제 고객 후기 ${i + 1}`,
}));

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
  { value: '5점', label: '고객 만족도 (5점 만점)' },
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
  '리모델링후청소',
  '상가/사무실청소',
  '특수청소',
  '폐기물처리',
  '가전청소',
  '맞춤형 공간정리',
  '줄눈시공/탄성코팅',
];

export const PLATFORM_BADGES = [
  { label: '너무 깨끗하게 해주셨어요' },
  { label: '가성비효과 짱짱' },
  { label: '새집이 됐어요' },
  { label: '너무너무 친절해요!' },
];

export const PORTFOLIO_TILES: { src: string; label: string }[] = [
  { src: '/portfolio/aircon.jpg', label: '에어컨 청소' },
  { src: '/portfolio/bathroom.jpg', label: '욕실 청소' },
  { src: '/portfolio/kitchen.jpg', label: '주방 청소' },
  { src: '/portfolio/hood.jpg', label: '후드·환풍기 청소' },
  { src: '/portfolio/floor.jpg', label: '바닥 청소' },
  { src: '/portfolio/window.jpg', label: '창문·창틀 청소' },
  { src: '/portfolio/glass.png', label: '유리창 청소' },
  { src: '/portfolio/storage.jpg', label: '수납장 청소' },
  { src: '/portfolio/mold.jpg', label: '곰팡이 제거' },
  { src: '/portfolio/fridge.jpg', label: '냉장고 청소' },
  { src: '/portfolio/drain.png', label: '하수구 청소' },
  { src: '/portfolio/phytoncide.jpg', label: '피톤치드·스팀살균' },
];
