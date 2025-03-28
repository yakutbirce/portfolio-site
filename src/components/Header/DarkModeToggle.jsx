import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitch from "./LanguageSwitch";

function DarkModeLanguageToggle() {
  return (
    <header className="sticky top-0 z-50 flex gap-4 justify-end items-center px-6 py-4 w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <Separator />
      <LanguageSwitch />
    </header>
  );
}

function Separator() {
  return <span className="text-xl font-bold text-gray-400 px-2">|</span>;
}

export default DarkModeLanguageToggle;
