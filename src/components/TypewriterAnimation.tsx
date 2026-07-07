import { TypeAnimation } from 'react-type-animation';

interface TypewriterAnimationProps {
  words: string[];
  className?: string;
}

export default function TypewriterAnimation({ words, className = '' }: TypewriterAnimationProps) {
  const sequence = words.flatMap((word) => [word, 2000]).slice(0, -1);

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      deletionSpeed={30}
      repeat={Infinity}
      className={className}
    />
  );
}
