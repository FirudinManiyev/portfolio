import { useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

interface TypewriterAnimationProps {
  words: string[];
  className?: string;
}

export default function TypewriterAnimation({ words, className = '' }: TypewriterAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const sequence = words.flatMap((word) => [word, 2000]).slice(0, -1);

  if (shouldReduceMotion) {
    return <span className={className}>{words[0] ?? ''}</span>;
  }

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
