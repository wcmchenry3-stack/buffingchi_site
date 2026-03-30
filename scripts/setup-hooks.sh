#!/usr/bin/env bash
# Install required git hooks for this project.
# Run once after cloning: bash scripts/setup-hooks.sh

set -euo pipefail

HOOKS_DIR="$(git rev-parse --git-dir)/hooks"

cat > "$HOOKS_DIR/pre-commit" << 'EOF'
#!/usr/bin/env bash
if ! command -v gitleaks &> /dev/null; then
  echo "WARNING: gitleaks not found — skipping local secret scan. Install via: https://github.com/gitleaks/gitleaks#installing"
  exit 0
fi
gitleaks protect --staged --redact
EOF

chmod +x "$HOOKS_DIR/pre-commit"
echo "pre-commit hook installed."
