import { describe, expect, it } from 'vitest';
import { joinContinuations, splitAtBreaks } from './joinContinuations';

describe('joinContinuations', () => {
  it('joins continued lines and records each break with its indent', () => {
    const { code, breaks } = joinContinuations('mod run . --recipe X \\\n  -P "a=1" \\\n    -P "b=2"\n');
    expect(code).toBe('mod run . --recipe X -P "a=1" -P "b=2"\n');
    expect(breaks.get('mod run . --recipe X -P "a=1" -P "b=2"')).toEqual([
      { offset: 21, indent: 2 },
      { offset: 30, indent: 4 },
    ]);
  });

  it('leaves comments and separate commands alone', () => {
    const source = '# Find it\nmod run . \\\n  -P "x=1"\n\nmod study .\n';
    const { code, breaks } = joinContinuations(source);
    expect(code).toBe('# Find it\nmod run . -P "x=1"\n\nmod study .\n');
    expect([...breaks.keys()]).toEqual(['mod run . -P "x=1"']);
  });

  it('leaves a block unjoined when a comment sits inside a continued command', () => {
    const source = 'docker run \\\n-e A=1 \\\n# Optional\n-e B=2 \\\nimage\n';
    expect(joinContinuations(source)).toEqual({ code: source, breaks: new Map() });
  });

  it('leaves a block unjoined when a comment line ends with a backslash', () => {
    const source = '# -e A=1 \\\n# -e B=2\nmod run .\n';
    expect(joinContinuations(source)).toEqual({ code: source, breaks: new Map() });
  });

  it('leaves a heredoc block unjoined', () => {
    const source = "cat <<'EOF' > run.sh\nmod run . \\\n  --recipe X\nEOF\n";
    expect(joinContinuations(source)).toEqual({ code: source, breaks: new Map() });
  });

  it('drops a dangling backslash at the end of the block', () => {
    expect(joinContinuations('java -jar app.jar \\\n--a=1 \\\n').code).toBe('java -jar app.jar --a=1');
  });

  it('returns unchanged code when nothing is continued', () => {
    expect(joinContinuations('mod config\nmod run .\n')).toEqual({ code: 'mod config\nmod run .\n', breaks: new Map() });
  });
});

describe('splitAtBreaks', () => {
  const marker = ({ offset }: { offset: number }) => `|${offset}|`;

  it('inserts a marker where a break falls inside the token', () => {
    expect(splitAtBreaks(' a:b c:d', 10, [{ offset: 11, indent: 2 }, { offset: 15, indent: 2 }], marker))
      .toEqual([' ', '|11|', 'a:b ', '|15|', 'c:d']);
  });

  it('returns null when no break falls inside the token', () => {
    expect(splitAtBreaks('--org', 0, [{ offset: 5, indent: 2 }], marker)).toBeNull();
  });
});
