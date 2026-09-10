const TRY_SEEN_COOKIE = 'moderne_try_seen';

/**
 * Whether this browser has already landed in-app via a trial link once
 * before — set by moderne-ui as a Domain=.moderne.io cookie the first time a
 * ?trial=1 landing succeeds, so it's readable here without any network call.
 */
export const hasTrySeenCookie = (): boolean => {
  if (typeof document === 'undefined') {
    return false;
  }
  return document.cookie
    .split(';')
    .map((entry) => entry.trim())
    .some((entry) => entry.startsWith(`${TRY_SEEN_COOKIE}=`));
};
