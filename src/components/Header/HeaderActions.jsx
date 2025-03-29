import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitch from "./LanguageSwitch";

function HeaderActions() {
  return (
    <header className="w-full flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 bg-white dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <Separator />
      <LanguageSwitch />
    </header>
  );
}

function Separator() {
  return <span className="hidden sm:inline-block text-xl font-bold text-gray-400 px-2">|</span>;
}

export default HeaderActions;
