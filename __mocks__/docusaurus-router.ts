export const useLocation = () => ({
  pathname: '/',
  search: '',
  hash: '',
  state: null,
  key: 'default',
});

export const useHistory = () => ({
  push: () => undefined,
  replace: () => undefined,
});
