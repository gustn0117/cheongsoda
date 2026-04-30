const KEYWORDS = [
  '입주청소',
  '이사청소',
  '거주청소',
  '상가청소',
  '에어컨 청소',
  '욕실 청소',
  '주방 청소',
  '곰팡이 제거',
  '후드·환풍기',
  '피톤치드 살균',
  '스팀 살균',
  '창문·샷시',
];

export default function TrustBar() {
  const items = [...KEYWORDS, ...KEYWORDS];
  return (
    <section className="relative -mt-2 border-y border-navy-100 bg-white">
      <div className="overflow-hidden fade-edges py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((k, i) => (
            <span
              key={i}
              className="mx-3 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-mist px-4 py-1.5 text-sm font-semibold text-navy-700"
            >
              <span className="text-navy-400">●</span>
              {k}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
