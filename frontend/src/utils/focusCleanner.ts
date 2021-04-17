class FocusCleanner {
    clearNodes: string[]
    target: HTMLElement | null = null

    constructor(clearNodes: string[]) {
        this.clearNodes = clearNodes
    }

    addClearStyles(e: MouseEvent) {
        if (!this.shouldClearFocus(e) || !this.target) return false
        this.target.classList.add('clear-focus')
        this.target.blur()
    }
    removeClearStyles(e: MouseEvent) {
        if (!this.shouldClearFocus(e) || !this.target) return false
        const hasClearStyles = this.target.classList.contains('clear-focus')
        if (hasClearStyles) {
            this.target.blur()
            this.target.classList.remove('clear-focus')
            this.target = null
        }
    }
    shouldClearFocus(e: MouseEvent) {
        this.target = e.target as HTMLElement | null
        if (!this.target) {
            return false
        }
        return this.clearNodes.includes(this.target.nodeName)
    }
    handleMouseDown = (e: MouseEvent) => {
        this.addClearStyles(e)
    }
    handleMouseUp = (e: MouseEvent) => {
        this.removeClearStyles(e)
    }
    handleMouseLeave = (e: MouseEvent) => {
        this.removeClearStyles(e)
    }
    activate() {
        document.body.addEventListener('mousedown', this.handleMouseDown, true)
        document.body.addEventListener('mouseup', this.handleMouseUp, true)
        document.body.addEventListener('mouseleave', this.handleMouseLeave, true)
    }
    disable() {
        document.body.removeEventListener('mousedown', this.handleMouseDown, true)
        document.body.removeEventListener('mouseup', this.handleMouseUp, true)
        document.body.removeEventListener('mouseleave', this.handleMouseLeave, true)
    }
}

export default new FocusCleanner(['BUTTON', 'A'])