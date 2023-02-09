export function reorderItems(items, setItems) {
    const reorderedOptions = items.sort(() => {
      return Math.random() - 0.5;
    });
    setItems(reorderedOptions);
  }
