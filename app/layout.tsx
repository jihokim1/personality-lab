// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// 💡 [SEO 핵심 영역] 검색 엔진과 SNS 공유를 위한 메타데이터 총괄 설정
export const metadata: Metadata = {
  title: 'Personality Lab | 나를 발견하는 6가지 종합 성향 테스트',
  description: '투자, 여행, 업무, 연애, 성적 성향, 예민함 척도까지. 6가지 전문적인 테마로 알아보는 당신의 진짜 모습. 지금 바로 무료로 심리 분석을 시작해 보세요.',
  keywords: ['성향테스트', '심리테스트', '연애테스트', '성격테스트', '투자성향', '업무성향', 'Personality Lab'],
  openGraph: {
    title: 'Personality Lab | 종합 성향 테스트',
    description: '6가지 테마로 알아보는 나의 완벽한 심리 분석. 나는 어떤 사람일까?',
    url: 'https://personalitylab.store',
    siteName: 'Personality Lab',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://personalitylab.store/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Personality Lab 썸네일 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personality Lab | 종합 성향 테스트',
    description: '6가지 테마로 알아보는 나의 완벽한 심리 분석.',
    images: ['https://personalitylab.store/og-image.jpg'],
  },
  verification: {
    // 💡 구글 소유권 확인 코드 (잘린 부분 없이 복사한 전체 코드를 넣어주세요)
    google: '--40z4zjCLZbhLG8_Y3TSw1CIn9avMhmswcltv_구글_전체_코드를_여기에_붙여넣으세요',
    other: {
      // 네이버 소유권 확인 코드 (완료)
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

        {/* 💡 구글 애널리틱스 (GA4) 추적 스크립트 적용 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8C87S3MH5F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8C87S3MH5F');
          `}
        </Script>

        {/* 💡 네이버 애널리틱스 추적 스크립트 (완료) */}
        <Script src="//wcs.naver.net/wcslog.js" strategy="afterInteractive" />
        <Script id="naver-analytics" strategy="afterInteractive">
          {`
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "1701b1df18501f0";
            if(window.wcs) {
              wcs_do();
            }
          `}
        </Script>
      </body>
    </html>
  );
}