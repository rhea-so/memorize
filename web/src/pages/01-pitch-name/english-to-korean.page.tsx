import JSConfetti from 'js-confetti';
import { Block, BlockTitle, Navbar, NavbarBackLink, Page } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { QuestionButton } from '../../components/question.button';
import { useState } from 'react';

const makeQuestion = () => {
  return [
    { question: 'C', answer: '도' },
    { question: 'D', answer: '레' },
    { question: 'E', answer: '미' },
    { question: 'F', answer: '파' },
    { question: 'G', answer: '솔' },
    { question: 'A', answer: '라' },
    { question: 'B', answer: '시' },
  ].sort(() => Math.random() - 0.5);
};

const shuffle = () => {
  return ['도', '레', '미', '파', '솔', '라', '시'].sort(() => Math.random() - 0.5);
};

export const EnglishToKoreanPage = () => {
  const jsConfetti = new JSConfetti();
  const navigate = useNavigate();

  const [options, setOptions] = useState<string[]>(shuffle());
  const [question, setQuestion] = useState<{ question: string; answer: string }>(makeQuestion().pop()!);
  const [wrongOptions, setWrongOptions] = useState<string[]>([]);

  const onClick = (answer: string) => {
    if (answer === question.answer) {
      jsConfetti.addConfetti({
        emojis: ['🎉', '✅', '👍'],
        emojiSize: 100,
        confettiNumber: 10,
      });
      setOptions(shuffle());
      setQuestion(makeQuestion().pop()!);
      setWrongOptions([]);
      let nextQuestion = makeQuestion().pop()!;
      while (nextQuestion.question === question.question) {
        nextQuestion = makeQuestion().pop()!;
      }
      setQuestion(nextQuestion);
    } else {
      setWrongOptions([...wrongOptions, answer]);
    }
  };

  return (
    <Page>
      <Navbar title="음이름 외우기 (영어 → 한국어)" left={<NavbarBackLink text="돌아가기" onClick={() => navigate('/')} />} />

      <BlockTitle>다음 음이름은 한국어로 무엇인가요?</BlockTitle>

      <p className="text-center text-8xl font-bold my-8">{question.question}</p>

      <BlockTitle>아래에서 정답을 선택해주세요</BlockTitle>

      <Block strongIos outlineIos className="grid grid-cols-3 gap-3">
        {options.map((option) => (
          <QuestionButton disabled={wrongOptions.includes(option)} key={option} text={option} onClick={onClick} />
        ))}
      </Block>
    </Page>
  );
};
