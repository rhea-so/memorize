import { Navbar, NavbarBackLink, Page } from 'konsta/react';
import { useNavigate } from 'react-router-dom';

export const KoreanToEnglishPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Navbar title="음이름 외우기 (한국어 → 영어)" left={<NavbarBackLink text="돌아가기" onClick={() => navigate('/')} />} />
    </Page>
  );
};
