// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// 최상위 경로에 생성한 컴포넌트 폴더에서 푸터를 불러옵니다.
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// 웹사이트 탭 이름과 검색 엔진 최적화(SEO)를 위한 메타데이터입니다.
export const metadata: Metadata = {
  title: '나를 발견하는 종합 성향 테스트',
  description: '6가지 테마로 알아보는 당신의 완벽한 심리 분석',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-zinc-950 text-slate-900`}>
        {/* 모든 페이지의 본문(메인, 테스트, 결과 화면 등)이 렌더링되는 영역 */}
        <div className="min-h-screen">
          {children}
        </div>
        
        {/* 모든 화면의 맨 아래에 푸터가 공통으로 고정되어 출력됩니다. */}
        <Footer />
      </body>
    </html>
  );
}