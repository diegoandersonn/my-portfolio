import { ReactNode } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

type ContainerProps = {
  children: ReactNode;
};
export function DropdownListContainer({ children }: ContainerProps) {
  return <ul className="text-sm font-bold text-white">{children}</ul>;
}

type ItemProps<T> = {
  text: string;
  icon: ReactNode | string;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  value: T;
};

export function DropdownListItem<T>({ setValue, text, value, icon }: ItemProps<T>) {
  return (
    <li
      onClick={() => setValue(value)}
      className="flex items-center p-2 justify-start gap-2 border-t-2 border-zinc-500 cursor-pointer hover:scale-110 hover:text-zinc-400"
    >
      <div className="rounded-full w-10 h-10 bg-zinc-500 p-1 group-hover:scale-110 flex items-center justify-center text-xl">
        {icon}
      </div>
      {text}
    </li>
  );
}
type ItemsListProps = {
  isMenuOpen: boolean;
  children: ReactNode;
};
export function DropdownItemsListContainer({
  children,
  isMenuOpen,
}: ItemsListProps) {
  return (
    <ul
      data-active={isMenuOpen}
      className="hidden data-[active=true]:block"
    >
      {children}
    </ul>
  );
}

type HeadProps = {
  toggleMenu: () => void;
  children: ReactNode;
  isListOpen: boolean;
};

export function DropdownListHead({ toggleMenu, children, isListOpen }: HeadProps) {
  return (
    <li
      className="flex items-center p-2 justify-between gap-2 border-t-2 border-zinc-500 cursor-pointer group"
      onClick={toggleMenu}
    >
      {children}
      {isListOpen ? (
        <IoIosArrowForward size={24} className="group-hover:scale-125" />
      ) : (
        <IoIosArrowDown size={24} className="group-hover:scale-125" />
      )}
    </li>
  );
}
