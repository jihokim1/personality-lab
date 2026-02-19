import { investmentQuestions, investmentResults } from './investment';
import { romanceQuestions, romanceResults } from './romance';
import { sensitivityQuestions, sensitivityResults } from './sensitivity';
import { sexualQuestions, sexualResults } from './sexual';
import { travelQuestions, travelResults } from './travel';
// 1. work 파일 임포트 추가
import { workQuestions, workResults } from './work';

export const questionsData: Record<string, any> = {
  investment: investmentQuestions,
  romance: romanceQuestions,
  sensitive: sensitivityQuestions,
  sexual: sexualQuestions,
  travel: travelQuestions,
  // 2. work 카테고리 추가
  business: workQuestions,
};

export const resultsData: Record<string, any> = {
  investment: investmentResults,
  romance: romanceResults,
  sensitive: sensitivityResults,
  sexual: sexualResults,
  travel: travelResults,
  // 3. work 결과 추가
  business: workResults,
};