export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("id_ID", {
    dateStyle: "medium",
  });
  return formatter.format(date);
};
