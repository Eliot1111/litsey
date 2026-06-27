import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export default function MagneticButton({
  href,
  children,
  variant = 'primary',
  className = '',
  icon = true,
  onClick,
  target,
  rel,
}) {
  const ref = useRef(null);

  const handlePointerMove = (event) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    node.style.setProperty('--magnetic-x', `${x * 0.14}px`);
    node.style.setProperty('--magnetic-y', `${y * 0.22}px`);
  };

  const handlePointerLeave = () => {
    const node = ref.current;
    if (!node) return;

    node.style.setProperty('--magnetic-x', '0px');
    node.style.setProperty('--magnetic-y', '0px');
  };

  const Element = href ? 'a' : 'button';

  return (
    <Element
      ref={ref}
      href={href}
      type={href ? undefined : 'button'}
      className={`magnetic-button magnetic-button--${variant} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} /> : null}
    </Element>
  );
}
