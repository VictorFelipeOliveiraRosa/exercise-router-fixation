export const isAuthenticated = ({ login, password }) => {
  const USER = 'joao';
  const PASSWORD = 1234;
  if (USER === login && PASSWORD === password) {
    return true;
  }
  return false;
};
