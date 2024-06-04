import JSConfetti from 'js-confetti';
import { Block, BlockTitle, Card, List, ListItem, Navbar, NavbarBackLink, Page, Toggle } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { QuestionButton } from '../../components/question.button';
import { useState } from 'react';
import { Fretboard } from '../../components/fretboard.canvas';

const jsConfetti = new JSConfetti();

const fretboard1 = [
  ['G', 'G#/A♭', 'A', 'A#/B♭'],
  ['D', 'D#/E♭', 'E', 'F'],
  ['A', 'A#/B♭', 'B', 'C'],
  ['E', 'F', 'F#/G♭', 'G'],
];

const fretboard2 = [
  ['B', 'C', 'C#/D♭', 'D'],
  ['F#/G♭', 'G', 'G#/A♭', 'A'],
  ['C#/D♭', 'D', 'D#/E♭', 'E'],
  ['G#/A♭', 'A', 'A#/B♭', 'B'],
];

const fretboard3 = [
  ['D#/E♭', 'E', 'F', 'F#/G♭'],
  ['A#/B♭', 'B', 'C', 'C#/D♭'],
  ['F', 'F#/G♭', 'G', 'G#/A♭'],
  ['C', 'C#/D♭', 'D', 'D#/E♭'],
];

const shuffleFretboard = () => {
  return Math.random() < 0.33 ? fretboard1 : Math.random() < 0.66 ? fretboard2 : fretboard3;
};

export const OpenChordToFret11Page = () => {
  const navigate = useNavigate();

  const shuffle = (fretboard: string[][]) => {
    return fretboard
      .flat()
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort(() => Math.random() - 0.5);
  };

  const randomPositionX = (fretboard: string[][]) => {
    return Math.floor(Math.random() * fretboard[0].length);
  };

  const randomPositionY = (fretboard: string[][]) => {
    return Math.floor(Math.random() * fretboard.length);
  };

  const defaultFretboard = shuffleFretboard();
  const [fretboard, setFretboard] = useState<string[][]>(defaultFretboard);
  const [options, setOptions] = useState<string[]>(shuffle(defaultFretboard));
  const [wrongOptions, setWrongOptions] = useState<string[]>([]);
  const [x, setX] = useState(randomPositionX(defaultFretboard));
  const [y, setY] = useState(randomPositionY(defaultFretboard));
  const [hint, setHint] = useState(false);

  const onClick = (answer: string) => {
    if (answer === fretboard[y][x]) {
      jsConfetti.addConfetti({
        emojis: ['🎉', '✅', '👍'],
        emojiSize: 100,
        confettiNumber: 10,
      });
      const newFretboard = shuffleFretboard();
      setFretboard(newFretboard);
      setOptions(shuffle(newFretboard));
      setWrongOptions([]);
      let nextX = randomPositionX(newFretboard);
      let nextY = randomPositionY(newFretboard);
      while (nextX === x && nextY === y) {
        nextX = randomPositionX(newFretboard);
        nextY = randomPositionY(newFretboard);
      }
      setX(nextX);
      setY(nextY);
    } else {
      setWrongOptions([...wrongOptions, answer]);
    }
  };

  return (
    <Page>
      <Navbar title="전체" left={<NavbarBackLink text="돌아가기" onClick={() => navigate('/')} />} />

      <BlockTitle>다음 빨간색 원에 해당하는 음이름은 무엇인가요?</BlockTitle>

      <Card className="my-8 flex justify-center">
        <Fretboard
          hint={hint}
          nut={fretboard === fretboard1 ? true : fretboard === fretboard2 ? false : fretboard === fretboard3 ? false : false}
          pointer={{ x: x, y: y }}
          dots={
            fretboard === fretboard1
              ? [{ x: 2, type: 1 }]
              : fretboard === fretboard2
              ? [
                  { x: 0, type: 1 },
                  { x: 2, type: 1 },
                ]
              : fretboard === fretboard3
              ? [
                  { x: 0, type: 1 },
                  { x: 3, type: 2 },
                ]
              : []
          }
          start={fretboard === fretboard1 ? 0 : fretboard === fretboard2 ? 4 : fretboard === fretboard3 ? 8 : 0}
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
