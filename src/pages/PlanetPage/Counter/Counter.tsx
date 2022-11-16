import React, { useRef, useEffect } from 'react'
import { animate } from 'framer-motion'

const Counter: React.FC<{ from: number, to: number }> = ({ from, to }) => {
    const nodeRef = useRef()
    useEffect(() => {
        const node: any = nodeRef.current
        const controls = animate(from, to, {
            duration: 0.8,
            onUpdate(value) {
                node.textContent = value.toFixed(2)
            }
        })
        return () => controls.stop()
    }, [from, to])
    return <span ref={nodeRef} />
}

export default Counter