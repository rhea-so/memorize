import { useEffect, useRef } from 'react';

export const Staff = ({ notes, isHigh, hint }: { notes: string[]; isHigh: boolean; hint: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;

    const lineHeight = 20;
    const lineCount = 5;

    const leftPadding = lineHeight * 4;
    const topPadding = lineHeight * 2;
    const bottomPadding = lineHeight * 2;

    const width = 800 + leftPadding;
    const height = lineHeight * lineCount + topPadding + bottomPadding;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';

    // draw lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    for (let i = 0; i < lineCount; i++) {
      ctx.beginPath();
      ctx.moveTo(0, topPadding + i * lineHeight);
      ctx.lineTo(width, topPadding + i * lineHeight);
      ctx.stroke();
    }

    // draw end lines
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(width, topPadding);
    ctx.lineTo(width, height - bottomPadding - lineHeight);
    ctx.stroke();

    ctx.lineWidth = 15;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, topPadding);
    ctx.lineTo(0, height - bottomPadding - lineHeight);
    ctx.stroke();

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(width - 15, topPadding);
    ctx.lineTo(width - 15, height - bottomPadding - lineHeight);
    ctx.stroke();

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo((width - leftPadding) / 2 + leftPadding, topPadding);
    ctx.lineTo((width - leftPadding) / 2 + leftPadding, height - bottomPadding - lineHeight);
    ctx.stroke();

    // draw notes
    notes.forEach((note, i) => {
      const x = ((width - leftPadding - lineHeight * 2) / 2 / 4) * i + lineHeight * 2.75 + (i > 3 ? lineHeight : 0) + leftPadding;
      const y =
        height -
        (isHigh
          ? note === 'C'
            ? lineHeight * 0
            : note === 'C#/D♭'
            ? lineHeight * 0
            : note === 'D'
            ? lineHeight * 0.5
            : note === 'D#/E♭'
            ? lineHeight * 0.5
            : note === 'E'
            ? lineHeight * 1
            : note === 'F'
            ? lineHeight * 1.5
            : note === 'F#/G♭'
            ? lineHeight * 1.5
            : note === 'G'
            ? lineHeight * 2
            : note === 'G#/A♭'
            ? lineHeight * 2
            : note === 'A'
            ? lineHeight * 2.5
            : note === 'A#/B♭'
            ? lineHeight * 2.5
            : lineHeight * 3
          : note === 'C'
          ? lineHeight * 2.5
          : note === 'C#/D♭'
          ? lineHeight * 2.5
          : note === 'D'
          ? lineHeight * 3
          : note === 'D#/E♭'
          ? lineHeight * 3
          : note === 'E'
          ? lineHeight * 3.5
          : note === 'F'
          ? lineHeight * 4
          : note === 'F#/G♭'
          ? lineHeight * 4
          : note === 'G'
          ? lineHeight * 4.5
          : note === 'G#/A♭'
          ? lineHeight * 4.5
          : note === 'A'
          ? lineHeight * 5
          : note === 'A#/B♭'
          ? lineHeight * 5
          : lineHeight * 5.5) -
        bottomPadding +
        lineHeight / 2;

      // draw note using bezier curve
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + lineHeight, y, x + lineHeight, y - lineHeight, x, y - lineHeight);
      ctx.bezierCurveTo(x - lineHeight, y - lineHeight, x - lineHeight, y, x, y);
      ctx.fillStyle = 'black';
      ctx.fill();

      // draw note line
      if (isHigh) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        switch (note) {
          case 'C':
            ctx.beginPath();
            ctx.moveTo(x - lineHeight, y - lineHeight / 2);
            ctx.lineTo(x + lineHeight, y - lineHeight / 2);
            ctx.stroke();
            break;
        }
        if (note === 'B') {
          ctx.beginPath();
          ctx.moveTo(x - lineHeight * 0.7, y + lineHeight * 3);
          ctx.lineTo(x - lineHeight * 0.7, y - lineHeight * 0.5);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(x + lineHeight * 0.7, y - lineHeight * 4);
          ctx.lineTo(x + lineHeight * 0.7, y - lineHeight * 0.5);
          ctx.stroke();
        }
      } else {
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        if (note !== 'C') {
          ctx.beginPath();
          ctx.moveTo(x - lineHeight * 0.7, y + lineHeight * 3);
          ctx.lineTo(x - lineHeight * 0.7, y - lineHeight * 0.5);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(x + lineHeight * 0.7, y - lineHeight * 4);
          ctx.lineTo(x + lineHeight * 0.7, y - lineHeight * 0.5);
          ctx.stroke();
        }
      }

      // draw hint
      if (hint) {
        ctx.font = '20px Barlow';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(note, x, height);
      }
    });

    // draw clef
    if (isHigh) {
      ctx.font = '200px Barlow';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('𝄞', 15, lineHeight * 0.35 + (lineHeight * lineCount) / 2);
    } else {
      ctx.font = '135px Barlow';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('𝄢', 15, lineHeight * 0.85 + (lineHeight * lineCount) / 2);
    }
  }, [hint, isHigh, notes]);

  return <canvas style={{ width: '100%', maxWidth: 800 }} ref={canvasRef} />;
};
