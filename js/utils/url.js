export const validateUrl = (url) => {
  const urlRegex = new RegExp(
    '^http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+$',
  );
  return urlRegex.test(url);
};
