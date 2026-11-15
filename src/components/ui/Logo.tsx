import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeConfig = {
  sm: {
    sankara: 'text-xl',
    kayika: 'text-xs',
    showTagline: false,
  },
  md: {
    sankara: 'text-2xl',
    kayika: 'text-sm',
    showTagline: false,
  },
  lg: {
    sankara: 'text-4xl',
    kayika: 'text-lg',
    showTagline: true,
  },
};

export default function Logo({ size = 'md', className }: LogoProps) {
  const config = sizeConfig[size];

  return (
    <Link href="/" className={cn('flex flex-col items-start leading-tight', className)}>
      <span
        className={cn(
          'font-heading tracking-widest text-antique-gold font-semibold',
          config.sankara
        )}
      >
        Sankara
      </span>
      <span
        className={cn(
          'font-heading text-antique-gold font-medium tracking-wide',
          config.kayika
        )}
      >
        Kayika Kalamandalam
      </span>
      {config.showTagline && (
        <span className="font-body text-[10px] uppercase tracking-widest text-antique-gold/70 mt-0.5">
          Dance &amp; Music Academy
        </span>
      )}
    </Link>
  );
}
