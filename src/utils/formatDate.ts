export function formatDate(dt: string): string {
    // Chuyển đổi chuỗi thành đối tượng Date
    const stringDate: Date = new Date(dt)
    // Lấy thời điểm hiện tại
    const now: Date = new Date()
    // Tính khoảng thời gian giữa thời điểm đó và thời điểm hiện tại tính bằng mili giây
    const delta: number = now.getTime() - stringDate.getTime()
    // Tính số ngày tính từ thời điểm đó tới hiện tại
    const days: number = Math.floor(delta / (24 * 60 * 60 * 1000))
    // In số ngày tính từ thời điểm đó tới hiện tại
    return `${days} days ago`
}
