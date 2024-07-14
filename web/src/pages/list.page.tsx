import { BlockTitle, Link, List, ListItem, Navbar, Page } from 'konsta/react';
import { useNavigate } from 'react-router-dom';

export const ListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Page>
        <Navbar
          title="베이스토모"
          subtitle="뉴비 베이시스트들을 위한 퀴즈 서비스"
          right={
            <Link toolbar onClick={() => window.open('https://github.com/yurucam/bass-tomo')}>
              GitHub
            </Link>
          }
        />

        <BlockTitle>음이름 외우기</BlockTitle>
        <List strongIos outlineIos>
          <ListItem link title="도레미파솔라시 → CDEFGAB" onClick={() => navigate('/pitch-name/korean-to-english')} />
          <ListItem link title="CDEFGAB → 도레미파솔라시" onClick={() => navigate('/pitch-name/english-to-korean')} />
        </List>

        <BlockTitle>오선보</BlockTitle>
        <List strongIos outlineIos>
          <ListItem link title="낮은음자리표 음이름 맞추기" onClick={() => navigate('/staff/f-clef-pitch-name')} />
          <ListItem link title="높은음자리표 음이름 맞추기" onClick={() => navigate('/staff/g-clef-pitch-name')} />
        </List>

        <BlockTitle>4현 베이스 기타 지판 암기 (EADG Standard Tuning)</BlockTitle>
        <List strongIos outlineIos>
          <ListItem link title="개방현 ~ 3프렛" onClick={() => navigate('/bass-guitar-fretboard/open-chord-to-fret-3')} />
          <ListItem link title="4프렛 ~ 7프렛" onClick={() => navigate('/bass-guitar-fretboard/fret-4-to-fret-7')} />
          <ListItem link title="8프렛 ~ 11프렛" onClick={() => navigate('/bass-guitar-fretboard/fret-8-to-fret-11')} />
          <ListItem link title="전체" onClick={() => navigate('/bass-guitar-fretboard/open-chord-to-fret-11')} />
          <ListItem link title="지판 누르기" onClick={() => navigate('/press-fretboard')} />
        </List>

        <BlockTitle>5현 베이스 기타 지판 암기 (BEADG Standard Tuning)</BlockTitle>
        <List strongIos outlineIos>
          <ListItem link title="개방현 ~ 3프렛" onClick={() => navigate('/five-string-bass-guitar-fretboard/open-chord-to-fret-3')} />
          <ListItem link title="4프렛 ~ 7프렛" onClick={() => navigate('/five-string-bass-guitar-fretboard/fret-4-to-fret-7')} />
          <ListItem link title="8프렛 ~ 11프렛" onClick={() => navigate('/five-string-bass-guitar-fretboard/fret-8-to-fret-11')} />
          <ListItem link title="전체" onClick={() => navigate('/five-string-bass-guitar-fretboard/open-chord-to-fret-11')} />
        </List>

        <BlockTitle>6현 베이스 기타 지판 암기 (BEADGC Standard Tuning)</BlockTitle>
        <List strongIos outlineIos>
          <ListItem link title="개방현 ~ 3프렛" onClick={() => navigate('/six-string-bass-guitar-fretboard/open-chord-to-fret-3')} />
          <ListItem link title="4프렛 ~ 7프렛" onClick={() => navigate('/six-string-bass-guitar-fretboard/fret-4-to-fret-7')} />
          <ListItem link title="8프렛 ~ 11프렛" onClick={() => navigate('/six-string-bass-guitar-fretboard/fret-8-to-fret-11')} />
          <ListItem link title="전체" onClick={() => navigate('/six-string-bass-guitar-fretboard/open-chord-to-fret-11')} />
        </List>
      </Page>
    </>
  );
};
