import { Button } from 'konsta/react';

export const QuestionButton = ({ disabled: active, text, onClick }: { disabled: boolean; text: string; onClick: (text: string) => void }) => {
  return (
    <Button disabled={active} large onClick={() => onClick(text)}>
      {text}
    </Button>
  );
};
