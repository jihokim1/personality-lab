// app/privacy/page.tsx
export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-zinc-950 py-20 px-6 md:px-12 font-sans selection:bg-zinc-800">
        <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
            개인정보처리방침
          </h1>
          <p className="text-zinc-500 font-medium mb-10 pb-6 border-b border-zinc-800">
            시행일자: 2026년 3월 1일
          </p>
  
          <div className="space-y-8 text-zinc-300 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. 수집하는 개인정보의 항목 및 목적</h2>
              <p>
                Personality Lab은 원칙적으로 사용자를 식별할 수 있는 민감한 개인정보(이름, 주민등록번호, 연락처 등)를 수집하지 않습니다. 테스트 진행 시 선택하는 답변은 최종 결과 도출을 위해서만 일시적으로 사용되며, 개인을 특정할 수 있는 형태로 서버에 영구 저장되지 않습니다.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. 자동 수집되는 정보 (웹 애널리틱스)</h2>
              <p className="mb-2">본 서비스는 사용자 환경 개선 및 통계 분석을 위해 아래의 분석 도구를 사용하고 있으며, 이 과정에서 비식별화된 정보(기기 정보, 접속 IP, 브라우저 종류, 서비스 이용 기록 등)가 자동으로 수집될 수 있습니다.</p>
              <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                <li><strong>Google Analytics 4 (구글 애널리틱스)</strong></li>
                <li><strong>Naver Analytics (네이버 애널리틱스)</strong></li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. 개인정보의 보유 및 이용 기간</h2>
              <p>
                자동 수집된 통계성 데이터는 통계 분석 목적이 달성된 후, 각 통계 도구(Google, Naver)의 데이터 보관 정책에 따라 파기됩니다. 사용자가 제휴 문의 등을 위해 직접 이메일을 발송한 경우, 해당 문의 처리가 완료된 즉시 관련 정보를 파기합니다.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. 문의처</h2>
              <p>
                개인정보 보호와 관련된 문의, 불만 처리 등은 아래의 이메일로 연락해 주시기 바랍니다.<br />
                <strong className="text-white mt-2 inline-block">이메일: kig0128@naver.com</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }