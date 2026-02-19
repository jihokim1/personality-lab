// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
return (
// 메인 테마에 맞춘 다크 배경(bg-zinc-950)과 은은한 상단 테두리(border-white/10) 적용
<footer className="w-full bg-zinc-950 border-t border-white/10 py-12 font-sans relative z-50">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
    
    {/* 좌측: 로고 및 면책 조항 */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
        {/* 로고 텍스트를 흰색으로 강조 */}
        <span className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-sm">
        ✨ PERSONALITY TEST
        </span>
        {/* 면책 조항을 밝은 회색(zinc-400)으로 처리하여 가독성 확보 */}
        <p className="text-sm text-zinc-400 max-w-md leading-relaxed break-keep font-medium">
        본 테스트 결과는 심리학적 이론을 바탕으로 제작되었으나, 오락 및 참고용입니다. 의학적 또는 전문적인 심리 진단을 대체할 수 없습니다.
        </p>
    </div>

    {/* 우측: 링크 및 저작권 */}
    <div className="flex flex-col items-center md:items-end gap-5">
        <div className="flex gap-6 text-sm font-bold text-zinc-300">
        {/* 링크 호버 시 흰색으로 밝아지는 효과 적용 */}
        <Link href="/" className="hover:text-white transition-colors duration-200">이용약관</Link>
        <Link href="/" className="hover:text-white transition-colors duration-200">개인정보처리방침</Link>
        <a href="mailto:contact@trendit.ai.kr" className="hover:text-white transition-colors duration-200">제휴 문의</a>
        </div>
        {/* 저작권 문구는 조금 더 어두운 톤으로 눌러줌 */}
        <p className="text-xs text-zinc-600 font-medium tracking-wider">
        © 2026 trendit.ai.kr. All rights reserved.
        </p>
    </div>

    </div>
</footer>
);
}