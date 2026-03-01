// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
return (
// 💡 푸터 전체 영역: 상단 여백(mt-20)과 얇은 테두리(border-t)로 본문과 구분
<footer className="bg-[#0a0a0a] py-12 px-6 border-t border-zinc-800/50 mt-20 font-sans">
    {/* 💡 최대 너비 고정 및 양옆 정렬 (모바일은 세로 배치, PC는 가로 배치) */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
    
    {/* 왼쪽 영역: 로고 및 면책 조항 */}
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
        ✨ PERSONALITY TEST
        </h2>
        <p className="text-sm text-zinc-400/80 leading-relaxed font-medium">
        본 테스트 결과는 심리학적 이론을 바탕으로 제작되었으나, 오락 및 참고용입니다.<br className="hidden md:block" />
        의학적 또는 전문적인 심리 진단을 대체할 수 없습니다.
        </p>
    </div>

    {/* 오른쪽 영역: 메뉴 링크 및 카피라이트 */}
    <div className="flex flex-col md:items-end gap-5">
        {/* 💡 3가지 필수 메뉴 링크 */}
        <div className="flex items-center gap-6 text-sm font-bold text-white">
        <Link href="/terms" className="hover:text-zinc-400 transition-colors duration-200">
            이용약관
        </Link>
        <Link href="/privacy" className="hover:text-zinc-400 transition-colors duration-200">
            개인정보처리방침
        </Link>
        {/* 제휴 문의는 클릭 시 메일 앱이 열리도록 mailto 속성 적용 */}
        <a href="mailto:kig0128@naver.com@gmail.com" className="hover:text-zinc-400 transition-colors duration-200">
            제휴 문의
        </a>
        </div>
        
        <p className="text-sm text-zinc-500 font-medium">
        © 2026 personalitylab.store/. All rights reserved.
        </p>
    </div>

    </div>
</footer>
);
}