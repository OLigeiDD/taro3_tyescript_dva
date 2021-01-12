import { cloud } from '@tarojs/taro'

interface ICloudFunctionProps {
  name: string
  data: {}
}
function cloudRequest({ name }: ICloudFunctionProps) {
  return cloud.callFunction({
    name,
    data: {},
  })
}

export default cloudRequest
