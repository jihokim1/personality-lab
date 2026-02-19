// app/page.tsx
import Link from 'next/link';

// 카테고리 데이터
const categories = [
  { id: 'investment', icon: '💰', title: '투자 성향', desc: '나의 재테크 스타일과 위험 선호도는?', bg: 'bg-emerald-500', hoverBg: 'hover:bg-emerald-600' },
  { id: 'travel', icon: '✈️', title: '여행 성향', desc: '한 달 살기? 호캉스? 나의 여행 스타일은?', bg: 'bg-sky-500', hoverBg: 'hover:bg-sky-600' },
  { id: 'work', icon: '💼', title: '업무 성향', desc: '조직 내에서 나의 업무 처리 방식은?', bg: 'bg-indigo-500', hoverBg: 'hover:bg-indigo-600' },
  { id: 'romance', icon: '❤️', title: '연애 성향', desc: '나의 연애 세포와 찰떡궁합 유형은?', bg: 'bg-rose-500', hoverBg: 'hover:bg-rose-600' },
  { id: 'sexual', icon: '🔞', title: '성적 성향', desc: '나만의 은밀한 성적 취향 알아보기', bg: 'bg-red-600', hoverBg: 'hover:bg-red-700' },
  { id: 'sensitivity', icon: '🥺', title: '예민함 척도', desc: '나는 얼마나 예민하고 섬세한 사람일까?', bg: 'bg-amber-500', hoverBg: 'hover:bg-amber-600' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4 md:p-8 overflow-hidden font-sans">
      
      {/* 헤더 타이포그래피 */}
      <div className="w-full text-center mb-10 z-10">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-3">
          DISCOVER <span className="text-zinc-500">YOURSELF</span>
        </h1>
        <p className="text-zinc-400 font-medium tracking-wide">
          6가지 테마로 알아보는 당신의 진짜 모습
        </p>
      </div>

      {/* 인터랙티브 확장형 아코디언 레이아웃 */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-[75vh] min-h-[600px] gap-3 md:gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/test/${cat.id}`}
            className={`
              group relative flex-1 overflow-hidden rounded-3xl md:rounded-[2.5rem]
              transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
              cursor-pointer border border-white/10
              hover:flex-[4] md:hover:flex-[3] ${cat.bg}
            `}
          >
            {/* [수정 완료] 기본 상태: 아이콘과 정방향 세로 쓰기 텍스트 (모바일과 PC 레이아웃 분리) */}
            <div className="absolute inset-0 flex flex-row md:flex-col items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0 py-4 md:py-8 gap-3 md:gap-0">
              <span className="text-3xl md:text-5xl md:mb-6 drop-shadow-md">{cat.icon}</span>
              
              {/* 회전(-rotate-90)을 제거하고, 글자를 한 자씩 분리하여 위아래로 쌓습니다. */}
              <h2 className="text-white font-bold text-xl md:text-3xl drop-shadow-md whitespace-nowrap tracking-widest md:tracking-normal">
                {/* 💡 핵심: 모바일용 텍스트 (가로 배치) */}
                <span className="md:hidden">{cat.title}</span>
                
                {/* 💡 핵심: PC용 텍스트 (세로 배치) */}
                <span className="hidden md:flex flex-col items-center gap-1 md:gap-2">
                  {cat.title.split('').map((char, idx) => (
                    char === ' ' 
                      ? <span key={idx} className="h-2 md:h-3 block"></span> // 띄어쓰기 여백 처리
                      : <span key={idx} className="leading-none">{char}</span>
                  ))}
                </span>
              </h2>
            </div>

            {/* 확장 상태 (마우스를 올려 넓어졌을 때 나타나는 상세 콘텐츠) */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="translate-y-8 transition-transform duration-700 group-hover:translate-y-0">
                <span className="text-5xl md:text-8xl drop-shadow-2xl mb-2 md:mb-4 block hidden sm:block">{cat.icon}</span>
                <h2 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-4 tracking-tight">
                  {cat.title} 테스트
                </h2>
                <p className="text-white/80 text-sm md:text-xl font-medium mb-4 md:mb-8 max-w-md break-keep leading-relaxed hidden sm:block">
                  {cat.desc}
                </p>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white text-black rounded-full font-bold text-sm md:text-lg hover:scale-105 transition-transform w-max">
                  시작하기 
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </main>
  );
}