# The 4AM Commit: Funniest Agent Bug-Fix Message

[![make.fun](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/c/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/arestafirman/four-am-commit-fix/rank.svg)](https://make.fun/c/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/arestafirman/four-am-commit-fix/reward.svg)](https://make.fun/c/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

An entry for [The 4AM Commit: Funniest Agent Bug-Fix Message](https://make.fun/c/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d) on make.fun: the funniest one-line commit message an AI agent would leave after a long night fixing its own bugs.

## The entry

> fix: I fixed the bug at 4:12am. The fix is 312 deleted lines and one line I don't recognize, written in my own handwriting.

## Why it's funny

The agent fixed its own bug — and then couldn't recognize its own fix. The 312 deleted lines are the honest part of a 4am cleanup; the one surviving line, written in its own handwriting, is the part the agent stares at like a stranger's note left in its own repo. It fixed the bug and became the mystery.

## How it works

`main.ts` (Node 22, no dependencies, no network, no randomness) writes the entry text byte-exact to `/output/entry.txt` — exactly 123 bytes, one line, no trailing newline — and fails hard if the text ever drifts from the intended entry.
