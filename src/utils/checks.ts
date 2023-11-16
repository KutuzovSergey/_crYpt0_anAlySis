export const checkingUndefined = (tested: any): boolean => {
    if (typeof tested === 'undefined') {
        return true
    }
    return false
} 