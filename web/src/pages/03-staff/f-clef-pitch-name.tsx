import JSConfetti from 'js-confetti';
import { Block, BlockTitle, Card, List, ListItem, Navbar, NavbarBackLink, Page, Toggle } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { QuestionButton } from '../../components/question.button';
import { useState } from 'react';
import { Staff } from '../../components/staff.canvas';

const jsConfetti = new JSConfetti();

const makeQuestion = () => {
  return ['C', 'D', 'E', 'F', 'G', 'A', 'B'].sort(() => Math.random() - 0.5);
};

export const FClefPitchNamePage = () => {
  const navigate = useNavigate();

  const [options, setOptions] = useState<string[]>(makeQuestion());
  const [question, setQuestion] = useState<string>(options[0]);
  const [wrongOptions, setWrongOptions] = useState<string[]>([]);
  const [hint, setHint] = useState(false);

  const onClick = (answer: string) => {
    if (answer === question) {
      jsConfetti.addConfetti({
        emojis: ['🎉', '✅', '👍'],
        emojiSize: 100,
        confettiNumber: 10,
      });
      let newOptions = makeQuestion();
      while (newOptions[0] === question) {
        newOptions = makeQuestion();
      }
      setOptions(newOptions);
      setQuestion(newOptions[0]!);
      setWrongOptions([]);
    } else {
      setWrongOptions([...wrongOptions, answer]);
    }
  };

  return (
    <Page>
      <Navbar title="낮은음자리표 음이름 맞추기" left={<NavbarBackLink text="돌아가기" onClick={() => navigate('/')} />} />

      <BlockTitle>다음 음표의 이름은 무엇인가요?</BlockTitle>

      <Card className="my-8 flex justify-center">
        <Staff notes={[question]} isHigh={false} hint={hint} />
      </Card>

      <BlockTitle>아래에서 정답을 선택해주세요</BlockTitle>

      <Block strongIos outlineIos className="grid grid-cols-3 gap-3">
        {options.map((option) => (
          <QuestionButton disabled={wrongOptions.includes(option)} key={option} text={option} onClick={onClick} />
        ))}
      </Block>

      <BlockTitle>도저히 기억이 안날때는...</BlockTitle>

      <List strongIos outlineIos>
        <ListItem label title="힌트" after={<Toggle checked={hint} onChange={() => setHint(!hint)} />} />
      </List>
    </Page>
  );
};
