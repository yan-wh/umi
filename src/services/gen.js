import RequestServices from '@/utils/request';
export default function gen(params) {
  let url = ''
  let method = ''
  const paramsArray = params.split(' ')
  if (paramsArray.length === 2) {
    method = paramsArray[0];
    url = paramsArray[1];
  }

  return function (data) {
    return RequestServices({
      url,
      data,
      method,
    })
  }
}
