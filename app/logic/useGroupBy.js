export function useGroupBy() {
  const groupBy = (array, key) => {
    return array.reduce((acc, item) => {
      const groupKey = item[key]

      if (!acc[groupKey]) {
        acc[groupKey] = []
      }

      acc[groupKey].push(item)

      return acc
    }, {})
  }

  const groupData = (data, type) => {
    const grouped = groupBy(data, 'type')

    const result = grouped[type] || []

    console.log(result)

    return result
  }

  return {
    groupBy,
    groupData
  }
}
