import Cookie from 'js-cookie';

const isAuthenticated = () => {
  return !!Cookie.get('token');
};

export default isAuthenticated;
