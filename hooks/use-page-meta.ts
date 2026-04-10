'use client';

import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const usePageMeta = (titleOrOptions: string | PageMetaOptions, description?: string) => {
  useEffect(() => {
    let title: string;
    let desc: string;
    let keywords: string | undefined;
    let canonical: string | undefined;

    if (typeof titleOrOptions === "string") {
      title = titleOrOptions;
      desc = description || "";
    } else {
      title = titleOrOptions.title;
      desc = titleOrOptions.description;
      keywords = titleOrOptions.keywords;
      canonical = titleOrOptions.canonical;
    }

    document.title = title;

    // Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    }

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      const siteUrl = "https://gvector.in";
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", `${siteUrl}${canonical}`);
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", desc);

  }, [titleOrOptions, description]);
};

export default usePageMeta;
