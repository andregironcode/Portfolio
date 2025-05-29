const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-3">
        <a href="https://github.com/andregironcode" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-black-500 transition-colors">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© {new Date().getFullYear()} Andre. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
