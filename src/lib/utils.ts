export const getClientLanguage = (): 'ko' | 'en' => {
  const lang = navigator.language;
  const key = lang.split('-')[0]?.toLowerCase();

  if (key === 'kr' || key === 'ko') {
    return 'ko';
  } else {
    return 'en';
  }
};
