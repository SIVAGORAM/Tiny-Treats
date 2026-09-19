import React from "react";
import { JsonLd, getBreadcrumbSchema, BreadcrumbItemInput } from "./json-ld";

export interface BreadcrumbItem extends BreadcrumbItemInput {}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = getBreadcrumbSchema(items);
  return <JsonLd id="breadcrumb-schema" data={schema} />;
}
