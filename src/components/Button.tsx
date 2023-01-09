import React from "react";

type ButtonProps = {
  primary: boolean;
  backgroundColor: string;
  label: string;
  size?: "large";

  onClick?: () => void;
};

export const Button = ({
  primary = false,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className={`${
          primary && "bg-white border-pink-600 text-pink-600"
        } rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-yellow-400
          text-base font-medium text-slate-700`}
        style={{ backgroundColor }}
        {...props}
      >
        Login
      </button>

      <button
        type="button"
        className="rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-green-300 text-slate-800"
        style={{ backgroundColor }}
        {...props}
      >
        ButtonActive...
      </button>

      <button
        type="button"
        className="rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-red-200 text-slate-800"
        style={{ backgroundColor }}
        {...props}
      >
        ButtonDisabled...
      </button>
    </div>
  );
};

// DIFFERENT BUTTON STATES at some point
// export const ButtonActive = ({
//   primary = false,
//   backgroundColor: label,
//   ...props
// }: ButtonProps) => {
//   return (
//     <button
//       type="button"
//       //   className={`${
//       //     !primary && "bg-white border-pink-600 text-pink-600 hover:bg-gray-100"
//       //   } rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
//       style={{}}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

// export const ButtonDisabled = ({
//   tertiary = true,
//   backgroundColor: label,
//   ...props
// }: ButtonProps) => {
//   return (
//     <button
//       type="button"
//       //   className={`${
//       //     !primary && "bg-white border-pink-600 text-pink-600 hover:bg-gray-100"
//       //   } rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
//       style={{}}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };
