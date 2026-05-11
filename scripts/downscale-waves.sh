#!/bin/bash
# Downscale wave header background PNGs to a sensible size.
#
# The waves render at ~1067px wide on category index pages with
# opacity 0.3 and a 24px blur, so the source 4000px / 3-6MB files
# are massive overkill. Resize them in-place to 1600px wide (still
# >1.5x retina headroom for the rendered size) using macOS `sips`.

set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)/static/img/waves"
TARGET_WIDTH=1600

cd "$DIR"

for f in *.png; do
  before=$(stat -f%z "$f")
  sips --resampleWidth "$TARGET_WIDTH" "$f" > /dev/null
  after=$(stat -f%z "$f")
  printf "%-20s %8s -> %8s bytes\n" "$f" "$before" "$after"
done
