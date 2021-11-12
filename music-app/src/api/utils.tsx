//简化播放数量
export function formatCount(count: number): string{
    if(count<10000){
        return `${count}`
    }else if( Math.floor(count/10000) < 10000){
        return `${Math.floor(count/1000) / 10}万`
    }else{
        return `${Math.floor(count/10000000)/10}亿`
    }
}