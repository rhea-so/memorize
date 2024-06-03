import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListPage } from './pages/list.page';
import { EnglishToKoreanPage } from './pages/01-pitch-name/english-to-korean.page';
import { KoreanToEnglishPage } from './pages/01-pitch-name/korean-to-english.page';
import { OpenChordToFret3Page } from './pages/02-bass-guitar-fretboard/open-chord-to-fret-3';
import { Fret4ToFret8Page } from './pages/02-bass-guitar-fretboard/fret-4-to-fret-8';
import { Fret9ToFret12Page } from './pages/02-bass-guitar-fretboard/fret-9-to-fret-12';
import { OpenChordToFret12Page } from './pages/02-bass-guitar-fretboard/open-chord-to-fret-12';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />

        <Route path="/pitch-name/korean-to-english" element={<KoreanToEnglishPage />} />
        <Route path="/pitch-name/english-to-korean" element={<EnglishToKoreanPage />} />

        <Route path="/bass-guitar-fretboard/open-chord-to-fret-3" element={<OpenChordToFret3Page />} />
        <Route path="/bass-guitar-fretboard/fret-4-to-fret-8" element={<Fret4ToFret8Page />} />
        <Route path="/bass-guitar-fretboard/fret-9-to-fret-12" element={<Fret9ToFret12Page />} />
        <Route path="/bass-guitar-fretboard/open-chord-to-fret-12" element={<OpenChordToFret12Page />} />
      </Routes>
    </BrowserRouter>
  );
};
