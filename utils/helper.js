export function filterData(text, resData) {
  const filteredData = resData.filter((res) =>
    res?.info?.name?.toLowerCase().includes(text.toLowerCase())
  );
  return filteredData;
}
