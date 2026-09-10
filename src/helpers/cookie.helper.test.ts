import { afterEach, describe, expect, it } from 'vitest';
import { hasTrySeenCookie } from './cookie.helper';

const clearCookie = () => {
  document.cookie = 'moderne_try_seen=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
};

describe('hasTrySeenCookie', () => {
  afterEach(clearCookie);

  it('returns false when the cookie is not set', () => {
    expect(hasTrySeenCookie()).toBe(false);
  });

  it('returns true when the cookie is set', () => {
    document.cookie = 'moderne_try_seen=1; path=/';
    expect(hasTrySeenCookie()).toBe(true);
  });

  it('does not match a cookie whose name is a superstring of this one', () => {
    document.cookie = 'moderne_try_seen_extra=1; path=/';
    expect(hasTrySeenCookie()).toBe(false);
  });
});
