// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // 모든 검색 엔진 로봇(구글, 네이버 등)의 접근 허용
      allow: '/',     // 사이트 내 모든 경로 수집 허용
    },
    // 로봇에게 사이트맵 위치를 명시적으로 알려줌
    sitemap: 'https://personalitylab.store/sitemap.xml',
  };
}