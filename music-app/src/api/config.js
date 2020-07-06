import axios from 'axios';

export const baseUrl = 'http://118.24.71.249:7777/'

const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res=> res.data,
    err=>{
        console.error(err,"网络错误")
    }
)

export const singerList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index)=>{
    return { id:index, picUrl:'http://p3.music.126.net/bBoXfTvCBryuuDB7yfcnxw==/39582418617681.jpg',name:'张国荣'}
})

export const types = [
    { name:'全部', key:-1 },
    { name:'男歌手', key:1 },
    { name:'女歌手', key:2 },
    { name:'乐队', key:3 }
]

export const areas = [
    { name:'全部', key:-1 },
    { name:'华语', key:7 },
    { name:'欧美', key:96 },
    { name:'日本', key:8 },
    { name:'韩国', key:16 },
]

export const alphaTypes = [{
    key: "A",
    name: "A"
  },
  {
    key: "B",
    name: "B"
  },
  {
    key: "C",
    name: "C"
  },
  {
    key: "D",
    name: "D"
  },
  {
    key: "E",
    name: "E"
  },
  {
    key: "F",
    name: "F"
  },
  {
    key: "G",
    name: "G"
  },
  {
    key: "H",
    name: "H"
  },
  {
    key: "I",
    name: "I"
  },
  {
    key: "J",
    name: "J"
  },
  {
    key: "K",
    name: "K"
  },
  {
    key: "L",
    name: "L"
  },
  {
    key: "M",
    name: "M"
  },
  {
    key: "N",
    name: "N"
  },
  {
    key: "O",
    name: "O"
  },
  {
    key: "P",
    name: "P"
  },
  {
    key: "Q",
    name: "Q"
  },
  {
    key: "R",
    name: "R"
  },
  {
    key: "S",
    name: "S"
  },
  {
    key: "T",
    name: "T"
  },
  {
    key: "U",
    name: "U"
  },
  {
    key: "V",
    name: "V"
  },
  {
    key: "W",
    name: "W"
  },
  {
    key: "X",
    name: "X"
  },
  {
    key: "Y",
    name: "Y"
  },
  {
    key: "Z",
    name: "Z"
  }
];

export{
    axiosInstance
}
