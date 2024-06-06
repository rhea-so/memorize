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
import { FiveStringOpenChordToFret3Page } from './pages/04-5-string-guitar-fretboard/open-chord-to-fret-3';
import { FiveStringOpenChordToFret11Page } from './pages/04-5-string-guitar-fretboard/open-chord-to-fret-11';
import { FiveStringFret8ToFret11Page } from './pages/04-5-string-guitar-fretboard/fret-8-to-fret-11';
import { FiveStringFret4ToFret7Page } from './pages/04-5-string-guitar-fretboard/fret-4-to-fret-7';
import { SixStringFret8ToFret11Page } from './pages/04-6-string-guitar-fretboard/fret-8-to-fret-11';
import { SixStringOpenChordToFret11Page } from './pages/04-6-string-guitar-fretboard/open-chord-to-fret-11';
import { SixStringOpenChordToFret3Page } from './pages/04-6-string-guitar-fretboard/open-chord-to-fret-3';
import { SixStringFret4ToFret7Page } from './pages/04-6-string-guitar-fretboard/fret-4-to-fret-7';

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

        <Route path="/five-string-bass-guitar-fretboard/open-chord-to-fret-3" element={<FiveStringOpenChordToFret3Page />} />
        <Route path="/five-string-bass-guitar-fretboard/fret-4-to-fret-7" element={<FiveStringFret4ToFret7Page />} />
        <Route path="/five-string-bass-guitar-fretboard/fret-8-to-fret-11" element={<FiveStringFret8ToFret11Page />} />
        <Route path="/five-string-bass-guitar-fretboard/open-chord-to-fret-11" element={<FiveStringOpenChordToFret11Page />} />

        <Route path="/six-string-bass-guitar-fretboard/open-chord-to-fret-3" element={<SixStringOpenChordToFret3Page />} />
        <Route path="/six-string-bass-guitar-fretboard/fret-4-to-fret-7" element={<SixStringFret4ToFret7Page />} />
        <Route path="/six-string-bass-guitar-fretboard/fret-8-to-fret-11" element={<SixStringFret8ToFret11Page />} />
        <Route path="/six-string-bass-guitar-fretboard/open-chord-to-fret-11" element={<SixStringOpenChordToFret11Page />} />
      </Routes>
    </BrowserRouter>
  );
};
