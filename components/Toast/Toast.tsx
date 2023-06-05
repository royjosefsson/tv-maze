interface ToastProps {
    isVisible: boolean
}

const Toast = (props: ToastProps) => {
    const {isVisible} = props
    return (
        <div className={`toast ${isVisible ? "visible" : ""}`}>
            Laddar...
        </div>
    )
}

export default Toast