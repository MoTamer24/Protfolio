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
                imageClassName="object-contain p-4 group-hover:scale-105"
              />
              <div className="p-7">
                <BadgeCheck className="text-accent-2" size={20} />
                <h3 className="mt-4 text-base font-semibold">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{certificate.issuer}</p>
                {certificate.credential && (
                  <a
                    href={asset(certificate.credential)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/60 hover:text-accent"
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
