const getRandomValue = (generatedIds: string[]): string => {
    const newId = Math.ceil(Math.random() * 1000000) + ''
    return generatedIds.includes(newId)
        ? getRandomValue(generatedIds)
        : newId
}

export const getRandomIds = (count: number, prefix: string = ''): string[] => {
    const result = [] as string[]
    for (let i = 0; i < count; i++) {
        result.push(prefix + getRandomValue(result))
    }
    return result
}