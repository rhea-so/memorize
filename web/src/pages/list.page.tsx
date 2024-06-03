import { BlockTitle, List, ListItem, Navbar, Page } from 'konsta/react';
import { useNavigate } from 'react-router-dom';

export const ListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Page>
        <Navbar title="문제 풀기" />

        <BlockTitle>음이름 외우기</BlockTitle>
        <List strongIos outlineIos>
          <ListItem link title="도레미파솔라시 → CDEFGAB" onClick={() => navigate('/pitch-name/korean-to-english')} />
          <ListItem link title="CDEFGAB → 도레미파솔라시" onClick={() => navigate('/pitch-name/english-to-korean')} />
        </List>

        <BlockTitle>베이스 기타 지판 암기 (EADG Standard Tuning)</BlockTitle>
        <List strongIos outlineIos>
          <ListItem link title="개방현 ~ 3프렛" onClick={() => navigate('/bass-guitar-fretboard/open-chord-to-fret-3')} />
          <ListItem link title="4프렛 ~ 7프렛" onClick={() => navigate('/bass-guitar-fretboard/fret-4-to-fret-7')} />
          <ListItem link title="8프렛 ~ 11프렛" onClick={() => navigate('/bass-guitar-fretboard/fret-8-to-fret-11')} />
          <ListItem link title="전체" onClick={() => navigate('/bass-guitar-fretboard/open-chord-to-fret-11')} />
        </List>
      </Page>
    </>
  );
};
