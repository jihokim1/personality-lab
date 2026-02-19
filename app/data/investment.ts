// app/data/investment.ts

// 1. 선택지 옵션 타입
export interface Option {
  text: string;
  type: 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE' | 'SPECULATIVE';
}

// 2. 질문 데이터 타입
export interface Question {
  id: number;
  question: string;
  options: Option[];
}

// 3. (중요) 결과 데이터 타입 - UI 구조에 맞게 완벽히 일치시켰습니다.
export interface ResultType {
  subtitle: string;
  title: string;
  desc: string[];
  matchTitle: string;
  matchDesc: string;
  recommendTitle: string;
  recommendDesc: string;
  color: string;
}

// ---------------------------------------------------------
// 4. 투자 성향 테스트 문항 데이터 (총 15문항)
// ---------------------------------------------------------
export const investmentQuestions: Question[] = [
  {
    id: 1,
    // [투자 경험] 금융 투자 상품에 대한 실질적인 투자 경험 기간
    question: "주식, 펀드, 파생상품 등 원금 손실 위험이 존재하는 금융 투자 상품에 투자해 본 경험은 어느 정도입니까?",
    options: [
      { text: "투자 경험이 전혀 없거나, 예/적금 수준의 확정 금리 상품만 경험함", type: "CONSERVATIVE" },
      { text: "1년 이상 ~ 3년 미만의 기간 동안 주식 또는 펀드 등 위험 자산 투자 경험이 있음", type: "MODERATE" },
      { text: "3년 이상 ~ 5년 미만 투자 경험이 있으며, 시장 변동성에 대한 기본적인 이해도가 있음", type: "AGGRESSIVE" },
      { text: "5년 이상의 풍부한 투자 경험을 보유하고 있으며, 1회 이상의 경제 위기(Bear Market)를 겪어봄", type: "SPECULATIVE" },
    ],
  },
  {
    id: 2,
    // [금융 지식] 파생상품 및 복잡한 금융 구조에 대한 이해도
    question: "금융 상품의 구조 및 투자 리스크(파생상품, 환율 변동, 금리 등)에 대한 본인의 이해도는 어느 정도라고 생각하십니까?",
    options: [
      { text: "기초적인 금융 용어만 알고 있으며, 상품의 세부 구조를 이해하는 데 어려움이 있음", type: "CONSERVATIVE" },
      { text: "주식과 채권의 차이를 이해하고, 일반적인 펀드 상품의 구조를 파악할 수 있음", type: "MODERATE" },
      { text: "거시 경제 지표와 기업 가치(Fundamental)의 상관관계를 이해하고 분석할 수 있음", type: "AGGRESSIVE" },
      { text: "옵션, 선물, 구조화 상품(ELS/DLS) 등 파생상품의 수익 구조와 리스크 요인을 완벽히 이해함", type: "SPECULATIVE" },
    ],
  },
  {
    id: 3,
    // [목표 수익 및 위험 감내] 기대 수익률과 리스크 감내도의 상관관계
    question: "투자 포트폴리오 구성 시, 귀하가 설정하는 '연간 목표 기대 수익률'과 '최대 감내 손실률(MDD)'은 어느 수준입니까?",
    options: [
      { text: "기대 수익률 연 3% 내외 / 원금 손실은 0% (절대 수용 불가)", type: "CONSERVATIVE" },
      { text: "기대 수익률 연 5~8% 수준 / 투자 원금의 10% 미만 손실 감내", type: "MODERATE" },
      { text: "기대 수익률 연 10~15% 수준 / 투자 원금의 20% 내외 손실 감내", type: "AGGRESSIVE" },
      { text: "기대 수익률 연 20% 이상 / 투자 원금의 30% 이상 초과 손실 감내", type: "SPECULATIVE" },
    ],
  },
  {
    id: 4,
    // [투자 기간] 목표 투자 기간(Time Horizon)
    question: "귀하가 운용하고자 하는 자금의 주된 '목표 투자 기간(Time Horizon)'은 어느 정도입니까?",
    options: [
      { text: "자금 경색을 막기 위해 1년 이내에 현금화해야 하는 단기 유동성 자금", type: "CONSERVATIVE" },
      { text: "주택 자금 마련 등 명확한 목적이 있는 1년 이상 ~ 3년 미만의 중기 자금", type: "MODERATE" },
      { text: "경기 사이클 전반을 고려하여 운용할 수 있는 3년 이상 ~ 5년 미만의 장기 자금", type: "AGGRESSIVE" },
      { text: "노후 자금 또는 부의 증식을 위한 5년 이상의 초장기 여유 자금 (수익 극대화 목적)", type: "SPECULATIVE" },
    ],
  },
  {
    id: 5,
    // [시장 대응-폭락] 시장 급락 시(Drawdown) 위기관리 능력
    question: "글로벌 거시 경제 충격으로 귀하의 포트폴리오 가치가 한 달 만에 20% 하락했습니다. 어떻게 대응하시겠습니까?",
    options: [
      { text: "추가적인 자본 파괴를 막기 위해 즉각 전량 손절매하고 안전 자산(현금)으로 대피한다.", type: "CONSERVATIVE" },
      { text: "시장 동향을 관망하며, 변동성이 줄어들 때까지 추가적인 매수/매도를 보류한다.", type: "MODERATE" },
      { text: "펀더멘탈에 이상이 없는 우량 자산의 저점 매수 기회로 판단하고 분할 매수를 시작한다.", type: "AGGRESSIVE" },
      { text: "시장 과매도 구간(Oversold)으로 확신하고 레버리지 등을 동원하여 적극적인 물타기를 단행한다.", type: "SPECULATIVE" },
    ],
  },
  {
    id: 6,
    // [수익 추구 성향] 인컴 수익 vs 자본 차익
    question: "자산 운용에 있어 귀하가 가장 선호하는 수익 창출 방식은 무엇입니까?",
    options: [
      { text: "예금 이자, 우량 국채 이자 등 변동성이 없고 확정적인 인컴(Income) 수익", type: "CONSERVATIVE" },
      { text: "인플레이션을 헷지할 수 있는 배당주, 리츠(REITs) 등 안정적인 현금 흐름 창출", type: "MODERATE" },
      { text: "배당보다는 기업 가치 성장에 따른 점진적이고 꾸준한 자본 차익(Capital Gain)", type: "AGGRESSIVE" },
      { text: "단기 모멘텀 및 시장 비효율성을 활용한 폭발적인 시세 차익 극대화", type: "SPECULATIVE" },
    ],
  },
  {
    id: 7,
    // [레버리지] 차입(신용, 대출) 활용에 대한 견해
    question: "투자 수익률 극대화를 위한 레버리지(신용 융자, 대출 등) 활용에 대해 어떻게 생각하십니까?",
    options: [
      { text: "투자는 오직 잉여 현금으로만 해야 하며, 대출을 통한 투자는 절대 금물이다.", type: "CONSERVATIVE" },
      { text: "LTV가 낮은 부동산 등 극히 한정적이고 안정적인 자산에만 소규모의 차입을 허용한다.", type: "MODERATE" },
      { text: "대출 금리보다 기대 수익률이 명확히 높다면 감당 가능한 범위 내에서 레버리지를 활용한다.", type: "AGGRESSIVE" },
      { text: "수익 극대화를 위해 미수금, 신용 융자, 파생상품 증거금 등 레버리지를 적극적이고 상시적으로 활용한다.", type: "SPECULATIVE" },
    ],
  },
  {
    id: 8,
    // [자산 배분] 포트폴리오 다각화(Diversification) 전략
    question: "투자 포트폴리오 구성 시 '자산 배분(Asset Allocation)'에 대한 귀하의 전략은 무엇입니까?",
    options: [
      { text: "위험 자산 비중은 10% 미만으로 제한하고, 90% 이상을 예금 및 채권에 집중한다.", type: "CONSERVATIVE" },
      { text: "주식과 채권을 4:6 또는 5:5 비율로 정석적인 혼합형 포트폴리오를 구성한다.", type: "MODERATE" },
      { text: "성장성이 높은 주식 및 대체 자산 비중을 70% 이상으로 가져가되, 섹터와 국가를 분산한다.", type: "AGGRESSIVE" },
      { text: "초과 수익 달성을 위해 확신이 있는 1~2개 소수 종목이나 테마(가상자산 등)에 자본을 집중(몰빵)한다.", type: "SPECULATIVE" },
    ],
  },
  {
    id: 9,
    // [투자 정보 채널] 의사결정의 근거와 리서치 성향
    question: "새로운 투자 대상을 발굴하고 검증할 때 주로 의존하는 정보 채널은 무엇입니까?",
    options: [
      { text: "공인된 금융기관 프라이빗 뱅커(PB)의 상담 및 원금 보장형 상품 설명서", type: "CONSERVATIVE" },
      { text: "신뢰할 수 있는 언론사의 경제 기사, 증권사 리포트 및 거시 경제 지표", type: "MODERATE" },
      { text: "기업 공시(DART), 재무제표 분석, 산업 동향 보고서 등 직접적인 펀더멘털 리서치", type: "AGGRESSIVE" },
      { text: "기술적 분석(차트), 퀀트(Quant) 데이터, 수급 동향 및 시장 내 단기적 정보 비대칭성", type: "SPECULATIVE" },
    ],
  },
  {
    id: 10,
    // [환율 및 해외 자산] 글로벌 투자 노출도
    question: "해외 주식, 외화 예금 등 환율 변동(FX Risk)에 노출되는 글로벌 투자에 대한 귀하의 입장은?",
    options: [
      { text: "환차손의 위험을 피하기 위해 오직 원화(KRW) 기반의 국내 자산에만 100% 투자한다.", type: "CONSERVATIVE" },
      { text: "기축 통화인 달러(USD) 등 안전 통화 위주로 전체 자산의 20% 이내에서 환전축적을 시도한다.", type: "MODERATE" },
      { text: "국내 시장의 한계를 극복하기 위해 글로벌 우량 기업 및 선진국 ETF에 적극적으로 분산 투자한다.", type: "AGGRESSIVE" },
      { text: "신흥국(EM) 자산, 해외 파생상품 등 고위험 글로벌 자산에도 환차익/환차손을 고려하여 적극 투자한다.", type: "SPECULATIVE" },
    ],
  },
  {
    id: 11,
    // [시장 대응-과열] 시장 과열(Bubble) 징후 시 포지션 관리
    question: "보유 중인 핵심 자산군의 가격이 비정상적으로 급등하여 '버블(과열)' 논란이 있습니다. 대처 방안은?",
    options: [
      { text: "즉각 전량 매도하여 이익을 확정하고, 가격이 안정될 때까지 현금을 보유한다.", type: "CONSERVATIVE" },
      { text: "원금 수준의 물량만 매도하여 리스크를 제거하고, 남은 수익금으로만 추가 상승을 지켜본다.", type: "MODERATE" },
      { text: "후행 스탑로스(Trailing Stop)를 설정하여 추세가 꺾이기 전까지 이익을 극대화한다.", type: "AGGRESSIVE" },
      { text: "과열의 정점이라 판단되면 인버스(숏) ETF나 풋옵션 등 하락장 베팅으로 스위칭하여 초과 수익을 노린다.", type: "SPECULATIVE" },
    ],
  },
  {
    id: 12,
    // [대체 투자] 암호화폐, NFT 등 신종 자산에 대한 시각
    question: "비트코인 등 가상자산이나 미술품 조각 투자와 같은 신종 대체 자산(Alternative Asset)에 대한 견해는?",
    options: [
      { text: "내재 가치가 없고 제도권의 보호를 받지 못하는 투기성 자산이므로 절대 투자하지 않는다.", type: "CONSERVATIVE" },
      { text: "아직 리스크가 크다고 판단하며, 제도권 내 관련 ETF 등이 완전히 정착되면 소액만 검토해 본다.", type: "MODERATE" },
      { text: "디지털 금(Gold) 등 새로운 자산군으로서의 가치를 인정하며, 포트폴리오의 5~10% 비중으로 편입한다.", type: "AGGRESSIVE" },
      { text: "초기 시장의 비효율성을 활용한 막대한 수익 창출 기회로 보고, 알트코인 등에도 적극적인 비중을 싣는다.", type: "SPECULATIVE" },
    ],
  },
  {
    id: 13,
    // [손실 회피성] 원금 손실에 대한 심리적 저항감
    question: "만약 귀하의 투자 원금 1억 원이 9,000만 원으로 줄었다면, 귀하가 느끼는 심리적 상태는 어떻습니까?",
    options: [
      { text: "심각한 불안감과 스트레스를 느끼며, 일상생활에 큰 지장을 초래한다.", type: "CONSERVATIVE" },
      { text: "상당한 불쾌감을 느끼며, 투자 방식을 재점검하고 원금 회복에만 집중하게 된다.", type: "MODERATE" },
      { text: "아쉽지만 시장의 자연스러운 변동성 중 하나로 이성적으로 받아들이고 전략을 유지한다.", type: "AGGRESSIVE" },
      { text: "전혀 개의치 않으며, 오히려 추가 자금을 투입하여 평단가를 낮출 훌륭한 기회라고 즐거워한다.", type: "SPECULATIVE" },
    ],
  },
  {
    id: 14,
    // [유동성] 자산의 현금화 용이성 선호도
    question: "투자 수익률과 자산의 현금화 용이성(유동성) 간의 트레이드오프(Trade-off)에서 귀하의 선택은?",
    options: [
      { text: "수익률이 낮아도 당일 출금이 가능한 파킹통장, CMA 등 초단기 유동성 자산을 최우선시한다.", type: "CONSERVATIVE" },
      { text: "중도 해지 페널티가 있더라도 원금이 보장되는 1년 이내의 정기 예적금 위주로 운용한다.", type: "MODERATE" },
      { text: "매도 후 출금까지 수일(D+2)이 걸리는 주식/ETF 위주로 운용하며 유동성 제약을 감수한다.", type: "AGGRESSIVE" },
      { text: "수익률만 높다면 수년간 자금이 묶이는 사모펀드, 비상장 주식, 부동산에도 기꺼이 투자한다.", type: "SPECULATIVE" },
    ],
  },
  {
    id: 15,
    // [투자의 재무 목표] 투자의 궁극적인 재무 목표 파악
    question: "귀하가 투자를 통해 달성하고자 하는 궁극적인 '재무적 목표'는 무엇입니까?",
    options: [
      { text: "원금 훼손 없이 인플레이션의 절반 수준이라도 방어하며 노후 자금을 안전하게 보관하는 것", type: "CONSERVATIVE" },
      { text: "물가 상승률 수준의 화폐 가치 하락을 방어하고, 소득을 보완할 추가적인 현금 흐름 창출", type: "MODERATE" },
      { text: "복리 효과를 활용한 지속적인 자산 증식으로 완전한 재정적 독립(FIRE) 달성", type: "AGGRESSIVE" },
      { text: "단기간 내 기하급수적인 부의 증식을 통한 계층 이동 및 텐배거(10배 수익) 달성", type: "SPECULATIVE" },
    ],
  }
];

// ---------------------------------------------------------
// 5. 투자 성향 테스트 결과 데이터 (4가지 유형)
// ---------------------------------------------------------
export const investmentResults: Record<'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE' | 'SPECULATIVE', ResultType> = {
  CONSERVATIVE: {
    subtitle: "원금 절대 수호",
    title: "🛡️ 강철의 금고지기",
    desc: [
      "투자에서 가장 중요한 것은 수익이 아닌 '원금 방어'입니다.",
      "물가 상승률을 상회하는 높은 수익보다는 자산의 안전성을 최우선 목표로 삼는 보수적인 투자자입니다. 시장 변동성에 대한 스트레스 역치가 낮아 위험 자산 노출 시 심리적 불안을 크게 느낄 수 있습니다.",
      "확정적인 이자 수익을 제공하는 금융 상품을 통해 점진적이고 안정적으로 자산을 축적하는 전략이 완벽히 부합합니다."
    ],
    matchTitle: "당신의 최적 투자 파트너는?",
    matchDesc: "안정적인 현금흐름을 창출하는 '배당주 투자자' 💰",
    recommendTitle: "전문가 포트폴리오 제언",
    recommendDesc: "제1금융권 예/적금 (60%), 단기 국공채 (30%), 원금보장형 ELB (10%)",
    color: "text-blue-600"
  },
  MODERATE: {
    subtitle: "중도실용 안정추구",
    title: "⚖️ 인플레이션 파이터",
    desc: [
      "자산 보존을 중시하면서도 화폐 가치 하락을 방어하기 위해 일정 수준의 위험을 감수하는 합리적 투자자입니다.",
      "극단적인 고수익 고위험 자산보다는 배당금이나 임대수익 등 예측 가능한 꾸준한 현금흐름(Cash Flow)을 창출하는 자산을 선호합니다.",
      "변동성 관리와 제한적인 자본 차익을 동시에 추구하는 정석적인 자산 배분 전략이 요구됩니다."
    ],
    matchTitle: "당신의 최적 투자 파트너는?",
    matchDesc: "시장을 관망하는 '가치 투자자' 🧐",
    recommendTitle: "전문가 포트폴리오 제언",
    recommendDesc: "우량 배당주 및 리츠 (40%), 글로벌 투자적격 회사채 (40%), 금/달러 (20%)",
    color: "text-emerald-600"
  },
  AGGRESSIVE: {
    subtitle: "성장주도 적극투자",
    title: "📈 파도를 타는 서퍼",
    desc: [
      "시장 평균을 상회하는 초과 수익을 위해 원금의 부분적 손실을 기꺼이 감내하는 적극적인 투자자입니다.",
      "거시 경제와 기업 펀더멘털을 분석할 수 있으며, 단기적인 흔들림에 부화뇌동하지 않고 장기적인 성장 추세에 투자합니다.",
      "복리 효과를 극대화하기 위해 자본 차익(Capital Gain) 위주의 주식형 포트폴리오를 선호합니다."
    ],
    matchTitle: "당신의 최적 투자 파트너는?",
    matchDesc: "리스크를 관리해 줄 '안정형 투자자' 🛡️",
    recommendTitle: "전문가 포트폴리오 제언",
    recommendDesc: "글로벌 대형 우량주 ETF (60%), 신흥국 성장주 (20%), 원자재 (20%)",
    color: "text-orange-500"
  },
  SPECULATIVE: {
    subtitle: "하이리스크 초공격투자",
    title: "🔥 극한의 알파 헌터",
    desc: [
      "하이 리스크, 하이 리턴. 극단적 초과 수익을 사냥하는 시장의 포식자입니다.",
      "자산 가치의 극심한 변동성을 즐기며, 원금 전액 손실의 위험까지 감당할 수 있는 대담한 심장을 지녔습니다.",
      "시장의 단기 비효율성 및 트렌드를 선점하며, 필요에 따라 레버리지와 파생상품을 동원하여 기하급수적인 자산 증식을 도모합니다."
    ],
    matchTitle: "당신의 최적 투자 파트너는?",
    matchDesc: "함께 트렌드를 분석할 '퀀트 분석가' 💻",
    recommendTitle: "전문가 포트폴리오 제언",
    recommendDesc: "혁신 기술 테마주 (40%), 고위험 대체자산(코인 등) (30%), 레버리지 ETF (30%)",
    color: "text-rose-600"
  }
};