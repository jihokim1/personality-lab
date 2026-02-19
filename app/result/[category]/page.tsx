'use client';

import { useSearchParams, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
// 결과 페이지도 마찬가지로 경로를 원래대로 되돌립니다.
import { resultsData } from '@/app/data';

export default function ResultPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const category = params.category as string;
  const resultType = searchParams.get('type') as string;

  // 하드코딩 대신 외부 파일에서 카테고리와 타입에 맞는 결과를 찾아옵니다.
  const categoryData = resultsData[category];
  const result = categoryData ? categoryData[resultType] : null;

  if (!result) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
          <div className="text-2xl font-bold mb-4">결과를 불러올 수 없습니다. 🤔</div>
          <button onClick={() => router.push('/')} className="px-6 py-2 bg-black text-white rounded-lg">메인으로 돌아가기</button>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-slate-50">
      
      {/* 메인 리포트 컨테이너 */}
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mb-8">
        
        {/* 상단 헤더 영역 */}
        <div className="text-center py-6 border-b border-gray-100 bg-gray-50">
          <span className="text-sm font-bold text-gray-400 tracking-widest">PERSONALITY REPORT</span>
        </div>

        {/* 타이틀 영역 */}
        <div className="px-8 pt-10 pb-6 text-center">
          <p className="text-lg text-gray-500 font-medium mb-2">{result.subtitle}</p>
          <h1 className={`text-3xl md:text-4xl font-extrabold ${result.color} break-keep leading-snug`}>
            {result.title}
          </h1>
        </div>

        {/* 텍스트 본문 */}
        <div className="px-8 py-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full"></div>
          
          <div className="mt-6 flex flex-col gap-5 text-gray-700 font-medium text-lg leading-loose break-keep">
            {result.desc.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 천생연분 & 추천 박스 영역 */}
        <div className="px-8 pb-10 flex flex-col gap-4">
          <div className="bg-red-50 p-6 rounded-2xl text-center border border-red-100">
            <p className="text-sm font-bold text-red-400 mb-2">{result.matchTitle}</p>
            <p className="text-xl font-extrabold text-red-600 break-keep">{result.matchDesc}</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-100">
              <p className="text-sm font-bold text-blue-400 mb-2">{result.recommendTitle}</p>
              <p className="text-lg font-bold text-gray-800 break-keep">{result.recommendDesc}</p>
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 버튼 */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
        <button 
          onClick={() => router.push(`/test/${category}`)}
          className="flex-1 py-4 bg-white text-gray-900 text-lg font-bold rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all"
        >
          🔄 다시 테스트하기
        </button>

        <Link 
          href="/"
          className="flex-1 py-4 bg-black text-white text-lg font-bold rounded-xl text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all"
        >
          🏠 다른 테스트 보기
        </Link>
      </div>
    </main>
  );
}