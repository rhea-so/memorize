import { Navbar, NavbarBackLink, Page } from 'konsta/react';
import { useNavigate } from 'react-router-dom';

export const OpenChordToFret3Page = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Navbar title="베이스 기타 지판 암기 (개방현 → 3프렛)" left={<NavbarBackLink text="돌아가기" onClick={() => navigate('/')} />} />
    </Page>
  );
};
