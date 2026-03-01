// app/components/Analytics.tsx
'use client'; // 💡 클라이언트 환경에서 스크립트 로드 시점을 제어하기 위해 반드시 최상단에 추가합니다.

import Script from 'next/script';

export default function Analytics() {
return (
<>
    {/* 💡 구글 애널리틱스 (GA4) - 기존 정상 작동 코드 유지 */}
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

    {/* 💡 네이버 애널리틱스 - 타이밍 이슈 및 TS 에러 완벽 해결 */}
    <Script
    src="//wcs.naver.net/wcslog.js"
    strategy="afterInteractive"
    onLoad={() => {
        // 외부 파일이 100% 로드된 것이 확인된 순간에만 아래 코드를 실행합니다.
        if (!(window as any).wcs_add) (window as any).wcs_add = {};
        (window as any).wcs_add['wa'] = '1701b1df18501f0';
        if ((window as any).wcs) {
        (window as any).wcs_do();
        }
    }}
    />
</>
);
}