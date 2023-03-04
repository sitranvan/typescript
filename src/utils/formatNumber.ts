export default function formatNumber(num: number): string {
    if (num > 1000 && num < 1000000) {
        return (num / 1000).toFixed(0) + 'k'
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(0) + 'm'
    } else {
        return num.toString()
    }
}
