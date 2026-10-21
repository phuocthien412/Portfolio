import React from "react";
import { Link } from "react-router-dom";

interface SpaceGlowButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const SpaceGlowButton: React.FC<SpaceGlowButtonProps> = ({
  to,
  href,
  onClick,
  className = "",
  children,
  icon,
}) => {
  const content = (
    <span className="btn-space-glow-inner">
      <span className="btn-space-stars" />
      {icon && <span className="relative z-10 shrink-0">{icon}</span>}
      <span className="relative z-10 whitespace-nowrap">{children}</span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={`btn-space-glow ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-space-glow ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`btn-space-glow ${className}`}>
      {content}
    </button>
  );
};
