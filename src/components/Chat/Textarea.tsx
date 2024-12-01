"use client";

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      rows={2}
      className="w-full p-3 pl-4 pr-10 rounded-tl-lg rounded-tr-lg border border-gray-300 focus:outline-none focus:ring-0 resize-none"
    />
  );
};
