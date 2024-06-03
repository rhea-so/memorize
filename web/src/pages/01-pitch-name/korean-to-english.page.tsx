import JSConfetti from 'js-confetti';
import { Block, BlockTitle, Navbar, NavbarBackLink, Page } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { QuestionButton } from '../../components/question.button';
import { useState } from 'react';

const makeQuestion = () => {
  return [
    { question: '도', answer: 'C' },
    { question: '레', answer: 'D' },
    { question: '미', answer: 'E' },
    { question: '파', answer: 'F' },
    { question: '솔', answer: 'G' },
    { question: '라', answer: 'A' },
    { question: '시', answer: 'B' },
  ].sort(() => Math.random() - 0.5);
};

const shuffle = () => {
  return ['C', 'D', 'E', 'F', 'G', 'A', 'B'].sort(() => Math.random() - 0.5);
};

export const KoreanToEnglishPage = () => {
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
      <Navbar title="음이름 외우기 (한국어 → 영어)" left={<NavbarBackLink text="돌아가기" onClick={() => navigate('/')} />} />

      <BlockTitle>다음 음이름은 영어로 무엇인가요?</BlockTitle>

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
