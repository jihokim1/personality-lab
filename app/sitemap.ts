// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://personalitylab.store'; // 박사님의 실제 도메인

  // 테스트 카테고리 배열
  const categories = [
    'investment', 
    'travel', 
    'work', 
    'romance', 
    'sexual', 
    'sensitivity'
  ];

  // 1. 메인 페이지 (우선순위 1.0)
  const mainRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  };

  // 2. 6개의 테스트 진입 페이지 (우선순위 0.8)
  const testRoutes = categories.map((category) => ({
    url: `${baseUrl}/test/${category}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 메인 페이지와 테스트 페이지들을 합쳐서 반환
  return [mainRoute, ...testRoutes];
}