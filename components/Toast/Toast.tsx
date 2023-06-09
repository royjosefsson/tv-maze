interface ToastProps {
    isVisible: boolean
}

const Toast = (props: ToastProps) => {
    const { isVisible } = props
    return (
        <div className={`toast ${isVisible ? "visible" : ""}`.trim()}>
            Laddar...
        </div>
    )
}

export default Toast