---
inject: true
to: app/components/index.ts
append: true
---
export { default as <%= component %> } from './<%= folder %>/<%= component %>'