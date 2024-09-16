import Link from "next/link";

const Button = ({ label, type, link }) => {
  // type => 'primary', 'secondary'

  const buttonClass =
    type == "primary"
      ? "bg-primary text-light"
      : type == "secondary"
      ? "bg-light text-primary border-2 border-primary"
      : "text-secondary";

  return (
    <div className={`rounded-full text-xl px-6 py-4 ${buttonClass}`}>
      <Link href={link}>{label}</Link>
    </div>
  );
};

export default Button;
