import { investmentQuestions, investmentResults } from './investment';
import { romanceQuestions, romanceResults } from './romance';
import { sensitivityQuestions, sensitivityResults } from './sensitivity';
import { sexualQuestions, sexualResults } from './sexual';
import { travelQuestions, travelResults } from './travel';
import { workQuestions, workResults } from './work';

export const questionsData: Record<string, any> = {
  investment: investmentQuestions,
  romance: romanceQuestions,
  sensitivity: sensitivityQuestions,
  sexual: sexualQuestions,
  travel: travelQuestions,
  // 2. work 카테고리 추가
  work: workQuestions,
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