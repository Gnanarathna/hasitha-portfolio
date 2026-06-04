function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-6 px-6">
        <p className="text-center text-slate-400">
          &copy; {currentYear} Hasitha Anjana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
