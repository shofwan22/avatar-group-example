export const getInitials = (name: string) => {
  const nameParts = name.split(' ');
  const initials =
    nameParts[0].charAt(0).toUpperCase() +
    (nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : '');
  return initials;
};
