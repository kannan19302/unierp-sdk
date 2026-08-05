# unierp-sdk

**Layer L1** of the UniERP layered repository architecture
(`PLATFORM_ARCHITECTURE.md` § 4.2). Publishes `@unierp/sdk`.

Depends on: L0 (`@unerp/contracts`).

## What lives here

The typed, retrying, tenant-aware client third parties install.

## The invariant

Different consumers (third parties), different cadence, and it must be installable WITHOUT the platform. Generated from L0, never hand-written — the SDK follows the API, not the platform train (§ 7.3).

**A repository may depend only on published artifacts of a strictly lower
layer. Never sideways within a layer. Never upward.** A cycle is not
discouraged here — it is unrepresentable, because the lower layer's package
cannot name the higher one.

## Extraction status

Extracted from the `ERPSys` monorepo as § 14 Phase 3.2.

**The monorepo copy is still authoritative.** Per § 14, consumers switch to the
published package only once that package is publishable, and the monorepo stays
buildable at each extraction tag until they do. Until a registry is available
this repository is the extraction target, not the source of truth.

Rollback is a one-line `pnpm` override pointing consumers back at the
workspace path.
