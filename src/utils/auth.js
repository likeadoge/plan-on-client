export const auth = () => ({
    owner() { return true },
    editor() { return false },
    viewer() { return false }
})