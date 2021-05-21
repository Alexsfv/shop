class FocusCleanner {
    clearTags: string[]
    clearNode: HTMLElement | null = null

    constructor(clearTags: string[]) {
        this.clearTags = clearTags
    }

    addClearStyles(e: MouseEvent) {
        if (!this.shouldClearFocus(e) || !this.clearNode) return false
        this.clearNode.classList.add('clear-focus')
        this.clearNode.blur()
        this.clearNode = null
    }
    removeClearStyles(e: MouseEvent) {
        if (!this.shouldClearFocus(e) || !this.clearNode) return false
        const hasClearStyles = this.clearNode.classList.contains('clear-focus')
        if (hasClearStyles) {
            this.clearNode.blur()
            this.clearNode.classList.remove('clear-focus')
            this.clearNode = null
        }
    }
    shouldClearFocus(e: MouseEvent) {
        const target = e.target as HTMLElement | null
        if (!target) {
            this.clearNode = null
            return false
        }
        this.findClearNode(target)
        if (!this.clearNode) {
            this.clearNode = null
            return false
        }
        return true
    }
    findClearNode(target: HTMLElement) {
        let closestNode: HTMLElement | null = null

        if (this.clearTags.includes(target.tagName.toLowerCase())) {
            closestNode = target
        }
        if (!closestNode) {
            this.clearTags.forEach(selector => {
                const closest = target.closest(selector) as HTMLElement | null
                if (closest && !closestNode) closestNode = closest
            })
        }
        this.clearNode = closestNode
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

export default new FocusCleanner(['button', 'a'])