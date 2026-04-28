export const setAuthHeader = (email, password) => {
  const encoded = btoa(`${email}:${password}`);
  return `Basic ${encoded}`;
};
