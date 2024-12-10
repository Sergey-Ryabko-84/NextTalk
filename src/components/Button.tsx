"use client";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  testId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, onClick, type = "submit", testId, ...props }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      data-testid={testId}
      className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      {...props}>
      {children}
    </button>
  );
};
