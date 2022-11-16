import axios from 'axios'

export default async () => {
  try {
    const { data } = await axios.get('https://quality.data.gov.tw/dq_download_json.php?nid=120449&md5_url=cdf3acccbd2b8e1f0e187e5e8fc0cd99')
    return data[0].cases
  } catch (error) {
    console.log('輸入錯誤')
    return 0
  }
}
