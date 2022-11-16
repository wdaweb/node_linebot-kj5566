import axios from 'axios'

export default async () => {
  try {
    const { data } = await axios.get('https://quality.data.gov.tw/dq_download_json.php?nid=120450&md5_url=02bd6ba50ef7d355cb8cd9e8685bec1c')
    return data[0]
  } catch (error) {
    console.log('輸入錯誤')
    return 0
  }
}
