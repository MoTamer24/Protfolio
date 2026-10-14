import { BadgeCheck, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SmartImage from "@/components/SmartImage";
import SpotlightCard from "@/components/SpotlightCard";
import { asset } from "@/lib/asset";
import { certificates } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="05 — Credentials" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, i) => (
          <Reveal key={certificate.title} delay={i * 0.08}>
            <SpotlightCard className="group h-full overflow-hidden">
              <SmartImage
                src={certificate.image}
                alt={certificate.title}
                ratio="16/10"
                sizes="(max-width: 640px) 100vw, 33vw"
                className="border-b border-line bg-surface-2"
                imageClassName="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="p-6">
                <BadgeCheck className="text-accent" size={20} />
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{certificate.issuer}</p>
                {certificate.credential && (
                  <a
                    href={asset(certificate.credential)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-surface-2"
                  >
                    <ExternalLink size={13} />
                    View credential
                  </a>
                )}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
