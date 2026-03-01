// app/terms/page.tsx
export default function TermsPage() {
    return (
      <main className="min-h-screen bg-zinc-950 py-20 px-6 md:px-12 font-sans selection:bg-zinc-800">
        <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
            이용약관
          </h1>
          <p className="text-zinc-500 font-medium mb-10 pb-6 border-b border-zinc-800">
            시행일자: 2026년 3월 1일
          </p>
  
          <div className="space-y-8 text-zinc-300 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">제 1 조 (목적)</h2>
              <p>
                본 약관은 Personality Lab(이하 "서비스")이 제공하는 종합 성향 테스트 및 관련 제반 서비스의 이용과 관련하여, 회사와 사용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-white mb-3">제 2 조 (서비스의 성격 및 면책)</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>본 서비스에서 제공하는 6가지 테마(투자, 여행, 업무, 연애, 성적 성향, 예민함)의 테스트 결과는 심리학적 이론을 바탕으로 제작되었으나, <strong>오직 오락 및 자기 참조용</strong>으로만 제공됩니다.</li>
                <li>본 테스트의 결과는 전문적인 의학적, 심리학적 진단이나 상담을 절대 대체할 수 없습니다.</li>
                <li>사용자가 서비스의 결과를 바탕으로 내린 결정이나 행동에 대해 당사는 어떠한 법적 책임도 지지 않습니다.</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-white mb-3">제 3 조 (사용자의 의무)</h2>
              <p>
                사용자는 본 서비스를 이용함에 있어 다음의 행위를 하여서는 안 됩니다.<br />
                1. 비정상적인 방법으로 서비스의 서버에 부하를 주거나 데이터를 크롤링하는 행위<br />
                2. 타인의 명예를 훼손하거나 서비스의 운영을 고의로 방해하는 행위
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-white mb-3">제 4 조 (저작권의 귀속)</h2>
              <p>
                본 서비스 내의 모든 테스트 문항, 결과 분석 내용, 디자인, 로고(파비콘 포함) 등에 대한 저작권 및 지적재산권은 Personality Lab에 귀속됩니다. 무단 복제 및 배포를 금합니다.
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }