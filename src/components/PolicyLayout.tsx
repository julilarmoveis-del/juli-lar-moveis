import { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

export function PolicyLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-ink">{title}</h1>
      <p className="mt-2 text-xs text-text-muted">
        Última atualização: {updatedAt} · {siteConfig.brandName}
      </p>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-text-muted [&>h2]:font-heading [&>h2]:text-base [&>h2]:font-semibold [&>h2]:text-ink [&>h2]:mt-8 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1">
        {children}
      </div>
    </div>
  );
}
