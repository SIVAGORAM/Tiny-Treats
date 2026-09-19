import React from "react";
import { JsonLd, getOrganizationSchema } from "./json-ld";

export function OrganizationSchema() {
  const schema = getOrganizationSchema();
  return <JsonLd id="organization-schema" data={schema} />;
}

