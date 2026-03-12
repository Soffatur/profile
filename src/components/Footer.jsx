export default function Footer({ color = 'bg-white'}) {
  return (
    <footer className={`${color} dark:bg-gray-200 border-t border-gray-200 dark:border-gray-200 w-full mt-auto`}>
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-500 text-center w-full">
          © 2025 Muhammad Soffatur Rohman | Made with cup of ☕ in Semarang, Indonesia
        </span>
      </div>
    </footer>
  );
}