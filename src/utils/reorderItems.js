export function reorderItems(items, setItems) {
  const originalItems = [...items];
  const reorderedOptions = originalItems.sort(() => {
    return Math.random() - 0.5;
  });

  setItems(reorderedOptions);
}
