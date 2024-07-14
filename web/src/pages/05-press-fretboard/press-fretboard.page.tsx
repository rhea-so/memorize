import { BlockTitle, Navbar, NavbarBackLink, Page } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const randomLine = () => {
  return Math.floor(Math.random() * 4) + 1;
};

const randomPitchName = () => {
  const pitches = ['C', 'C#', 'D♭', 'D', 'D#', 'E♭', 'E', 'F', 'F#', 'G♭', 'G', 'G#', 'A♭', 'A', 'A#', 'B♭', 'B'];
  return pitches[Math.floor(Math.random() * pitches.length)];
};

export const PressFretboardPage = () => {
  const navigate = useNavigate();

  const timeout = 10;

  const [line, setLine] = useState(randomLine());
  const [pitchName, setPitchName] = useState(randomPitchName());
  const [leftTime, setLeftTime] = useState(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      if (leftTime <= 1) {
        let newLine = randomLine();
        let newPitchName = randomPitchName();
        while (newLine === line && newPitchName === pitchName) {
          newLine = randomLine();
          newPitchName = randomPitchName();
        }
        setLine(newLine);
        setPitchName(newPitchName);
        setLeftTime(timeout);
      } else {
        setLeftTime((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [leftTime, setLine, setPitchName, setLeftTime]);

  return (
    <Page>
      <Navbar title="지판 누르기" left={<NavbarBackLink text="돌아가기" onClick={() => navigate('/')} />} />

      <BlockTitle>다음 음이름을 {leftTime}초 내로 누르세요</BlockTitle>

      <p className="text-center text-8xl font-bold my-8">
        {line}번 줄 {pitchName}
      </p>
    </Page>
  );
};
