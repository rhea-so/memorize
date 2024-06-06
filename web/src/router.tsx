import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListPage } from './pages/list.page';
import { EnglishToKoreanPage } from './pages/01-pitch-name/english-to-korean.page';
import { KoreanToEnglishPage } from './pages/01-pitch-name/korean-to-english.page';
import { OpenChordToFret3Page } from './pages/02-bass-guitar-fretboard/open-chord-to-fret-3';
import { Fret4ToFret7Page } from './pages/02-bass-guitar-fretboard/fret-4-to-fret-7';
import { Fret8ToFret11Page } from './pages/02-bass-guitar-fretboard/fret-8-to-fret-11';
import { OpenChordToFret11Page } from './pages/02-bass-guitar-fretboard/open-chord-to-fret-11';
import { FClefPitchNamePage } from './pages/03-staff/f-clef-pitch-name';
import { GClefPitchNamePage } from './pages/03-staff/g-clef-pitch-name';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />

        <Route path="/pitch-name/korean-to-english" element={<KoreanToEnglishPage />} />
        <Route path="/pitch-name/english-to-korean" element={<EnglishToKoreanPage />} />

        <Route path="/staff/g-clef-pitch-name" element={<GClefPitchNamePage />} />
        <Route path="/staff/f-clef-pitch-name" element={<FClefPitchNamePage />} />

        <Route path="/bass-guitar-fretboard/open-chord-to-fret-3" element={<OpenChordToFret3Page />} />
        <Route path="/bass-guitar-fretboard/fret-4-to-fret-7" element={<Fret4ToFret7Page />} />
        <Route path="/bass-guitar-fretboard/fret-8-to-fret-11" element={<Fret8ToFret11Page />} />
        <Route path="/bass-guitar-fretboard/open-chord-to-fret-11" element={<OpenChordToFret11Page />} />
      </Routes>
    </BrowserRouter>
  );
};
