// composable function
export function useHttp () {
  
  const httpRegexp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

  const website = ref('');

  const validateWebsite = computed(() => !httpRegexp.test(website.value));

  return { website, validateWebsite };
}
