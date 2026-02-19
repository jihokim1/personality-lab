// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// 💡 [SEO 핵심 영역] 검색 엔진과 SNS 공유를 위한 메타데이터 총괄 설정
export const metadata: Metadata = {
  // 1. 기본 브라우저 탭 및 검색 결과 타이틀
  title: 'Personality Lab | 나를 발견하는 6가지 종합 성향 테스트',
  description: '투자, 여행, 업무, 연애, 성적 성향, 예민함 척도까지. 6가지 전문적인 테마로 알아보는 당신의 진짜 모습. 지금 바로 무료로 심리 분석을 시작해 보세요.',
  
  // 2. 검색 로봇이 참고할 핵심 키워드
  keywords: ['성향테스트', '심리테스트', '연애테스트', '성격테스트', '투자성향', '업무성향', 'Personality Lab'],
  
  // 3. 카카오톡, 페이스북 등 공유 시 나타나는 미리보기(Open Graph) 설정
  openGraph: {
    title: 'Personality Lab | 종합 성향 테스트',
    description: '6가지 테마로 알아보는 나의 완벽한 심리 분석. 나는 어떤 사람일까?',
    url: 'https://personalitylab.store',
    siteName: 'Personality Lab',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://personalitylab.store/og-image.jpg', // 💡 추후 public 폴더에 og-image.jpg (1200x630) 추가 필요
        width: 1200,
        height: 630,
        alt: 'Personality Lab 썸네일 이미지',
      },
    ],
  },

  // 4. 트위터 공유 시 나타나는 카드 설정
  twitter: {
    card: 'summary_large_image',
    title: 'Personality Lab | 종합 성향 테스트',
    description: '6가지 테마로 알아보는 나의 완벽한 심리 분석.',
    images: ['https://personalitylab.store/og-image.jpg'],
  },

  // 5. 구글 서치콘솔 및 네이버 서치어드바이저 소유권 확인 메타태그
  verification: {
    // TODO: 구글 서치콘솔에서 발급받은 HTML 태그 안의 content 값을 여기에 붙여넣습니다.
    google: '여기에_구글_인증_코드를_입력하세요',
    other: {
      // TODO: 네이버 서치어드바이저에서 발급받은 HTML 태그 안의 content 값을 여기에 붙여넣습니다.
      'naver-site-verification': ['f2e17b12e06bf0089d0b38e4cf047c53974bd8a2'],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-zinc-950 text-slate-900`}>
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}