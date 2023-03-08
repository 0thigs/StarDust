
export function useToast() {

  function showToast(type, message) {
    return toast[type](message);
  }

  return { Toast, showToast };
}
