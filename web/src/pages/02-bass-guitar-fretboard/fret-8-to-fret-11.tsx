import JSConfetti from 'js-confetti';
import { Block, BlockTitle, Card, List, ListItem, Navbar, NavbarBackLink, Page, Toggle } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { QuestionButton } from '../../components/question.button';
import { useState } from 'react';
import { Fretboard } from '../../components/fretboard.canvas';

const fretboard = [
  ['E♭', 'E', 'F', 'G♭'],
  ['B♭', 'B', 'C', 'D♭'],
  ['F', 'G♭', 'G', 'A♭'],
  ['C', 'D♭', 'D', 'E♭'],
];

const shuffle = () => {
  return fretboard
    .flat()
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort(() => Math.random() - 0.5);
};

const randomPositionX = () => {
  return Math.floor(Math.random() * fretboard[0].length);
};

const randomPositionY = () => {
  return Math.floor(Math.random() * fretboard.length);
};

export const Fret8ToFret11Page = () => {
  const jsConfetti = new JSConfetti();
  const navigate = useNavigate();

  const [options, setOptions] = useState<string[]>(shuffle());
  const [wrongOptions, setWrongOptions] = useState<string[]>([]);
  const [x, setX] = useState(randomPositionX());
  const [y, setY] = useState(randomPositionY());
  const [hint, setHint] = useState(false);

  const onClick = (answer: string) => {
    if (answer === fretboard[y][x]) {
      jsConfetti.addConfetti({
        emojis: ['🎉', '✅', '👍'],
        emojiSize: 100,
        confettiNumber: 10,
      });
      setOptions(shuffle());
      setWrongOptions([]);
      let nextX = randomPositionX();
      let nextY = randomPositionY();
      while (nextX === x && nextY === y) {
        nextX = randomPositionX();
        nextY = randomPositionY();
      }
      setX(nextX);
      setY(nextY);
    } else {
      setWrongOptions([...wrongOptions, answer]);
    }
  };

  return (
    <Page>
      <Navbar title="8프렛 → 11프렛" left={<NavbarBackLink text="돌아가기" onClick={() => navigate('/')} />} />

      <BlockTitle>다음 빨간색 원에 해당하는 음이름은 무엇인가요?</BlockTitle>

      <Card className="my-8 flex justify-center">
        <Fretboard
          hint={hint}
          nut={false}
          pointer={{ x: x, y: y }}
          dots={[
            { x: 0, type: 1 },
            { x: 3, type: 2 },
          ]}
          start={8}
          fretboard={fretboard}
        />
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
