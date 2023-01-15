import Link from "next/link";
import { FC, MouseEventHandler, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  url?: string;
  type?: string;
}

export const Button: FC<ButtonProps> = ({
  type,
  url = "",
  children,
  onClick,
}) => {
  return (
    <>
      {url ? (
        <Link href={url} className={`btn ${type}`}>
          <div className={`btn-ctn`}>
            <span className="btn-text">{children}</span>
          </div>
        </Link>
      ) : (
        <button onClick={onClick} className={`btn ${type}`}>
          <div className={`btn-ctn`}>
            <span className="btn-text">{children}</span>
          </div>
        </button>
      )}
    </>
  );
};
