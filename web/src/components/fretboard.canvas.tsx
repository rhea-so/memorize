import { useEffect, useRef } from 'react';

export const Fretboard = ({
  hint,
  fixPosition,
  fretboard,
  nut,
  pointer,
  dots,
  start,
}: {
  hint: boolean;
  fixPosition: boolean;
  fretboard: string[][];
  nut: boolean;
  pointer: { x: number; y: number };
  start: number;
  dots: { x: number; type: number }[];
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const lines = fretboard.length;
    const frets = fretboard[0].length;
    const widthGap = 120;
    const heightGap = 70;
    const paddingTop = 30;

    canvas.width = widthGap * frets;
    canvas.height = heightGap * lines + paddingTop;

    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw number
    ctx.font = '20px Barlow';
    ctx.textAlign = 'left';
    for (let i = 0; i < lines; i++) {
      ctx.fillText(`${i + start}프렛`, widthGap * i, paddingTop - 10);
    }

    // draw strings
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    for (let i = 0; i < lines; i++) {
      ctx.beginPath();
      ctx.moveTo(0, heightGap * i + paddingTop);
      ctx.lineTo(canvas.width, heightGap * i + paddingTop);
      ctx.stroke();
    }

    // draw frets
    for (let i = 1; i < frets; i++) {
      ctx.beginPath();
      ctx.moveTo((canvas.width / frets) * i, 0 + paddingTop);
      ctx.lineTo((canvas.width / frets) * i, canvas.height);
      ctx.stroke();
    }

    // draw nut
    if (nut) {
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(0, 0 + paddingTop);
      ctx.lineTo(0, canvas.height);
      ctx.stroke();

      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(10, 0 + paddingTop);
      ctx.lineTo(10, canvas.height);
      ctx.stroke();
    } else {
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0 + paddingTop);
      ctx.lineTo(0, canvas.height);
      ctx.stroke();
    }

    // draw bottom
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    // draw line
    for (let i = 0; i < lines; i++) {
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, heightGap * i + heightGap / 2 + paddingTop);
      ctx.lineTo(canvas.width, heightGap * i + heightGap / 2 + paddingTop);
      ctx.stroke();
      ctx.strokeStyle = 'black';
    }

    // draw fill circle
    for (const dot of dots) {
      ctx.strokeStyle = 'gray';
      ctx.fillStyle = '#e0e0e0';
      ctx.lineWidth = 1;
      if (dot.type === 1) {
        ctx.beginPath();
        ctx.arc(widthGap * dot.x + widthGap / 2, paddingTop + heightGap * (lines / 2), 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(widthGap * dot.x + widthGap / 2, paddingTop + heightGap * (lines / 2) - heightGap, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(widthGap * dot.x + widthGap / 2, paddingTop + heightGap * (lines / 2) + heightGap, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      }
    }

    // draw fretboard
    if (hint) {
      for (let i = 0; i < lines; i++) {
        for (let j = 0; j < frets; j++) {
          ctx.font = '15px Barlow';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          if (j === 0) {
            ctx.textAlign = 'left';
          }

          // fill white background
          ctx.fillStyle = 'white';
          const textWidth = ctx.measureText(fretboard[i][j]).width + 5;
          ctx.fillRect((canvas.width / frets) * j + 3 + (j === 0 ? 10 : 0) - (j === 0 ? 12 : textWidth / 2), heightGap * i + heightGap / 2 + paddingTop - 7.5, textWidth, 15);
          ctx.fillStyle = 'black';

          ctx.fillText(fretboard[i][j], (canvas.width / frets) * j + 3, heightGap * i + heightGap / 2 + paddingTop);
        }
      }
    }

    // draw question
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(widthGap * pointer.x - (pointer.x === 0 ? 0 : fixPosition ? widthGap / 2 : 0), heightGap * pointer.y + heightGap / 2 + paddingTop, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = 'black';
  }, [fretboard, nut, pointer, start, dots, hint, fixPosition]);

  return <canvas style={{ width: '100%', maxWidth: 120 * fretboard[0].length }} ref={canvasRef} />;
};
