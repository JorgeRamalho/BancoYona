export function ThemeInit() {
  const script = `(function(){try{var s=localStorage.getItem("yona-theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=s||(d?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
