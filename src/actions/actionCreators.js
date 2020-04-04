export const fetchCharcterInfoBegin = () => {
  console.log('fetchCharcterInfoBegin>>>>>>acton');
  return {
    type: 'FETCH_CHARCTER_BEGIN',
  };
};

export const fetchCharcterInfoSuccess = (data) => {
  console.log('fetchCharcterInfoSuccess>>>>>>acton');
  return {
    type: 'FETCH_CHARCTER_SUCCESS',
    data,
  };
};

export const fetchCharcterInfoFailure = error => ({
  type: 'FETCH_CHARCTER_FAILURE',
  error,
});
