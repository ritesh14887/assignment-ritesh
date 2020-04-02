export const fetchCharcterInfoBegin = () => ({
  type: 'FETCH_CHARCTER_BEGIN',
});

export const fetchCharcterInfoSuccess = data => ({
  type: 'FETCH_CHARCTER_SUCCESS',
  data,
});

export const fetchCharcterInfoFailure = error => ({
  type: 'FETCH_CHARCTER_FAILURE',
  error,
});
