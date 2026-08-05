# unierp-sdk

**Layer L1 — Foundation** of the [UniERP](../unierp-platform) platform.
Depends on: L0.

## What this is

The typed, retrying, tenant-aware client third parties install. TypeScript, Python, Java, Go and Dart, all generated from the contracts.

## The invariant this repository owns

Must be installable **without** the platform, and versions on its own cadence — it follows the API, not the release train.

## The rule that applies everywhere

A repository may depend only on published artifacts of a **strictly lower
layer** — never sideways within a layer, never upward. A cycle is not
discouraged; it is unrepresentable, because the lower layer's package cannot
name the higher one.

See the [platform overview](../unierp-platform/README.md) for the full map, and
[`PLATFORM_ARCHITECTURE.md`](../ERPSys/docs/PLATFORM_ARCHITECTURE.md) § 4.2 for
the reasoning.

## Licence

AGPL-3.0.
