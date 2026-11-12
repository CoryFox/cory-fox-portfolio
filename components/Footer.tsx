import Link from "next/link";
export function Footer() {
  return <footer className="portfolio-footer"><div className="portfolio-container footer-row"><div><Link href="/" className="footer-wordmark">Cory Fox</Link><p>Technical implementation, with people in mind.</p></div><nav aria-label="Footer"><Link href="/archive/">Earlier work</Link><Link href="/writing/">Writing</Link><a href="/cv/cory-fox-cv.pdf">Download CV</a><a href="mailto:coryowenfox@gmail.com">Contact</a></nav><small>© {new Date().getFullYear()} Cory Fox</small></div></footer>;
}
