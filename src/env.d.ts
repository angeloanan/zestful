/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/client" />

interface ImportMetaEnv {
  readonly ADMIN_PASSWORD: string
  readonly SITE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
