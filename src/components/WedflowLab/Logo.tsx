export const LOGO_URL =
  "https://res.cloudinary.com/dznfeewmc/image/upload/q_90,f_webp,w_200/v1774520964/wedflow_logo_jqr2vq.png";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 44, className = "" }: LogoProps) => (
  <img
    src={LOGO_URL}
    alt="WedflowLab"
    className={`wfl-logo-img ${className}`}
    width={size}
    height={size}
    style={{ objectFit: "contain", display: "block", background: "transparent" }}
  />
);

export default Logo;
