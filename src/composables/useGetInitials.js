// useGetInitials.js
export const useGetInitials = () => {
  const getInitials = (name, last_name) => {
    const fullName = [name, last_name].filter(Boolean).join(" ");

    const initials = fullName
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");

    return initials;
  };

  return { getInitials };
};
