export const formatDate = (dateString: string): string => {
    const options: {} = { year: 'numeric', month: 'short', day: 'numeric' }
    const newDate = new Date(dateString).toLocaleDateString(undefined, options)
    return newDate
}
