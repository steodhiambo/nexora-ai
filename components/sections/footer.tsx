import { Container } from "@/components/ui/container";

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      "Lead Generation",
      "AI Chatbots",
      "WhatsApp Automation",
      "CRM Automation",
      "AI Agents",
      "Sales Automation",
    ],
  },
  industries: {
    title: "Industries",
    links: [
      "Education",
      "Real Estate",
      "Healthcare",
      "Recruitment",
      "Travel & Hospitality",
      "E-commerce",
    ],
  },
  company: {
    title: "Company",
    links: ["About Us", "Contact", "Blog", "Careers", "Partners"],
  },
};

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <Container className="py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Nexora AI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building Intelligent Growth Systems For Modern Businesses
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "YouTube", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-500 flex items-center justify-center text-slate-400 hover:text-white transition-all text-xs font-medium"
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-primary-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Nexora AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-primary-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-primary-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-primary-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
