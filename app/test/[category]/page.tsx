'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { questionsData } from '@/app/data';

export default function TestPage() {
  const router = useRouter();
  const params = useParams();
  const category = params.category as string;
  
  const questions = questionsData[category];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  // 테스트 데이터가 없을 때의 예외 처리 화면
  if (!questions) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 font-sans">
        <div className="p-8 text-center text-lg font-bold bg-white text-gray-800 rounded-2xl shadow-sm border border-gray-200">
          존재하지 않는 테스트입니다. 🤔
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (type: string) => {
    const newScores = { ...scores, [type]: (scores[type] || 0) + 1 };
    setScores(newScores);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const highestType = Object.keys(newScores).reduce((a, b) => 
        newScores[a] > newScores[b] ? a : b
      );
      router.push(`/result/${category}?type=${highestType}`);
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    // 눈이 편안한 옅은 회색 배경 적용
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gray-50 font-sans">
      
      {/* 둥글고 부드러운 화이트 카드 디자인 */}
      <div className="w-full max-w-2xl bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
        
        {/* 상단 진행도 (블루 포인트 컬러로 직관성 확보) */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-bold text-gray-400 tracking-wider">PROGRESS</span>
          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        {/* 부드러운 프로그레스 바 */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-10 overflow-hidden">
          <div 
            className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* 질문 텍스트 (고대비로 가독성 극대화) */}
        <div className="min-h-[120px] flex flex-col justify-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 break-keep leading-snug tracking-tight">
            <span className="text-blue-500 mr-2 text-3xl md:text-4xl">Q{currentQuestion.id}.</span> 
            {currentQuestion.question}
          </h2>
        </div>

        {/* 선택지 버튼 (마우스 오버 시 블루 계열로 명확한 피드백 제공) */}
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option: any, idx: number) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option.type)}
              className="w-full text-left p-5 bg-white text-gray-700 font-medium text-lg rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-700 active:scale-[0.99] transition-all duration-200 break-keep shadow-sm hover:shadow-md"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}