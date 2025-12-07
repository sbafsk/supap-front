# Pre-Commit Hook Setup

This project has a pre-commit hook configured to ensure code quality before commits.

## What it does

The pre-commit hook automatically runs the following checks:

1. **Type-check** (`yarn type-check`) - Ensures there are no TypeScript errors
2. **Lint** (`yarn lint`) - Checks code style and catches potential issues
3. **Build** (`yarn build`) - Verifies the project builds successfully

## How it works

The hook is located at `.git/hooks/pre-commit` and runs automatically before every commit.

If any check fails, the commit will be blocked and you'll need to fix the issues before committing.

## Setup for new developers

The pre-commit hook is already configured in this repository. However, since `.git/hooks/` is not tracked by Git, new developers need to set it up:

```bash
# Make sure the hook is executable
chmod +x .git/hooks/pre-commit
```

If the pre-commit file doesn't exist, create it with the following content:

```bash
#!/bin/bash

# Pre-commit hook to run type-check, lint, and build
# This ensures code quality before committing

echo "Running pre-commit checks..."
echo ""

# Run type-check
echo "1/3 Running type-check..."
yarn type-check
if [ $? -ne 0 ]; then
  echo "❌ Type-check failed. Please fix type errors before committing."
  exit 1
fi
echo "✅ Type-check passed"
echo ""

# Run lint
echo "2/3 Running lint..."
yarn lint
if [ $? -ne 0 ]; then
  echo "❌ Lint failed. Please fix linting errors before committing."
  exit 1
fi
echo "✅ Lint passed"
echo ""

# Run build
echo "3/3 Running build..."
yarn build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix build errors before committing."
  exit 1
fi
echo "✅ Build passed"
echo ""

echo "✅ All pre-commit checks passed! Proceeding with commit..."
exit 0
```

## Bypassing the hook (not recommended)

In rare cases where you need to bypass the hook (not recommended):

```bash
git commit --no-verify -m "your message"
```

## Benefits

- Catches issues early before they reach code review
- Ensures consistent code quality across the team
- Prevents broken builds from being committed
- Saves time in the CI/CD pipeline
