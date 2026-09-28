const endpoints = [
  {
    label: "whatsapp",
    value: "+234 807 548 5827",
    href: "https://wa.me/2348075485827",
  },
  {
    label: "instagram",
    value: "@scoooter004",
    href: "https://www.instagram.com/scoooter004?stkn=MWw3aDF6amp2aHoxYg==",
  },
];

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] px-6 py-14 lg:px-16"
    >
      <p className="font-mono text-xs text-[#5B6472]">connect --endpoint</p>
      <h2 className="mt-4 text-2xl text-[#E4E7EB]">
        Open to new projects.
      </h2>

      <div className="mt-8 divide-y divide-white/[0.06] border-t border-white/[0.06]">
        {endpoints.map((endpoint) => (
          <a
            key={endpoint.label}
            href={endpoint.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-4 no-underline"
          >
            <span className="font-mono text-xs text-[#5B6472]">
              {endpoint.label}
            </span>
            <span className="text-[#E4E7EB] transition-colors group-hover:text-[#6FE3C9]">
              {endpoint.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
